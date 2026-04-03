import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { AppStyles } from "@/constants/styles";
import { Colors } from "@/constants/theme";
import { useAppTheme } from "@/context/ThemeContext";
import { useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  BackHandler,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const { isDark, colorScheme } = useAppTheme();
  const theme = Colors[colorScheme ?? "light"];
  const router = useRouter();

  const handleHelp = () => {
    router.push("/help");
  };

  const handleExit = () => {
    if (Platform.OS === "android") {
      BackHandler.exitApp();
    } else if (Platform.OS === "web") {
      if (typeof window !== "undefined") {
        window.close();
        setTimeout(() => {
          Alert.alert(
            "Exit",
            "Since this is a web browser, please close the tab to exit the application.",
          );
        }, 500);
      }
    } else {
      Alert.alert(
        "Exit",
        "Use your device's home button or swipe to close the app.",
      );
    }
  };

  return (
    <ThemedView style={[AppStyles.container, { paddingTop: insets.top }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
      >
        <View style={AppStyles.sectionHeader}>
          <ThemedText type="title">Settings</ThemedText>
        </View>

        <View style={{ padding: 20, gap: 16 }}>
          <ThemedText
            type="defaultSemiBold"
            style={{ marginLeft: 4, opacity: 0.6 }}
          >
            Share & Support
          </ThemedText>

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
                borderColor: isDark ? "#065F46" : "#D1FAE5",
              }}
            >
              <IconSymbol name="book.fill" color={theme.success} size={24} />
            </View>
            <View style={{ flex: 1 }}>
              <ThemedText type="defaultSemiBold">Help</ThemedText>
              <ThemedText style={{ color: theme.icon, marginTop: 2 }}>
                How to use the app
              </ThemedText>
            </View>
            <IconSymbol name="chevron.right" color={theme.icon} size={20} />
          </TouchableOpacity>

          {/* Share */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              Alert.alert("Share", "Share link copied to clipboard")
            }
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
                backgroundColor: isDark ? "#1a365d" : "#ebf8ff",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 16,
                borderWidth: 1,
                borderColor: isDark ? "#2b6cb0" : "#bee3f8",
              }}
            >
              <IconSymbol name="share" color={theme.tint} size={24} />
            </View>
            <View style={{ flex: 1 }}>
              <ThemedText type="defaultSemiBold">Share</ThemedText>
              <ThemedText style={{ color: theme.icon, marginTop: 2 }}>
                Invite others to learn
              </ThemedText>
            </View>
            <IconSymbol name="chevron.right" color={theme.icon} size={20} />
          </TouchableOpacity>

          {/* App Info Section */}
          <ThemedText
            type="defaultSemiBold"
            style={{ marginLeft: 4, opacity: 0.6, marginTop: 8 }}
          >
            About App
          </ThemedText>

          {/* About App */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              Alert.alert(
                "About",
                "RN Mastery v1.0.0\nBuilt by Mebrie for React Native Developers.",
              )
            }
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
                backgroundColor: isDark ? "#2D3748" : "#F7FAFC",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 16,
                borderWidth: 1,
                borderColor: isDark ? "#4A5568" : "#E2E8F0",
              }}
            >
              <IconSymbol name="info" color={theme.icon} size={24} />
            </View>
            <View style={{ flex: 1 }}>
              <ThemedText type="defaultSemiBold">About App</ThemedText>
              <ThemedText style={{ color: theme.icon, marginTop: 2 }}>
                React Native Mastery app
              </ThemedText>
            </View>
          </TouchableOpacity>

          {/* System Section */}
          <ThemedText
            type="defaultSemiBold"
            style={{ marginLeft: 4, opacity: 0.6, marginTop: 8 }}
          >
            System
          </ThemedText>

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
                borderColor: isDark ? "#991B1B" : "#FEE2E2",
              }}
            >
              <IconSymbol
                name="rectangle.portrait.and.arrow.right"
                color={theme.error}
                size={24}
              />
            </View>
            <View style={{ flex: 1 }}>
              <ThemedText type="defaultSemiBold">Exit Application</ThemedText>
              <ThemedText style={{ color: theme.icon, marginTop: 2 }}>
                Close the app session
              </ThemedText>
            </View>
            <IconSymbol name="chevron.right" color={theme.icon} size={20} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
