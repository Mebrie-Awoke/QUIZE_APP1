import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';
import { Question } from '../types';
import { useThemeColor } from '@/hooks/use-theme-color';
import { IconSymbol } from './ui/icon-symbol';
import { AppStyles } from '@/constants/styles';

interface QuizCardProps {
  question: Question;
  selectedOptionIndex: number | null;
  onSelectOption: (index: number) => void;
  showResult: boolean;
}

export function QuizCard({ question, selectedOptionIndex, onSelectOption, showResult }: QuizCardProps) {
  const cardColor = useThemeColor({}, 'card');
  const textColor = useThemeColor({}, 'text');
  const successColor = useThemeColor({}, 'success');
  const errorColor = useThemeColor({}, 'error');

  return (
    <ThemedView style={[AppStyles.card, AppStyles.quizCardSpacing, { backgroundColor: cardColor, shadowColor: textColor }]}>
      <ThemedText type="subtitle" style={AppStyles.questionText}>{question.text}</ThemedText>

      <View style={AppStyles.optionsGap}>
        {question.options.map((option, index) => {
          const isSelected = selectedOptionIndex === index;
          const isCorrect = question.correctAnswerIndex === index;

          let borderColor = textColor;
          let borderWidth = 0.5;
          let icon = null;

          if (showResult) {
            if (isCorrect) {
              borderColor = successColor;
              borderWidth = 2;
              icon = <IconSymbol name="checkmark.circle.fill" color={successColor} size={20} />;
            } else if (isSelected && !isCorrect) {
              borderColor = errorColor;
              borderWidth = 2;
              icon = <IconSymbol name="xmark.circle.fill" color={errorColor} size={20} />;
            }
          } else if (isSelected) {
            borderWidth = 2;
          }

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              disabled={showResult}
              style={[AppStyles.optionBtn, { borderColor, borderWidth }]}
              onPress={() => onSelectOption(index)}
            >
              <ThemedText style={[{ flex: 1 }, isSelected && !showResult && { fontWeight: 'bold' }]}>
                {option}
              </ThemedText>
              {icon}
            </TouchableOpacity>
          );
        })}
      </View>

      {showResult && (
        <ThemedView style={[AppStyles.explanationBox, { backgroundColor: cardColor, borderColor: successColor }]}>
          <ThemedText type="defaultSemiBold" style={{ color: successColor, marginBottom: 4 }}>Explanation</ThemedText>
          <ThemedText>{question.explanation}</ThemedText>
        </ThemedView>
      )}
    </ThemedView>
  );
}
