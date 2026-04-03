import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated, View, Dimensions, Platform, Image } from 'react-native';
import { ThemedText } from './themed-text';
import { useAppTheme } from '@/context/ThemeContext';
import { Colors } from '@/constants/theme';

const { width, height } = Dimensions.get('window');

interface AnimatedSplashScreenProps {
  onAnimationComplete: () => void;
}

export function AnimatedSplashScreen({ onAnimationComplete }: AnimatedSplashScreenProps) {
  const { isDark, colorScheme } = useAppTheme();
  const theme = Colors[colorScheme ?? 'light'];

  const logoScale = useRef(new Animated.Value(0.3)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const bgOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(logoScale, {
          toValue: 1,
          tension: 10,
          friction: 3,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.delay(1200),
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onAnimationComplete();
    });
  }, []);

  return (
    <Animated.View 
      style={[
        styles.container, 
        { 
          backgroundColor: theme.background,
          opacity: bgOpacity 
        }
      ]}
    >
      <View style={styles.content}>
        <Animated.View 
          style={[
            styles.logoWrapper, 
            { 
              transform: [{ scale: logoScale }], 
              opacity: logoOpacity,
              shadowColor: theme.tint,
            }
          ]}
        >
          {/* Circular Image Container as requested */}
          <View style={[styles.circleImageContainer, { borderColor: theme.tint }]}>
            <Image 
              source={require('@/assets/images/logo.png')} 
              style={styles.logoImage}
              resizeMode="cover"
            />
          </View>
        </Animated.View>

        <Animated.View style={{ opacity: textOpacity, alignItems: 'center' }}>
          <ThemedText type="title" style={styles.brandTitle}>
            React Native
          </ThemedText>
        </Animated.View>
      </View>

      <View style={styles.footer}>
        <ThemedText style={{ color: theme.icon, fontSize: 12 }}>
          POWERED BY EXPO
        </ThemedText>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logoWrapper: {
    width: 160,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    // Glow effect
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 25,
  },
  circleImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  brandTitle: {
    fontSize: 32,
    fontWeight: '800',
    marginTop: 30,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    opacity: 0.5,
  },
});
