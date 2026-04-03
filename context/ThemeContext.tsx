import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme as useSystemColorScheme, Platform, Appearance } from 'react-native';
import * as SystemUI from 'expo-system-ui';
import { Colors } from '@/constants/theme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  colorScheme: ThemeMode;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  colorScheme: 'light',
  toggleTheme: () => {},
  isDark: false,
});

const STORAGE_KEY = 'rn_mastery_theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useSystemColorScheme();
  const [overrideScheme, setOverrideScheme] = useState<ThemeMode>('light');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initial load from storage OR system
  useEffect(() => {
    const loadTheme = () => {
      if (Platform.OS === 'web' && typeof window !== 'undefined') {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'light' || saved === 'dark') {
          setOverrideScheme(saved as ThemeMode);
          setIsInitialized(true);
          return;
        }
      }
      setOverrideScheme(systemScheme === 'dark' ? 'dark' : 'light');
      setIsInitialized(true);
    };
    loadTheme();
  }, [systemScheme]);

  // Sync Appearance API and System Background
  useEffect(() => {
    if (!isInitialized) return;
    
    // Set Appearance preference (where supported)
    if (Appearance.setColorScheme) {
      Appearance.setColorScheme(overrideScheme);
    }
    
    // Set Native/Web System Background
    const color = Colors[overrideScheme].background;
    SystemUI.setBackgroundColorAsync(color).catch(() => {});
  }, [overrideScheme, isInitialized]);

  const toggleTheme = () => {
    const next = overrideScheme === 'dark' ? 'light' : 'dark';
    setOverrideScheme(next);
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, next);
    }
  };

  // We only render children once we know the initial theme to prevent flicker
  if (!isInitialized) return null;

  return (
    <ThemeContext.Provider
      value={{
        colorScheme: overrideScheme,
        toggleTheme,
        isDark: overrideScheme === 'dark',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  return useContext(ThemeContext);
}
