import { QuizCard } from "@/components/QuizCard";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { AppStyles } from "@/constants/styles";
import { Colors } from "@/constants/theme";
import { reactNativeQuestions } from "@/data/questions";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Question } from "@/types";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function QuizScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const shuffled = [...reactNativeQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));
  }, []);

  if (questions.length === 0) return null;

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
    setShowResult(true);
    if (index === currentQuestion.correctAnswerIndex) {
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

  if (isFinished) {
    return (
      <ThemedView
        style={[
          AppStyles.container,
          AppStyles.centeredFlex,
          { paddingTop: insets.top },
        ]}
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
            onPress={() => router.replace("/")}
          >
            <ThemedText style={AppStyles.actionButtonText}>
              Return Home
            </ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={[AppStyles.container, { paddingTop: insets.top }]}>
      <View style={AppStyles.quizHeader}>
        <TouchableOpacity onPress={() => router.back()}>
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
