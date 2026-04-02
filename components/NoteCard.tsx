import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';
import { Note } from '../types';
import { IconSymbol } from './ui/icon-symbol';
import { useThemeColor } from '@/hooks/use-theme-color';
import { AppStyles } from '@/constants/styles';

export function NoteCard({ note }: { note: Note }) {
  const [expanded, setExpanded] = useState(false);
  const cardColor = useThemeColor({}, 'card');
  const textColor = useThemeColor({}, 'text');
  const tintColor = useThemeColor({}, 'tint');
  const iconColor = useThemeColor({}, 'icon');

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => setExpanded(!expanded)}>
      <ThemedView style={[AppStyles.cardSmall, { backgroundColor: cardColor, shadowColor: textColor }]}>
        <View style={AppStyles.noteHeader}>
          <ThemedText type="subtitle" style={{ flex: 1, color: tintColor }}>{note.topic}</ThemedText>
          <IconSymbol name={expanded ? 'chevron.up' : 'chevron.down'} color={iconColor} size={20} />
        </View>
        {expanded && (
          <ThemedText style={[AppStyles.noteContent, { color: textColor }]}>
            {note.content}
          </ThemedText>
        )}
      </ThemedView>
    </TouchableOpacity>
  );
}
