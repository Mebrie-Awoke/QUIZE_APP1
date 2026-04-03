import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { AppStyles } from "@/constants/styles";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HelpScreen() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  const router = useRouter();

  const sections = [
    {
      title: "Getting Started",
      icon: "house.fill",
      content: " This app is designed to help you master React Native through focused study notes and challenging quizzes.",
    },
    {
      title: "Study Notes",
      icon: "book.fill",
      content: "Go to the Home tab to find a comprehensive list of study notes. Tap on any note to expand it and read about fundamental concepts, architecture, and core components.",
    },
    {
      title: "Take a Quiz",
      icon: "paperplane.fill",
      content: "The Quiz tab offers a randomized 10-question quiz pulled from over 100 library questions. Test your knowledge and see your score at the end!",
    },
  
  ];

  return (
    <ThemedView style={[AppStyles.container, { paddingTop: insets.top }]}>
      <View style={[AppStyles.sectionHeader, { flexDirection: 'row', alignItems: 'center' }]}>
        <TouchableOpacity 
          onPress={() => router.back()} 
          style={{ marginRight: 16, padding: 8 }}
        >
          <IconSymbol name="chevron.left" color={theme.tint} size={28} />
        </TouchableOpacity>
        <ThemedText type="title">Help </ThemedText>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>
        {sections.map((section, index) => (
          <View 
            key={index} 
            style={[
              AppStyles.card, 
              { 
                backgroundColor: theme.card, 
                shadowColor: theme.text,
                borderLeftWidth: 4,
                borderLeftColor: theme.tint
              }
            ]}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
              <IconSymbol name={section.icon as any} color={theme.tint} size={24} />
              <ThemedText type="subtitle" style={{ marginLeft: 12 }}>{section.title}</ThemedText>
            </View>
            <ThemedText style={{ color: theme.icon, lineHeight: 24 }}>
              {section.content}
            </ThemedText>
          </View>
        ))}

        <View style={{ marginTop: 20, alignItems: 'center', paddingBottom: 40 }}>
          <ThemedText style={{ color: theme.icon, fontSize: 14 }}>
            RN Mastery Version 1.0.0
          </ThemedText>
          <ThemedText style={{ color: theme.icon, fontSize: 12, marginTop: 4 }}>
            Built by Mebrie for React Native Developers
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
