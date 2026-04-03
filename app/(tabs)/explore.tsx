import { FlatList, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { NoteCard } from '@/components/NoteCard';
import { reactNativeNotes } from '@/data/notes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useAppTheme } from '@/context/ThemeContext';
import { AppStyles } from '@/constants/styles';

export default function NotesScreen() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const { toggleTheme, isDark } = useAppTheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <ThemedView style={[AppStyles.container, { paddingTop: insets.top }]}>
      <View style={[AppStyles.sectionHeader, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
        <View style={{ flex: 1 }}>
          <ThemedText type="title">Study Notes</ThemedText>
          <ThemedText style={{ marginTop: 8, color: theme.icon }}>
            Quick concepts and tips for React Native.
          </ThemedText>
        </View>
        <TouchableOpacity
          onPress={toggleTheme}
          activeOpacity={0.7}
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: theme.card,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: theme.text,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <IconSymbol
            name={isDark ? "sun.max.fill" : "moon.fill"}
            color={theme.tint}
            size={24}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={reactNativeNotes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NoteCard note={item} />}
        contentContainerStyle={AppStyles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </ThemedView>
  );
}
