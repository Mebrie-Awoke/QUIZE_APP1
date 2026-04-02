import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { AppStyles } from "@/constants/styles";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
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
        <ThemedText type="title">RN Mastery</ThemedText>
        <ThemedText style={{ marginTop: 8, color: theme.icon }}>
          Loading quiz content...
        </ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={[AppStyles.container, { paddingTop: insets.top }]}>
      <View style={AppStyles.homeContent}>
        <View style={AppStyles.homeHeader}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={AppStyles.homeLogo}
            contentFit="contain"
          />
          <ThemedText type="title" style={AppStyles.homeTitle}>
            RN Mastery
          </ThemedText>
          <ThemedText style={[AppStyles.homeSubtitle, { color: theme.icon }]}>
            Master React Native with concise notes and adaptive quizzes.
          </ThemedText>
        </View>

        <ThemedView
          style={[
            AppStyles.card,
            AppStyles.tipCard,
            { backgroundColor: theme.card, shadowColor: theme.text },
          ]}
        >
          <View style={AppStyles.tipHeader}>
            <IconSymbol name="lightbulb.fill" color={theme.tint} size={24} />
            <ThemedText
              type="defaultSemiBold"
              style={{ marginLeft: 8, color: theme.tint }}
            >
              Daily Tip
            </ThemedText>
          </View>
          <ThemedText style={[AppStyles.tipText, { color: theme.text }]}>
            React Native uses Flexbox for layout, but the default flexDirection
            is 'column', not 'row' like on the web!
          </ThemedText>
        </ThemedView>

        <View style={AppStyles.actionsGap}>
          <TouchableOpacity
            style={[AppStyles.primaryButton, { backgroundColor: theme.tint }]}
            activeOpacity={0.8}
            onPress={() => router.push("/quiz")}
          >
            <ThemedText style={AppStyles.primaryButtonText}>
              Start Random Quiz
            </ThemedText>
            <IconSymbol name="chevron.right" color="#fff" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </ThemedView>
  );
}
