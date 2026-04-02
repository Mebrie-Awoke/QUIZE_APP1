import { FlatList, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { NoteCard } from '@/components/NoteCard';
import { reactNativeNotes } from '@/data/notes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { AppStyles } from '@/constants/styles';

export default function NotesScreen() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <ThemedView style={[AppStyles.container, { paddingTop: insets.top }]}>
      <View style={AppStyles.sectionHeader}>
        <ThemedText type="title">Study Notes</ThemedText>
        <ThemedText style={{ marginTop: 8, color: theme.icon }}>
          Quick concepts and tips for React Native.
        </ThemedText>
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
