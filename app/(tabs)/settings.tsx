import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { AppStyles } from "@/constants/styles";
import { Colors } from "@/constants/theme";
import { useAppTheme } from "@/context/ThemeContext";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, BackHandler, Platform, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const { toggleTheme, isDark, colorScheme } = useAppTheme();
  const theme = Colors[colorScheme ?? "light"];
  const router = useRouter();

  const handleHelp = () => {
    router.push("/help");
  };

  const handleExit = () => {
    if (Platform.OS === "android") {
      BackHandler.exitApp();
    } else if (Platform.OS === "web") {
      // Browsers usually only allow window.close() if the script opened the window.
      // We provide an alert as fallback.
      if (typeof window !== 'undefined') {
        window.close();
        setTimeout(() => {
          Alert.alert(
            "Exit", 
            "Since this is a web browser, please close the tab to exit the application."
          );
        }, 500);
      }
    } else {
      Alert.alert("Exit", "Use your device's home button or swipe to close the app.");
    }
  };

  return (
    <ThemedView style={[AppStyles.container, { paddingTop: insets.top }]}>
      <View style={AppStyles.sectionHeader}>
        <ThemedText type="title">Settings</ThemedText>
        <ThemedText style={{ marginTop: 8, color: theme.icon }}>
          Customize your experience.
        </ThemedText>
      </View>

      <View style={{ padding: 20, gap: 16 }}>
        {/* Theme Toggle */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={toggleTheme}
          style={[
            AppStyles.card,
            {
              backgroundColor: theme.card,
              shadowColor: theme.text,
              flexDirection: "row",
              alignItems: "center",
            },
          ]}
        >
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: isDark ? "#1E293B" : "#F1F5F9",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 16,
              borderWidth: 1,
              borderColor: isDark ? "#334155" : "#E2E8F0"
            }}
          >
            <IconSymbol
              name={isDark ? "sun.max.fill" : "moon.fill"}
              color={theme.tint}
              size={24}
            />
          </View>
          <View style={{ flex: 1 }}>
            <ThemedText type="defaultSemiBold">Theme</ThemedText>
            <ThemedText style={{ color: theme.icon, marginTop: 4 }}>
              {isDark ? "Dark Mode — Tap for Light" : "Light Mode — Tap for Dark"}
            </ThemedText>
          </View>
          <IconSymbol name="chevron.right" color={theme.icon} size={20} />
        </TouchableOpacity>

        {/* Help */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleHelp}
          style={[
            AppStyles.card,
            {
              backgroundColor: theme.card,
              shadowColor: theme.text,
              flexDirection: "row",
              alignItems: "center",
            },
          ]}
        >
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: isDark ? "#064E3B" : "#ECFDF5",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 16,
              borderWidth: 1,
              borderColor: isDark ? "#065F46" : "#D1FAE5"
            }}
          >
            <IconSymbol
              name="questionmark.circle.fill"
              color={theme.success}
              size={24}
            />
          </View>
          <View style={{ flex: 1 }}>
            <ThemedText type="defaultSemiBold">Help & Guide</ThemedText>
            <ThemedText style={{ color: theme.icon, marginTop: 4 }}>
              Navigate to instructions
            </ThemedText>
          </View>
          <IconSymbol name="chevron.right" color={theme.icon} size={20} />
        </TouchableOpacity>

        {/* Exit */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleExit}
          style={[
            AppStyles.card,
            {
              backgroundColor: theme.card,
              shadowColor: theme.text,
              flexDirection: "row",
              alignItems: "center",
            },
          ]}
        >
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: isDark ? "#7F1D1D" : "#FEF2F2",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 16,
              borderWidth: 1,
              borderColor: isDark ? "#991B1B" : "#FEE2E2"
            }}
          >
            <IconSymbol
              name="rectangle.portrait.and.arrow.right"
              color={theme.error}
              size={24}
            />
          </View>
          <View style={{ flex: 1 }}>
            <ThemedText type="defaultSemiBold">Exit</ThemedText>
            <ThemedText style={{ color: theme.icon, marginTop: 4 }}>
              Close the application
            </ThemedText>
          </View>
          <IconSymbol name="chevron.right" color={theme.icon} size={20} />
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}
