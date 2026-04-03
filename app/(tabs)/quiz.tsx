import { QuizCard } from "@/components/QuizCard";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { AppStyles } from "@/constants/styles";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Question } from "@/types";
import questionsData from "@/data/questions.json";
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function QuizScreen() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    const allQuestions = questionsData as Question[];
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
    setQuizStarted(true);
  };

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
    setShowResult(true);
    if (questions[currentIndex] && index === questions[currentIndex].correctAnswerIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  // Landing state: show a start button
  if (!quizStarted) {
    return (
      <ThemedView
        style={[AppStyles.container, AppStyles.centeredFlex, { paddingTop: insets.top }]}
      >
        <View style={{ alignItems: "center", padding: 40 }}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: theme.tint + "20",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            <IconSymbol name="play.circle.fill" color={theme.tint} size={56} />
          </View>
          <ThemedText type="title" style={{ marginBottom: 12 }}>
            Ready to Quiz?
          </ThemedText>
          <ThemedText
            style={{ color: theme.icon, textAlign: "center", marginBottom: 32, lineHeight: 22 }}
          >
            Test your React Native knowledge with 10 randomized questions.
          </ThemedText>
          <TouchableOpacity
            style={[AppStyles.primaryButton, { backgroundColor: theme.tint, paddingHorizontal: 40 }]}
            activeOpacity={0.8}
            onPress={startQuiz}
          >
            <ThemedText style={AppStyles.primaryButtonText}>Start Quiz</ThemedText>
            <IconSymbol name="chevron.right" color="#fff" size={20} />
          </TouchableOpacity>
        </View>
      </ThemedView>
    );
  }

  // Score screen
  if (isFinished) {
    return (
      <ThemedView
        style={[AppStyles.container, AppStyles.centeredFlex, { paddingTop: insets.top }]}
      >
        <View style={AppStyles.scoreContainer}>
          <ThemedText type="title" style={{ marginBottom: 20 }}>
            Quiz Completed!
          </ThemedText>
          <ThemedView
            style={[AppStyles.scoreCircle, { borderColor: theme.tint }]}
          >
            <ThemedText
              type="title"
              style={{ fontSize: 48, color: theme.tint }}
            >
              {score}/{questions.length}
            </ThemedText>
          </ThemedView>
          <ThemedText style={[AppStyles.scoreMessage, { color: theme.text }]}>
            {score === questions.length
              ? "Perfect Score! You're an RN Master! 🎉"
              : "Great effort! Keep studying those notes!"}
          </ThemedText>
          <TouchableOpacity
            style={[
              AppStyles.actionButton,
              { backgroundColor: theme.tint, marginTop: 40 },
            ]}
            onPress={startQuiz}
          >
            <ThemedText style={AppStyles.actionButtonText}>
              Try Again
            </ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>
    );
  }

  if (questions.length === 0) return null;

  const currentQuestion = questions[currentIndex];

  return (
    <ThemedView style={[AppStyles.container, { paddingTop: insets.top }]}>
      <View style={AppStyles.quizHeader}>
        <TouchableOpacity onPress={() => setQuizStarted(false)}>
          <ThemedText style={{ color: theme.tint }}>Cancel</ThemedText>
        </TouchableOpacity>
        <ThemedText type="defaultSemiBold">
          Question {currentIndex + 1} of {questions.length}
        </ThemedText>
        <View style={{ width: 50 }} />
      </View>

      <View style={[AppStyles.progressBg, { backgroundColor: theme.card }]}>
        <View
          style={[
            AppStyles.progressFill,
            {
              backgroundColor: theme.tint,
              width: `${(currentIndex / questions.length) * 100}%`,
            },
          ]}
        />
      </View>

      <ScrollView
        contentContainerStyle={AppStyles.quizScroll}
        showsVerticalScrollIndicator={false}
      >
        <QuizCard
          question={currentQuestion}
          selectedOptionIndex={selectedOption}
          onSelectOption={handleSelectOption}
          showResult={showResult}
        />

        {showResult && (
          <TouchableOpacity
            style={[
              AppStyles.actionButton,
              { backgroundColor: theme.tint, marginTop: 24 },
            ]}
            onPress={handleNext}
          >
            <ThemedText style={AppStyles.actionButtonText}>
              {currentIndex < questions.length - 1
                ? "Next Question"
                : "Finish Quiz"}
            </ThemedText>
          </TouchableOpacity>
        )}
      </ScrollView>
    </ThemedView>
  );
}
