import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider as NavThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { ThemeProvider, useAppTheme } from "@/context/ThemeContext";
import { Colors } from "@/constants/theme";
import { ThemedView } from "@/components/themed-view";
import { AnimatedSplashScreen } from "@/components/animated-splash-screen";

// Define Custom Navigation Themes to match our brand
const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: Colors.dark.tint,
    background: Colors.dark.background,
    card: Colors.dark.card,
    text: Colors.dark.text,
    border: Colors.dark.background,
    notification: Colors.dark.tint,
  },
};

const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.light.tint,
    background: Colors.light.background,
    card: Colors.light.card,
    text: Colors.light.text,
    border: Colors.light.background,
    notification: Colors.light.tint,
  },
};

SplashScreen.preventAutoHideAsync().catch(() => {});

export const unstable_settings = {
  anchor: "(tabs)",
};

function InnerLayout() {
  const { isDark } = useAppTheme();
  const [isAppReady, setIsAppReady] = useState(false);
  const [isSplashFinished, setIsSplashFinished] = useState(false);

  useEffect(() => {
    // Basic initialization
    const prepare = async () => {
      try {
        // Any async tasks (fonts, data, etc.) would go here
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsAppReady(true);
        // Hide the native splash screen as soon as our app is ready to show the custom one
        await SplashScreen.hideAsync().catch(() => {});
      }
    };

    prepare();
  }, []);

  if (!isAppReady || !isSplashFinished) {
    return (
      <AnimatedSplashScreen onAnimationComplete={() => setIsSplashFinished(true)} />
    );
  }

  return (
    <NavThemeProvider value={isDark ? CustomDarkTheme : CustomLightTheme}>
      <ThemedView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen 
            name="help" 
            options={{ 
              headerShown: false,
              animation: 'slide_from_right'
            }} 
          />
        </Stack>
        <StatusBar style={isDark ? "light" : "dark"} />
      </ThemedView>
    </NavThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <InnerLayout />
    </ThemeProvider>
  );
}

