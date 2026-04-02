import { Image } from 'expo-image';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { AppStyles } from '@/constants/styles';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={[AppStyles.container, { paddingTop: insets.top }]}>
      <View style={AppStyles.homeContent}>
        <View style={AppStyles.homeHeader}>
          <Image
            source={require('@/assets/images/react-logo.png')}
            style={AppStyles.homeLogo}
            contentFit="contain"
          />
          <ThemedText type="title" style={AppStyles.homeTitle}>RN Mastery</ThemedText>
          <ThemedText style={[AppStyles.homeSubtitle, { color: theme.icon }]}>
            Master React Native with concise notes and adaptive quizzes.
          </ThemedText>
        </View>

        <ThemedView style={[AppStyles.card, AppStyles.tipCard, { backgroundColor: theme.card, shadowColor: theme.text }]}>
          <View style={AppStyles.tipHeader}>
            <IconSymbol name="lightbulb.fill" color={theme.tint} size={24} />
            <ThemedText type="defaultSemiBold" style={{ marginLeft: 8, color: theme.tint }}>
              Daily Tip
            </ThemedText>
          </View>
          <ThemedText style={[AppStyles.tipText, { color: theme.text }]}>
            React Native uses Flexbox for layout, but the default flexDirection is 'column', not 'row' like on the web!
          </ThemedText>
        </ThemedView>

        <View style={AppStyles.actionsGap}>
          <TouchableOpacity
            style={[AppStyles.primaryButton, { backgroundColor: theme.tint }]}
            activeOpacity={0.8}
            onPress={() => router.push('/quiz')}
          >
            <ThemedText style={AppStyles.primaryButtonText}>Start Random Quiz</ThemedText>
            <IconSymbol name="chevron.right" color="#fff" size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[AppStyles.secondaryButton, { borderColor: theme.tint }]}
            activeOpacity={0.8}
            onPress={() => router.push('/explore')}
          >
            <ThemedText style={[AppStyles.secondaryButtonText, { color: theme.tint }]}>Read Study Notes</ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </ThemedView>
  );
}
