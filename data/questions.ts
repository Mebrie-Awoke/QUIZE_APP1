import { Question } from "../types";

export const reactNativeQuestions: Question[] = [
  {
    id: "q1",
    text: "What is the primary purpose of React Native?",
    options: [
      "To build web applications",
      "To create native mobile apps using JavaScript and React",
      "To develop desktop software",
      "To manage databases",
    ],
    correctAnswerIndex: 1,
    explanation:
      "React Native allows developers to build native mobile apps for iOS and Android using JavaScript and React.",
  },
  {
    id: "q2",
    text: "Which component is used as a container in React Native, similar to <div> in HTML?",
    options: ["<Text>", "<View>", "<Image>", "<Button>"],
    correctAnswerIndex: 1,
    explanation:
      "<View> is the fundamental component for building UI layouts in React Native.",
  },
  {
    id: "q3",
    text: "What is the default flexDirection in React Native?",
    options: ["row", "column", "row-reverse", "column-reverse"],
    correctAnswerIndex: 1,
    explanation:
      "Unlike CSS, React Native defaults to column for flexDirection.",
  },
  {
    id: "q4",
    text: "Which hook is used to manage state in functional components?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswerIndex: 1,
    explanation:
      "useState is the hook for adding state to functional components.",
  },
  {
    id: "q5",
    text: "How do you handle side effects in React Native?",
    options: ["useState", "useEffect", "useMemo", "useCallback"],
    correctAnswerIndex: 1,
    explanation:
      "useEffect is used for side effects like API calls or subscriptions.",
  },
  {
    id: "q6",
    text: "What is Expo in the context of React Native?",
    options: [
      "A database tool",
      "A framework for building React Native apps with less configuration",
      "A testing library",
      "A state management solution",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Expo provides tools and services for building React Native apps without needing Xcode or Android Studio.",
  },
  {
    id: "q7",
    text: "Which API is used for navigation in React Native apps?",
    options: [
      "React Router",
      "React Navigation",
      "Expo Router",
      "All of the above",
    ],
    correctAnswerIndex: 3,
    explanation:
      "React Navigation and Expo Router are popular navigation libraries for React Native.",
  },
  {
    id: "q8",
    text: "How do you style components in React Native?",
    options: [
      "CSS files",
      "Inline styles with JavaScript objects",
      "Both A and B",
      "Only external stylesheets",
    ],
    correctAnswerIndex: 2,
    explanation:
      "React Native uses JavaScript objects for styling, similar to inline styles.",
  },
  {
    id: "q9",
    text: "What is the purpose of StyleSheet.create()?",
    options: [
      "To create animations",
      "To optimize style objects by sending them once over the bridge",
      "To handle responsive design",
      "To apply themes",
    ],
    correctAnswerIndex: 1,
    explanation:
      "StyleSheet.create optimizes performance by avoiding repeated style object creation.",
  },
  {
    id: "q10",
    text: "Which component is used to display text in React Native?",
    options: ["<View>", "<Text>", "<Paragraph>", "<Span>"],
    correctAnswerIndex: 1,
    explanation: "<Text> is the component for displaying text content.",
  },
  {
    id: "q11",
    text: "How do you handle user input in React Native?",
    options: ["<Input>", "<TextInput>", "<Form>", "<Field>"],
    correctAnswerIndex: 1,
    explanation: "<TextInput> is used for single-line text input.",
  },
  {
    id: "q12",
    text: "What is the role of the bridge in React Native?",
    options: [
      "To connect JavaScript and native code",
      "To handle HTTP requests",
      "To manage app state",
      "To render UI components",
    ],
    correctAnswerIndex: 0,
    explanation:
      "The bridge allows JavaScript code to communicate with native platform APIs.",
  },
  {
    id: "q13",
    text: "Which library is commonly used for HTTP requests in React Native?",
    options: ["Axios", "Fetch API", "Both A and B", "XMLHttpRequest"],
    correctAnswerIndex: 2,
    explanation:
      "Both Axios and the built-in Fetch API are used for making HTTP requests.",
  },
  {
    id: "q14",
    text: "How do you persist data locally in React Native?",
    options: ["LocalStorage", "AsyncStorage", "Cookies", "SessionStorage"],
    correctAnswerIndex: 1,
    explanation:
      "AsyncStorage is used for storing key-value pairs asynchronously.",
  },
  {
    id: "q15",
    text: "What is the purpose of useCallback in React Native?",
    options: [
      "To memoize values",
      "To memoize functions to prevent unnecessary re-renders",
      "To handle async operations",
      "To manage component lifecycle",
    ],
    correctAnswerIndex: 1,
    explanation: "useCallback memoizes functions to optimize performance.",
  },
  {
    id: "q16",
    text: "Which component is used for displaying images in React Native?",
    options: ["<Img>", "<Image>", "<Picture>", "<Photo>"],
    correctAnswerIndex: 1,
    explanation: "<Image> is the component for displaying images.",
  },
  {
    id: "q17",
    text: "How do you handle platform-specific code in React Native?",
    options: [
      "Platform module",
      "Conditional rendering",
      "Both A and B",
      "Separate codebases",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Use Platform module or conditional rendering for platform-specific logic.",
  },
  {
    id: "q18",
    text: "What is the default behavior of TouchableOpacity?",
    options: [
      "Changes color on press",
      "Reduces opacity on press",
      "Increases size on press",
      "Plays sound on press",
    ],
    correctAnswerIndex: 1,
    explanation:
      "TouchableOpacity reduces opacity when pressed to provide visual feedback.",
  },
  {
    id: "q19",
    text: "Which hook is used for context in React Native?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswerIndex: 2,
    explanation: "useContext is used to consume context values.",
  },
  {
    id: "q20",
    text: "How do you optimize list rendering in React Native?",
    options: [
      "Use FlatList with keyExtractor",
      "Use ScrollView",
      "Use map() directly",
      "Use for loops",
    ],
    correctAnswerIndex: 0,
    explanation:
      "FlatList is optimized for rendering large lists with proper key management.",
  },
  {
    id: "q21",
    text: "What is the purpose of SafeAreaView?",
    options: [
      "To handle screen rotations",
      "To avoid notches and home indicators",
      "To manage app themes",
      "To handle permissions",
    ],
    correctAnswerIndex: 1,
    explanation:
      "SafeAreaView ensures content is visible within the safe area of the screen.",
  },
  {
    id: "q22",
    text: "Which library is used for icons in React Native?",
    options: ["React Icons", "@expo/vector-icons", "FontAwesome", "Ionicons"],
    correctAnswerIndex: 1,
    explanation: "@expo/vector-icons provides a wide range of icon sets.",
  },
  {
    id: "q23",
    text: "How do you handle app state management in large React Native apps?",
    options: [
      "useState only",
      "Redux or Context API",
      "Local variables",
      "Global variables",
    ],
    correctAnswerIndex: 1,
    explanation: "Redux or Context API are used for complex state management.",
  },
  {
    id: "q24",
    text: "What is the role of Metro bundler in React Native?",
    options: [
      "To compile native code",
      "To bundle JavaScript code",
      "To manage dependencies",
      "To run tests",
    ],
    correctAnswerIndex: 1,
    explanation: "Metro bundles JavaScript and assets for React Native apps.",
  },
  {
    id: "q25",
    text: "How do you handle errors in React Native?",
    options: [
      "Try-catch blocks",
      "Error boundaries",
      "Both A and B",
      "Console.log",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Use try-catch for synchronous errors and Error Boundaries for component errors.",
  },
  {
    id: "q26",
    text: "Which component is used for scrolling content?",
    options: [
      "<ScrollView>",
      "<FlatList>",
      "<SectionList>",
      "All of the above",
    ],
    correctAnswerIndex: 3,
    explanation:
      "ScrollView, FlatList, and SectionList handle scrolling content.",
  },
  {
    id: "q27",
    text: "What is the purpose of Dimensions API?",
    options: [
      "To get device dimensions",
      "To handle orientations",
      "Both A and B",
      "To manage fonts",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Dimensions API provides screen and window dimensions and orientation changes.",
  },
  {
    id: "q28",
    text: "How do you animate components in React Native?",
    options: ["CSS animations", "Animated API", "React Spring", "jQuery"],
    correctAnswerIndex: 1,
    explanation:
      "React Native's Animated API is used for creating smooth animations.",
  },
  {
    id: "q29",
    text: "What is the difference between View and SafeAreaView?",
    options: [
      "SafeAreaView handles safe areas",
      "View is basic container",
      "Both A and B",
      "No difference",
    ],
    correctAnswerIndex: 2,
    explanation:
      "SafeAreaView extends View to handle device-specific safe areas.",
  },
  {
    id: "q30",
    text: "How do you integrate native modules in React Native?",
    options: [
      "Directly in JavaScript",
      "Using native code and bridge",
      "Only through Expo",
      "Not possible",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Native modules are written in platform languages and accessed via the bridge.",
  },
];
