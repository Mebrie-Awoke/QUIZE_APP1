import { Note } from '../types';

export const reactNativeNotes: Note[] = [
  {
    id: 'n1',
    topic: 'Core Components',
    content: 'React Native provides core components like View (equivalent to div), Text (for displaying text), and Image. Never use HTML tags.',
  },
  {
    id: 'n2',
    topic: 'Flexbox',
    content: 'React Native uses Flexbox for layout calculation. The default flexDirection is column instead of row.',
  },
  {
    id: 'n3',
    topic: 'StyleSheet',
    content: 'Use StyleSheet.create({}) to define styles. This ensures your styles are extracted and optimized by React Native.',
  },
  {
    id: 'n4',
    topic: 'Hooks',
    content: 'React hooks like useState, useEffect, and useRef work exactly the same in React Native as they do in React.'
  },
  {
    id: 'n5',
    topic: 'Navigation',
    content: 'Expo Router allows file-based routing. Creating a file like app/about.tsx automatically maps to the /about route.'
  }
];
