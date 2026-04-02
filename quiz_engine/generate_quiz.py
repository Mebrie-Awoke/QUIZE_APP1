#!/usr/bin/env python3
"""
Generate random MCQs from PDF files in a data folder.

Usage:
  python quiz_engine/generate_quiz.py --data-folder data --num-questions 10 --output quiz.json
"""

from __future__ import annotations

import argparse
import json
import random
import re
from dataclasses import dataclass
from pathlib import Path
from typing import List

from pypdf import PdfReader


WORD_RE = re.compile(r"[A-Za-z][A-Za-z\-]{2,}")
SENTENCE_SPLIT_RE = re.compile(r"(?<=[.!?])\s+")


@dataclass
class SourceSentence:
    source_file: str
    sentence: str


@dataclass
class MCQ:
    question: str
    options: List[str]
    answer_index: int
    source_file: str


def read_pdf_text(pdf_path: Path) -> str:
    reader = PdfReader(str(pdf_path))
    pages = []
    for page in reader.pages:
        text = page.extract_text() or ""
        pages.append(text)
    return "\n".join(pages)


def clean_sentence(sentence: str) -> str:
    sentence = re.sub(r"\s+", " ", sentence).strip()
    sentence = re.sub(r"^\W+|\W+$", "", sentence)
    return sentence


def extract_sentences(pdf_path: Path) -> List[SourceSentence]:
    text = read_pdf_text(pdf_path)
    rough = SENTENCE_SPLIT_RE.split(text)
    output: List[SourceSentence] = []
    for item in rough:
        sentence = clean_sentence(item)
        if not sentence:
            continue
        words = WORD_RE.findall(sentence)
        if 7 <= len(words) <= 28:
            output.append(SourceSentence(source_file=pdf_path.name, sentence=sentence))
    return output


def choose_answer_token(sentence: str) -> str | None:
    words = WORD_RE.findall(sentence)
    candidates = [w for w in words if len(w) >= 5]
    if not candidates:
        return None
    return random.choice(candidates)


def mask_answer(sentence: str, answer: str) -> str:
    pattern = re.compile(rf"\b{re.escape(answer)}\b", re.IGNORECASE)
    return pattern.sub("_____", sentence, count=1)


def build_word_bank(sentences: List[SourceSentence]) -> List[str]:
    words = []
    for item in sentences:
        words.extend(WORD_RE.findall(item.sentence))
    unique = sorted(set(w for w in words if len(w) >= 5))
    return unique


def build_options(answer: str, word_bank: List[str], option_count: int = 4) -> List[str]:
    lower_answer = answer.lower()
    pool = [w for w in word_bank if w.lower() != lower_answer]

    same_shape = [w for w in pool if abs(len(w) - len(answer)) <= 2]
    random.shuffle(same_shape)
    distractors = same_shape[: option_count - 1]

    if len(distractors) < option_count - 1:
        fallback_pool = [w for w in pool if w not in distractors]
        random.shuffle(fallback_pool)
        distractors.extend(fallback_pool[: (option_count - 1 - len(distractors))])

    options = distractors + [answer]
    random.shuffle(options)
    return options


def generate_mcqs(sentences: List[SourceSentence], num_questions: int = 10) -> List[MCQ]:
    if not sentences:
        return []

    word_bank = build_word_bank(sentences)
    random.shuffle(sentences)

    mcqs: List[MCQ] = []
    used_questions = set()

    for item in sentences:
        answer = choose_answer_token(item.sentence)
        if not answer:
            continue

        question = mask_answer(item.sentence, answer)
        if "_____" not in question or question in used_questions:
            continue

        options = build_options(answer, word_bank, option_count=4)
        if len(options) < 4:
            continue

        answer_index = options.index(answer)
        mcqs.append(
            MCQ(
                question=question,
                options=options,
                answer_index=answer_index,
                source_file=item.source_file,
            )
        )
        used_questions.add(question)

        if len(mcqs) >= num_questions:
            break

    return mcqs


def load_all_sentences(data_folder: Path) -> List[SourceSentence]:
    pdf_files = sorted(data_folder.glob("*.pdf"))
    all_sentences: List[SourceSentence] = []
    for pdf in pdf_files:
        all_sentences.extend(extract_sentences(pdf))
    return all_sentences


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate random MCQs from PDFs.")
    parser.add_argument("--data-folder", default="data", help="Folder containing PDF files.")
    parser.add_argument("--num-questions", type=int, default=10, help="Number of MCQs to generate.")
    parser.add_argument("--output", default="", help="Optional JSON output file path.")
    parser.add_argument("--seed", type=int, default=None, help="Random seed for reproducibility.")
    args = parser.parse_args()

    if args.seed is not None:
        random.seed(args.seed)

    data_folder = Path(args.data_folder)
    if not data_folder.exists():
        raise FileNotFoundError(f"Data folder not found: {data_folder}")

    sentences = load_all_sentences(data_folder)
    quiz = generate_mcqs(sentences, num_questions=args.num_questions)

    payload = {
        "question_count": len(quiz),
        "questions": [
            {
                "question": q.question,
                "options": q.options,
                "answer_index": q.answer_index,
                "source_file": q.source_file,
            }
            for q in quiz
        ],
    }

    if args.output:
        out_path = Path(args.output)
        out_path.write_text(json.dumps(payload, indent=2), encoding="utf-8")
        print(f"Wrote quiz to {out_path} ({len(quiz)} questions)")
    else:
        print(json.dumps(payload, indent=2))


if __name__ == "__main__":
    main()

