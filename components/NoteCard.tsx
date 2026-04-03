import React, { useState } from 'react';
import { TouchableOpacity, View, Platform } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';
import { Note } from '../types';
import { IconSymbol } from './ui/icon-symbol';
import { useThemeColor } from '@/hooks/use-theme-color';
import { AppStyles } from '@/constants/styles';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function NoteCard({ note }: { note: Note }) {
  const [expanded, setExpanded] = useState(false);
  const cardColor = useThemeColor({}, 'card');
  const textColor = useThemeColor({}, 'text');
  const tintColor = useThemeColor({}, 'tint');
  const iconColor = useThemeColor({}, 'icon');
  const isDark = useColorScheme() === 'dark';

  const renderFormattedText = (text: string) => {
    // Split the text into multi-line code blocks and normal text
    const blocks = text.split(/(```[\s\S]*?```)/g);
    
    return blocks.map((block, blockIndex) => {
      // Handle multiline code blocks wrapped in ```
      if (block.startsWith('```') && block.endsWith('```')) {
        const codeContent = block.replace(/^```[a-z]*\n?/i, '').replace(/```$/, '').trim();
        return (
          <View 
            key={`block-${blockIndex}`} 
            style={{ 
              backgroundColor: isDark ? '#1E293B' : '#F1F5F9', 
              padding: 12, 
              borderRadius: 8, 
              marginVertical: 8,
              borderWidth: 1,
              borderColor: isDark ? '#334155' : '#E2E8F0'
            }}
          >
            <ThemedText style={{ fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace', fontSize: 13, color: isDark ? '#E2E8F0' : '#334155' }}>
              {codeContent}
            </ThemedText>
          </View>
        );
      }
      
      // Handle normal text containing inline bold **text** and inline code `code`
      // We will split by both patterns
      const inlines = block.split(/(\*\*.*?\*\*|`.*?`)/g);
      
      return (
        <ThemedText key={`textblock-${blockIndex}`} style={[AppStyles.noteContent, { color: textColor }]}>
          {inlines.map((inlinePart, inlineIndex) => {
            // Check for bold text (**text**)
            if (inlinePart.startsWith('**') && inline.endsWith('**', inlinePart)) {
              return (
                <ThemedText key={`inline-${blockIndex}-${inlineIndex}`} type="defaultSemiBold" style={{ fontWeight: 'bold' }}>
                  {inlinePart.slice(2, -2)}
                </ThemedText>
              );
            }
            // Check for inline code text (`text`)
            if (inlinePart.startsWith('`') && inlinePart.endsWith('`') && inlinePart.length > 1) {
              return (
                <ThemedText 
                  key={`inline-${blockIndex}-${inlineIndex}`} 
                  style={{ 
                    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace', 
                    backgroundColor: isDark ? '#1E293B' : '#F1F5F9',
                    color: tintColor 
                  }}
                >
                  {inlinePart.slice(1, -1)}
                </ThemedText>
              );
            }
            
            return <React.Fragment key={`inline-${blockIndex}-${inlineIndex}`}>{inlinePart}</React.Fragment>;
          })}
        </ThemedText>
      );
    });
  };

  const inline = { endsWith: (suffix: string, str: string) => str.length >= suffix.length && str.substring(str.length - suffix.length) === suffix };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => setExpanded(!expanded)}>
      <ThemedView style={[AppStyles.cardSmall, { backgroundColor: cardColor, shadowColor: textColor }]}>
        <View style={AppStyles.noteHeader}>
          <ThemedText type="subtitle" style={{ flex: 1, color: tintColor }}>{note.topic}</ThemedText>
          <IconSymbol name={expanded ? 'chevron.down' : 'chevron.right'} color={iconColor} size={20} />
        </View>
        {expanded && (
          <View style={{ marginTop: 8 }}>
            {renderFormattedText(note.content)}
          </View>
        )}
      </ThemedView>
    </TouchableOpacity>
  );
}
