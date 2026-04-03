import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme as useSystemColorScheme, Platform, Appearance } from 'react-native';
import * as SystemUI from 'expo-system-ui';
import { Colors } from '@/constants/theme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  colorScheme: ThemeMode;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  colorScheme: 'light',
  isDark: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useSystemColorScheme();
  const themeMode: ThemeMode = systemScheme === 'dark' ? 'dark' : 'light';

  // Sync SystemUI/Browser background based on system scheme
  useEffect(() => {
    const color = Colors[themeMode].background;
    SystemUI.setBackgroundColorAsync(color).catch(() => {});
  }, [themeMode]);

  return (
    <ThemeContext.Provider
      value={{
        colorScheme: themeMode,
        isDark: themeMode === 'dark',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  return useContext(ThemeContext);
}
