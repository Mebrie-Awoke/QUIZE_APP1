import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { NoteCard } from "@/components/NoteCard";
import { reactNativeNotes } from "@/data/notes";
import { AppStyles } from "@/constants/styles";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  const insets = useSafeAreaInsets();
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsSplashVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return (
      <ThemedView
        style={[
          AppStyles.container,
          AppStyles.centeredFlex,
          { backgroundColor: theme.background },
        ]}
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: 180, height: 180, marginBottom: 20 }}
          contentFit="contain"
        />
        <ThemedText type="title">React Native</ThemedText>
        <ThemedText style={{ marginTop: 8, color: theme.icon }}>
        </ThemedText>
      </ThemedView>
    );
  }

  const renderHeader = () => (
    <View style={{ marginBottom: 24 }}>
      <View style={[AppStyles.homeHeader, { marginTop: 24 }]}>
        <ThemedText type="title" style={AppStyles.homeTitle}>
          Wellcome To React Native Quiz App 
        </ThemedText>
        <ThemedText style={[AppStyles.homeSubtitle, { color: theme.icon }]}>
          Master React Native with concise notes with 100+ quiz questions.
        </ThemedText>
      </View>

      <TouchableOpacity
        style={[AppStyles.primaryButton, { backgroundColor: theme.tint, marginBottom: 32 }]}
        activeOpacity={0.8}
        onPress={() => router.push("/quiz")}
      >
        <ThemedText style={AppStyles.primaryButtonText}>
          Start Quiz
        </ThemedText>
        <IconSymbol name="play.circle.fill" color="#fff" size={24} />
      </TouchableOpacity>

      <View style={AppStyles.sectionHeader}>
        <ThemedText type="title">React Native</ThemedText>
        <ThemedText style={{ marginTop: 8, color: theme.icon }}>
          Basic React Native notes.
        </ThemedText>
      </View>
    </View>
  );

  return (
    <ThemedView style={[AppStyles.container, { paddingTop: insets.top }]}>
      <FlatList
        data={reactNativeNotes}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => <NoteCard note={item} />}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      />
    </ThemedView>
  );
}
