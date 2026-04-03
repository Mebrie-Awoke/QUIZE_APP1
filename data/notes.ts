import { Note } from '../types';

export const reactNativeNotes: Note[] = [
  {
    id: 'n1',
    topic: 'Mobile Computing Fundamentals',
    content: `Mobile computing is the performance of computing tasks while the user is on the move, away from their usual environment. Users can access resources via portable devices they carry, including access to the Internet and their home intranet. This field also includes location-aware or context-aware computing, which adapts to where the user is physically located.

Ubiquitous computing takes this further by embedding many small, cheap computational devices into everyday environments like homes, offices, and natural settings. The term "ubiquitous" suggests these devices become so common they are scarcely noticed. Their computational behavior becomes transparently tied to their physical function. This is also called pervasive, deeply embedded, 4G mobile, sentient computing, or ambient intelligence.

Four waves of computing have emerged: mainframe computing (60s-70s) with massive computers, desktop computing (80s-90s) with one computer per desk, mobile computing (90s-00s) with portable devices, and ubiquitous computing (present) with hundreds of invisible devices per person.

PAN (Personal Area Network) connects devices within 10-100 meters using Bluetooth, Zigbee, or Infrared. WLAN uses radio frequency waves (2.4 GHz, 5 GHz) under IEEE 802.11 protocols.

Mobile computing finds applications in health, finance, business, education, agriculture, and tourism. It simplifies administrative tasks, provides easy access to financial records, and enhances communication and marketing.

Security features include fingerprint recognition, encryption, and biometric systems (iris, face, voice). However, limitations exist: risks in unsecured environments, high implementation costs, unaccountability, and lack of clear policies.

Enabling technologies include devices (laptops, phones, tablets), wireless communication (cellular, Wi-Fi, Bluetooth, 3G/4G/5G), and system support for routing and billing. Small form factor devices benefit from shrinking electronics and better displays. Personalization uses machine learning and inference. Automatic identification uses RFID and numbering schemes. Sensing and actuation involve mechanical, chemical, or electric methods. Context awareness covers physical properties, information data, and social identity.

Example: A smartphone using GPS to recommend nearby restaurants demonstrates context-aware computing.

Code analogy: Just as a car lets you travel while carrying belongings, mobile computing lets you compute while carrying data and connectivity.`,
  },
  {
    id: 'n2',
    topic: 'Mobile App Architecture',
    content: `Mobile app architecture is a set of rules, techniques, and processes for developing mobile applications that meet business requirements and industry standards. It differs from the mobile tech stack, which focuses on specific technologies and frameworks. Architecture answers "why," "what," and "how" of the app, including data collection, data movement, UI appearance, platform choice, and tech stack.

Without proper architecture, apps become longer and more costly to develop, hard to maintain when staff changes, difficult to scale, challenging to test, and prone to errors. Good architecture is platform-independent and applies to both native and cross-platform choices.

The three-layer architecture is the most popular representation:

1. The Presentation Layer consists of UI (colors, fonts, placement) and UX (how customers interact). It determines platform and device type for consistent presentation standards.

2. The Business Layer handles logic, rules, data exchange, operations, workflow regulation, security, data caching, logging, validation, and exception management. This layer can exist on the server or user device depending on operations and resource requirements.

3. The Data Layer includes data utilities, service agents, and access components for data transactions. It has two parts: persistence (data access via API) and network (communication, routing, error reporting). Validation and maintenance of data must be considered in the data layer design.

For Android, Clean Architecture is commonly accepted, built on layers and inversion of control. The domain/business layer must not depend on other layers but use interfaces instead.

For iOS, Apple recommends MVC (Model-View-Controller) supporting rapid parallel development with multiple views. The Model is the data layer, View is the presentation layer, and Controller mediates between them.

Hybrid mobile app architecture leverages both native and web solutions, using native apps as "shells" for the back-end and JavaScript/HTML/CSS for the front-end. Plugins like Apache Cordova or Ionic Capacitor access native platform features. Hybrid apps are fast to create and easy to update but not appropriate for complex, interactive, or feature-rich applications.

Example: A banking app uses presentation layer for login screen, business layer to verify credentials and check balance, and data layer to fetch account information from a secure database.

Code analogy: Architecture is like a building blueprint—without it, you might build walls that don't support the roof, pipes that cross electrical lines, or doors that open into solid walls.`,
  },
  {
    id: 'n3',
    topic: 'Mobile Business Models',
    content: `Mobile computing has become the future of business and a highly profitable sector. Success stories like WhatsApp, Vine, Facebook, and Instagram have attracted many entrepreneurs, but only about 2% of app developers claim approximately 54% of all app revenue.

A business model is the logic of a "business system" for creating value, serving as a conceptualization of strategy that guides business process implementation. It includes product, service, and information flows, describes business actors and their roles, outlines potential benefits, and details revenue sources.

The Freemium model offers basic functionality for free while charging for premium or proprietary features. The goal is to attract users and engage them until they're willing to pay for additional in-app tools or subscriptions. Only about 2% of users convert in the best case, but the other 98% help reach potential audience.

Example: Angry Birds released a free version with hidden features that required payment to unlock.

The Free with Ads (In-app Advertising) model combines free download with optional purchases or ad removal. Revenue comes from selling targeted ads based on user data. Facebook is the best example—users don't pay to use the platform, but Facebook sells highly targeted ads using vast amounts of user data.

The Advertisement model offers the app completely free and recovers investment through advertisements. Platforms like Google Ads allow developers to run ads and earn money without demanding payment from users. However, earnings per user are minimal unless too many ads are pushed, which hampers user experience. Success relies on a wide user base.

Affiliate Marketing involves earning commission when sales are made through affiliate links. E-commerce apps like Amazon and Flipkart offer affiliate memberships. When a sale occurs through an affiliate member's link, the member receives a percentage commission. This model doesn't hamper user experience with ads or compel payments.

The Paid Apps model charges users to download the app. Both Google Play Store and Apple App Store charge 15% commission on first $1 million in sales each year, and 30% on revenue beyond that. While attractive, paid apps limit audience substantially and require proper market research. Other models include commissioned apps and sponsorships.

Example: A meditation app offers basic guided sessions for free but charges monthly subscription for personalized plans and advanced courses.

Code analogy: Choosing a business model is like choosing a restaurant strategy—you can give away free samples (freemium), charge for the meal (paid), sell advertising space on menus (ads), or partner with food suppliers (affiliate marketing).`,
  },
  {
    id: 'n4',
    topic: 'Environment Setup and Project Creation',
    content: `Before developing React Native apps, you must choose between Expo and React Native CLI. Expo is a framework and platform that simplifies React Native development with managed workflows, pre-configured tools, and over 100 pre-built modules. React Native CLI (Command Line Interface) gives more control but requires manual native code configuration.

For beginners, Expo is recommended because it eliminates the need to install Android Studio, Xcode, or manage native dependencies.

To install Expo globally: \`npm install -g expo-cli\`

Create a new project: \`expo init MyNewProject\`

Choose a template (blank, tabs, or minimal).

Navigate to project: \`cd MyNewProject\`

Start development server: \`npm start\` or \`expo start\`

This opens the Expo Developer Tools in browser with a QR code.

To run on physical device: install Expo Go app from App Store (iOS) or Google Play (Android), scan QR code.

To run on emulator: press \`i\` for iOS simulator (Mac only) or \`a\` for Android emulator (requires Android Studio setup).

For React Native CLI:

\`npm install -g react-native-cli\`

\`npx react-native init MyProject\`

Run iOS: \`npx react-native run-ios\` (Mac only)

Run Android: \`npx react-native run-android\` (requires Android Studio)

Project structure includes:
- \`node_modules/\` (dependencies)
- \`App.js\` (entry point)
- \`package.json\` (dependencies and scripts)
- \`app.json\` or \`app.config.js\` (Expo configuration)
- \`assets/\` (images, fonts)
- \`components/\` (reusable components)
- \`screens/\` (screen components)
- \`navigation/\` (navigation setup)

For Expo, \`app.json\` controls app name, icon, splash screen, version, orientation, and permissions.

Example: Changing app icon: replace \`assets/icon.png\` (1024x1024) and update app.json. Changing splash screen: replace \`assets/splash.png\` (1242x2436) and update app.json.

Environment variables: Expo uses \`.env\` files with \`expo-constants\` to access values.

Debugging tools include React Native Debugger (standalone app), Flipper (Facebook debugger), Chrome DevTools, and Reactotron.

Common issues: Metro bundler port conflicts (use \`--port\` flag), cache issues (\`expo start -c\` to clear cache), dependency conflicts (use \`expo install\` instead of \`npm install\` for Expo projects).

Code analogy: Setting up a React Native environment is like setting up a kitchen before cooking—you need the right appliances (Expo or CLI), ingredients (dependencies), utensils (tools), and workspace (project structure) before you can start cooking (coding). Expo is like a meal kit delivery service (everything pre-measured and ready), while React Native CLI is like buying ingredients from scratch (more control but more work).`,
  },
  {
    id: 'n5',
    topic: 'React Native Overview',
    content: `React Native is an open-source framework for building Android and iOS applications using React and the app platform's native capabilities. It uses JavaScript to access platform APIs and describe UI appearance and behavior using React components—bundles of reusable, nestable code.

The View component is the basic building block of UI in both Android and iOS development. It's a container that supports layout with flexbox, style, touch handling, and accessibility controls. View maps directly to the native view equivalent on whatever platform React Native is running on: UIView on iOS, <div> on web, or android.view on Android. Some views can contain other views, enabling complex layouts.

React Native uses the same API structure as React components, so understanding React component APIs is essential to get started.

Android development traditionally uses Kotlin or Java to write views, while iOS uses Swift or Objective-C. With React Native, you invoke views with JavaScript using React components. At runtime, React Native creates the corresponding Android and iOS views for those components.

Because React Native components are backed by the same views as Android and iOS, React Native apps look, feel, and perform like any other apps. These platform-backed components are called Native Components.

React Native comes with essential, ready-to-use Native Components called Core Components. You can also build your own Native Components for Android and iOS to suit unique app needs. There's also a thriving ecosystem of community-contributed components.

Core Components include Basic Components (View, Text, Image, TextInput, ScrollView), User Interface components, List Views (FlatList, SectionList), Android-specific components, and others like ActivityIndicator and Switch.

Example: Using <View><Text>Hello</Text></View> in React Native creates a container with text, which becomes a UIView containing a UILabel on iOS and a ViewGroup containing a TextView on Android.

Code analogy: React Native is like a translator who speaks JavaScript to you but speaks native languages (Kotlin/Swift) to the device—you describe what you want in JavaScript, and React Native translates it perfectly for each platform.`,
  },
  {
    id: 'n6',
    topic: 'React Native Fundamentals: Components and JSX',
    content: `React Native runs on React, a popular open-source library for building user interfaces with JavaScript. Understanding React itself is fundamental to working with React Native. Core concepts include Components, JSX, props, and state.

A component is like a blueprint—it can be created as a Function Component or Class Component. Modern React Native development focuses on Function Components.

To define your own component, you create a function that returns JSX elements. JSX is a JavaScript syntax extension that lets you write elements inside JavaScript, like \`<Text>Hello, I am react native!</Text>\`.

Since JSX is JavaScript, you can embed variables inside curly braces. For example:

\`const name = "react";\`

\`<Text>Hello, I am {name}!</Text>\`

Any JavaScript expression works between curly braces, including function calls like \`{getFullName("Lucy", "Afar")}\`. The curly braces create a portal into JavaScript functionality within JSX.

Components can be nested inside each other to create new components. Nestable and reusable components are at the heart of the React paradigm. For example, Text and TextInput can be nested inside a View, and React Native renders them together.

A component can be rendered multiple times and in multiple places without repeating code by using its tag like \`<Hello />\`. Any component that renders other components is a parent component. The component being rendered is a child component. Each rendered instance is unique and can be customized with props.

To export a component for use throughout your app, use JavaScript's export default.

Example:
\`\`\`javascript
const Greeting = (props) => {
  return <Text>Hello, {props.name}!</Text>;
};
export default Greeting;
\`\`\`

A Button component can be defined once and used 20 times across different screens, each with different text and colors.

Code analogy: Components are like cookie cutters—you design the shape once (the component), then stamp out as many cookies (instances) as you want, decorating each differently with icing (props).`,
  },
  {
    id: 'n7',
    topic: 'Props and State in React Native',
    content: `Props is short for "properties" and they let you customize React components. Think of props as arguments you pass to a component to configure how it renders.

For example, you can pass each <Student> component a different name to render:

\`<Student name="Ayalew" />\`
\`<Student name="Jerry" />\`
\`<Student name="Mamo" />\`

Inside the component, you access props like props.name. Props are read-only and should never be modified by the component receiving them.

In JSX, JavaScript values are referenced with {}. This is handy for passing non-string props like arrays or numbers:

\`<Student names={["Muna", "Kirubel"]} age={18} />\`

JS objects are also denoted with curly braces, so to pass a JS object in JSX, you wrap it in another pair of curly braces: \`{{width: 200, height: 200}}\`.

While props configure how components render, state is like a component's personal data storage. State handles data that changes over time or comes from user interaction. State gives your components memory!

As a general rule, use props to configure a component when it renders. Use state to track component data that you expect to change over time.

You add state to a component by calling React's useState Hook. A Hook is a function that lets you "hook into" React features.

Calling useState does two things:
1. It creates a "state variable" with an initial value
2. It creates a function to set that state variable's value

The pattern is: \`[<getter>, <setter>] = useState(<initialValue>)\`. The names don't matter but the pattern is convenient.

When a state-setting function is called, the component re-renders with the new state value.

Example:
\`\`\`javascript
const [isHungry, setIsHungry] = useState(true);
return (
  <Button 
    onPress={() => setIsHungry(false)} 
    title={isHungry ? "Feed me" : "Thanks!"} 
  />
);
\`\`\`

A Cat component has isHungry state starting as true. Pressing a "Feed" button calls setIsHungry(false), which re-renders the component showing "full" instead of "hungry".

Code analogy: Props are like a restaurant menu—you choose what you want (the configuration) but you can't change the menu itself. State is like your hunger level—it changes as you eat (user interaction) and affects what you order next.`,
  },
  {
    id: 'n8',
    topic: 'Styling in React Native',
    content: `React Native styles your application using JavaScript rather than CSS. All core components accept a prop named style. Style names and values usually match CSS on the web, except names are written in camelCase (e.g., backgroundColor rather than background-color).

The style prop can be a plain old JavaScript object. You can also pass an array of styles—the last style in the array has precedence, so you can use this to inherit and override styles.

As a component grows in complexity, it's cleaner to use StyleSheet.create to define several styles in one place. StyleSheet.create improves performance by extracting styles and sending them to native via a bridge only once.

A common pattern is to make your component accept a style prop that is then used to style subcomponents, allowing styles to "cascade" similar to CSS.

A component's height and width determine its size on the screen, which can be set in three ways: Fixed Dimensions, Flex Dimensions, or Percentage Dimensions.

**Fixed Dimensions** use specific width and height values in density-independent pixels (unitless numbers). This is common for components whose size should always be fixed regardless of screen size.

Example: \`<View style={{width: 100, height: 100, backgroundColor: 'red'}} />\`

**Flex Dimensions** use the flex property to make components expand and shrink dynamically based on available space. Use flex:1 to fill all available space, shared evenly among siblings. The larger the flex value, the higher the ratio of space a component takes. A component can only expand if its parent has dimensions greater than 0.

Example: \`<View style={{flex: 1}}><View style={{flex: 2}} /><View style={{flex: 1}} /></View>\` (first child takes 2/3 of space, second takes 1/3)

**Percentage Dimensions** use percentage values (like width: '50%') to fill a portion of the screen without flex layout. Percentage dimensions also require a parent with a defined size.

Example: \`<View style={{width: '50%', height: '50%'}} />\`

Code analogy: Fixed dimensions are like a brick (always the same size), flex dimensions are like a sponge (expands to fill its container), and percentage dimensions are like a measuring cup (takes a specific fraction of the parent's size).`,
  },
  {
    id: 'n9',
    topic: 'Flexbox Layout in React Native',
    content: `React Native uses the Flexbox algorithm to specify how components lay out their children. Flexbox provides consistent layout across different screen sizes. You normally use a combination of flexDirection, alignItems, and justifyContent to achieve the right layout.

**flexDirection** controls the direction in which children are laid out along the main axis. The default value is column (top to bottom). Other values include row (left to right), column-reverse (bottom to top), and row-reverse (right to left). The cross axis is perpendicular to the main axis.

Layout direction specifies whether children and text are laid out left-to-right (LTR, default) or right-to-left (RTL).

**justifyContent** describes how to align children within the main axis of their container. Values include:
- flex-start (default, align to start)
- flex-end (align to end)
- center (center of main axis)
- space-between (even space between children)
- space-around (space distributed around children)
- space-evenly (equal spacing between, start, and end)

**alignItems** describes how to align children along the cross axis. Values include flex-start, flex-end, center, stretch (default), and baseline.

**alignContent** defines distribution of lines along the cross axis when items wrap to multiple lines using flexWrap. Values include flex-start, flex-end, stretch (default), center, space-between, and space-around.

**flexWrap** controls what happens when children overflow the container along the main axis. By default, children are forced into a single line (which can shrink elements). If wrapping is allowed, items wrap into multiple lines.

**flexBasis** provides the default size of an item along the main axis before flexGrow and flexShrink calculations.

**flexGrow** describes how to distribute remaining space among children weighted by their flexGrow values.

**flexShrink** describes how to shrink children when total size overflows the container.

The **position** type (relative default or absolute) defines how an element positions within its parent. Relative positioning offsets from normal flow without affecting siblings. Absolute positioning removes element from normal layout flow, positioning independently based on top, right, bottom, left values.

Example: To center a button both horizontally and vertically:
\`\`\`javascript
{
  justifyContent: 'center',
  alignItems: 'center'
}
\`\`\`

Code analogy: Flexbox is like arranging furniture in a room—flexDirection is whether you line furniture along the wall (row) or stack from floor to ceiling (column), justifyContent is spacing between furniture pieces, and alignItems is whether they touch the left wall, right wall, or center.`,
  },
  {
    id: 'n10',
    topic: 'Core Components: Text, TextInput, and Buttons',
    content: `The **Text** component displays text with support for nesting, styling, and touch handling. It can be nested and inherits properties from parent to child.

Key Text props include numberOfLines (truncates text with ellipsis after specified lines) and onPress (called when text is pressed). Text styles include color, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, and textTransform.

The **TextInput** component allows text input via keyboard. It provides configurability for auto-correction, auto-capitalization, placeholder text, and different keyboard types (numeric, email-address, phone-pad).

The most basic use case subscribes to onChangeText events to read user input. Other events include onSubmitEditing and onFocus.

TextInput styles include borderWidth, borderColor, borderRadius, padding, margin, width, and backgroundColor.

Key TextInput props:
- multiline (accept multi-line text)
- placeholder (text before input)
- maxLength (limit input length)
- editable (block input)
- keyboardType (change keyboard type)
- secureTextEntry (obscure data for passwords)
- onChangeText (capture data on each change)
- onSubmitEditing (save on form submission)

React Native provides **Button** as a generic button. Button props include title (text inside), onPress (handler when tapped), color (text color on iOS, background on Android), and disabled (disable interactions).

For more customized buttons, React Native provides Touchable components:
- TouchableOpacity (changes opacity when touched)
- TouchableHighlight (darkens when pressed, underlying color shows through)
- TouchableNativeFeedback (Android ink animation)
- TouchableWithoutFeedback (no animation, for custom handling)

The **Switch** component renders a boolean input (on/off toggle). It's a controlled component requiring an onValueChange callback that updates the value prop.

Switch props include onValueChange (invoked when user toggles), thumbColor (color of the switch grip), trackColor (custom colors for the track), and value (true = on, false = off).

Example: A login form with TextInput for email (keyboardType='email-address'), TextInput for password (secureTextEntry=true), and a Button with onPress that validates credentials.

\`\`\`javascript
<TextInput placeholder="Email" onChangeText={setEmail} />
<TextInput secureTextEntry placeholder="Password" onChangeText={setPassword} />
<Button title="Login" onPress={handleLogin} />
\`\`\`

Code analogy: Text is like a sign (displays information), TextInput is like a form field (collects information), Buttons are like doorbells (trigger actions when pressed), and Switch is like a light switch (toggles between two states).`,
  },
  {
    id: 'n11',
    topic: 'Core Components: Image, ScrollView, and Lists',
    content: `The **Image** component displays different types of images. To add images, import Image from react-native. The source prop provides the image source (remote URL or local file resource). Image styles include width, height, borderRadius, borderColor, and borderWidth.

React Native can display images from:
- Static resources (local files in assets folder)
- Network images (URLs requiring manual dimensions)
- Temporary local images
- Local disk images (camera roll)

For network images, you must manually specify dimensions. For URI data images, the image data is encoded in the URI (only for very small or dynamic images).

The **ImageBackground** component wraps and displays a background for whatever elements are inside it. It replaces View as a wrapper and requires source and style props.

The **ScrollView** component is a generic scrolling container that can contain multiple components and views. It scrolls both vertically and horizontally (horizontal property). ScrollView works best for small amounts of limited-size content. All elements in a ScrollView render even if not currently on screen—this can be inefficient for long lists.

The **RefreshControl** component adds pull-to-refresh functionality inside ScrollView or ListView. Props include refreshing (boolean indicating active refresh), colors (Android refresh indicator colors), tintColor (iOS refresh indicator color), and onRefresh (called when refresh starts).

For large lists, React Native provides **FlatList** and **SectionList**.

**FlatList** displays similarly structured data in a scrollable list efficiently, rendering only elements currently showing on screen. FlatList takes two required props: data (array of items) and renderItem (function that takes an item and returns a component).

Other FlatList props include horizontal (horizontal scrolling), inverted (reverse scroll direction), keyExtractor (extract unique key for caching), and refreshControl (pull-to-refresh).

**SectionList** renders sectioned lists with features like section separators, header support, pull to refresh, and sticky section headers (stick to top on iOS by default). SectionList requires sections prop (array of section objects) and renderItem prop.

Example FlatList usage:
\`\`\`javascript
<FlatList 
  data={[{id:1, name:'A'}, {id:2, name:'B'}]} 
  renderItem={({item}) => <Text>{item.name}</Text>} 
  keyExtractor={item => item.id} 
/>
\`\`\`

Code analogy: ScrollView is like a physical newspaper (everything is printed and you scroll to see it all). FlatList is like a social media feed (only loads what you see, loads more as you scroll). SectionList is like a contacts app (grouped alphabetically with A, B, C headers).`,
  },
  {
    id: 'n12',
    topic: 'Additional Core Components',
    content: `**ActivityIndicator** is a component for displaying loading actions, similar to a circular loader or progress bar. It shows progress of long-running tasks so users understand something is in progress.

Props include:
- animating (show or hide indicator, default true)
- size ('small', 'large', or number—number Android only)
- color (foreground color of spinner, default gray)
- hidesWhenStopped (show/hide when not animating, iOS only)

**ProgressBarAndroid** indicates progress status on Android platform only. For iOS, use ProgressViewIOS.

Props include:
- animating (show/hide)
- color (progress bar color)
- indeterminate (intermediate status, only false if styleAttr is Horizontal)
- progress (value between 0 and 1)
- styleAttr (style: Horizontal, Normal, Small, Large, Inverse, SmallInverse, LargeInverse)

**WebView** loads web content or web pages. Originally in core React Native, WebView is now deprecated and placed in react-native-webview library.

Install with: \`npm install react-native-webview\`

Source prop loads static HTML or URI. Types include HTML code as string (using html prop), internal web pages (full path), and remote web pages (using uri tag).

**Picker** component selects an item from multiple choices, like a dropdown. Import Picker from react-native.

Props include:
- style (height and width)
- selectedValue (currently selected value)
- onValueChange (callback with itemValue and itemPosition)

Picker.Item components define options with label and value.

**StatusBar** decorates the status bar of the app. Multiple StatusBar components can be used simultaneously.

Props include:
- backgroundColor (status bar background)
- translucent (app built under status bar when true)
- barStyle (color of status bar text: default, light-content, dark-content)
- hidden (hide/show status bar, default false)

Example: ActivityIndicator during data fetch:
\`\`\`javascript
{loading && <ActivityIndicator size="large" color="#0000ff" />}
\`\`\`

Example: Picker for country selection:
\`\`\`javascript
<Picker selectedValue={country} onValueChange={setCountry}>
  <Picker.Item label="USA" value="us" />
  <Picker.Item label="Canada" value="ca" />
</Picker>
\`\`\`

Code analogy: ActivityIndicator is like a "loading" spinner on a video game (tells you something is happening in the background). ProgressBar is like a download percentage (shows exactly how much is complete). WebView is like a picture frame showing a website inside your app. Picker is like a vending machine selection button (choose one option from many). StatusBar is like the trim on a house—not the main structure but important for appearance.`,
  },
  {
    id: 'n13',
    topic: 'Mobile App Development Technologies',
    content: `There are three main mobile app development technologies: Native apps, Hybrid apps, and Cross-platform apps. Each approach has intrinsic value depending on business objectives and product goals.

**Native Apps** run on a specific technology dedicated to either Android or iOS platform. These platforms use their own languages: Kotlin or Java for Android, Swift or Objective-C for iOS. Native apps deliver robust performance, work well offline, have higher API usability, custom UI components, and fewer bugs.

Use native when you need only one platform, constantly depend on device features (Camera, GPS), develop 3D games with animations, or want the best user experience for first-time launch.

**Hybrid App Development** uses features of both native and web apps. Developers build hybrid apps using JavaScript, HTML, and CSS. A hybrid app combines mobile and web elements to target different platforms quickly. Backend code is created based on a native shell (Android or iOS) then uploaded to app stores.

Hybrid apps are cheaper to develop, reach market faster, and are easier to recode for updates. Use hybrid when you have a larger audience on many platforms, develop simple apps without complex animations, are time-bound for multiple platforms, or testing an MVP.

**Cross-Platform App Development** shares the same codebase as hybrid but differs in providing great user experience with different UI. Cross-platform apps save time and money, allow quick feature addition, and provide UI performance matching native apps.

Use cross-platform when initially low on budget, unaware which groups to target, or your app isn't complex requiring extensive coding.

**Comparison:**
- Native requires separate codebases per platform, has less dependency on open-source libraries, uses native debugging tools (XCode, Android Studio)
- Hybrid and Cross-platform use single codebases, are highly dependent on libraries, and use various debugging tools (Ionic, Cordova, React Native, Xamarin, Flutter)

**Mobile Web Apps** are lightweight paradigms where you open a URL in browser but look and feel like regular apps. They aren't installed but are important to consider. Responsive web programming organizes layout for device form factor. Progressive web apps (PWAs) are normal websites that appear like traditional mobile apps and can be installed with home screen icons.

Example: A banking app built natively can use fingerprint authentication (platform-specific). A news app built cross-platform with React Native can share 90% code between iOS and Android.

Code analogy: Native apps are like building a custom house from scratch (perfect fit but expensive). Hybrid apps are like buying a prefab house (fast, cheaper, but less customized). Cross-platform is like using high-quality modular components (balance of cost and quality). PWAs are like a hotel room (accessible anywhere without ownership commitment).`,
  },
  {
    id: 'n14',
    topic: 'Mobile App Programming Languages and Frameworks',
    content: `When considering programming languages for mobile apps, you must consider both frontend (UI) and backend (server-side) development.

**iOS Development:** Apple's proprietary platform requires an Apple developer account and Xcode IDE on a Mac computer—you cannot effectively build and debug on Windows alone.

Objective-C was Apple's first supported language, deriving syntax from C and object-oriented features from SmallTalk. Its syntax is verbose with square brackets that can be hard to debug, but it's stable and mature.

Swift was introduced in 2014 and released for Xcode in 2015. After major overhaul in 2016 (v3.0), Swift surpassed Objective-C as the default choice. Swift and Objective-C can coexist (libraries written in Objective-C work in Swift), but Swift is easier, simpler, and more compact.

**Android Development:** You need the Android development toolkit with SDK, debuggers, and emulators. Android Studio is the most popular IDE, though Apache Netbeans and IntelliJ IDEA work too. Development works on Mac, Windows, or Linux.

Java was the default Android language since 2008, an object-oriented language originally from Sun Microsystems (now Oracle). Java compiles to "bytecode" interpreted by Java Virtual Machine (JVM).

In 2017, Google announced Kotlin as an alternative first-class language for Android. Kotlin interoperates with Java (all Java libraries callable from Kotlin), is a tidier form of Java with smooth learning curve, and compiles to Java bytecode.

**Cross-Platform Development:** Technologies allow writing in one language and targeting both platforms.

C# and Xamarin (acquired by Microsoft) let you program in C# against .NET framework. Xamarin cross-compiles to run natively on iOS or Android. Special extensions (Xamarin.iOS, Xamarin.Android) access native capabilities. For iOS, you still need XCode on a Mac.

JavaScript and React Native (released 2015 by Facebook) uses JavaScript with no HTML. Code interprets at runtime using a "bridge" to access native SDK capabilities. React Native uses platform native UI libraries for truly native UI. The learning curve is low because JavaScript is widely known.

Dart and Flutter (Google, stable 2017) use Dart object-oriented language. Flutter comes with its own UI widget framework library based on Google Material Design and iOS-like widgets. Popular IDEs include Android Studio, IntelliJ, and VSCode.

**Web Platform:** Mobile-optimized websites use responsive design (layouts adapt to available real estate). A website might show 5 columns on laptop but 2 columns on mobile portrait mode without zooming or horizontal scrolling.

PWAs render like native apps—browsers detect PWA, remove surrounding browser chrome, and allow home screen installation. Service workers pre-cache content, responsive design optimizes rendering, and web app manifest notifies browser of installability.

Example: A developer familiar with web JavaScript can use React Native to build mobile apps without learning Swift or Kotlin.

Code analogy: Programming languages are like human languages—Java is like English (widely spoken, many resources), Swift is like a modern streamlined language like Esperanto, Kotlin is like a cleaned-up version of Java (like modern English vs Shakespearean English).`,
  },
  {
    id: 'n15',
    topic: 'Cross-Platform Frameworks: Xamarin, React Native, Flutter',
    content: `**Xamarin** is a leading free, open-source platform for building hybrid mobile apps under MIT license as part of Visual Studio. Xamarin-based solutions work on any mobile platform with same performance and user experience as native solutions. Xamarin uses C# with .NET framework.

Pros:
- C# works seamlessly on Android and iOS
- Strong community of 60,000+ contributors from 3,700+ companies
- Shares over 75% code across platforms ("write once, run anywhere")
- Single tech stack for faster development

Cons:
- Expensive for enterprises requiring Visual Studio license
- Not recommended for heavy graphics apps (different visual layout methods per platform, UX/UI-rich apps better native)
- Limited access to certain libraries
- UI creation time-consuming because core isn't mobile

Apps made with Xamarin: Fox Sports, Alaska Airlines, HCL, American Cancer Society, BBC Good Food.

**React Native** is top cross-platform framework based on React JavaScript library for UI. It uses universal JavaScript plus Java, Swift, or C for native platforms. React Native converts source code to native elements for native user experience. Web developers can easily use React Native without new programming skills.

Pros:
- Large ecosystem
- Hot reloading
- Native performance
- Backed by Facebook

Cons:
- Not fully cross-platform (camera, accelerometer still need native components with separate code for Android/iOS)
- Lags behind native platforms (reason Udacity stopped investing)
- Inconsistent update releases
- Faster development but longer debugging (especially Android)

Apps made with React Native: Facebook, Instagram, Bloomberg, Pinterest, Skype, Tesla.

**Flutter** is open-source free cross-platform framework for creating native interfaces for Android and iOS, maintained by Google (same organization developing Android Native Framework). Applications programmed in Dart act almost identically on each platform with efficiency similar to native solutions. Flutter apps are truly native.

Pros:
- "Hot reloading" shows code changes within seconds
- Ideal for MVP development (build one app looking native on both platforms quickly)
- Dart is easy to learn object-oriented language
- Full set of widgets for Material Design and Cupertino (Apple style)
- Many ready-made solutions for CI platforms (Travis, Jenkins)

Cons:
- Limited TV support (no Android TV or Apple TV)
- Fewer libraries compared to native development
- App size larger (minimum 4MB) because using built-in widgets not platform widgets

Example: A startup with limited budget can use Flutter to build MVP that looks native on both iOS and Android, test market fit, then invest in native development if successful.

Code analogy: Xamarin is like a translator who speaks C# to you but converts to native languages perfectly. React Native is like a bilingual person fluent in JavaScript and native platform languages. Flutter is like bringing your own universal building blocks (Dart widgets) that assemble the same way everywhere, but you must carry them with you (larger app size).`,
  },
  {
    id: 'n16',
    topic: 'HTTP Networking with Fetch API',
    content: `Many mobile apps need to load resources from remote URLs, make POST requests to REST APIs, or fetch static content from other servers. React Native provides the Fetch API for networking needs, which will feel familiar if you've used XMLHttpRequest or other networking APIs before.

To fetch content from a URL, pass the URL to fetch:

\`fetch('https://mywebsite.com/mydata.json')\`

Networking is inherently asynchronous, so fetch returns a Promise that makes asynchronous code straightforward. You handle the response by chaining .then() methods. The first .then() receives the response object and typically calls response.json() to parse JSON response. That returns another promise, so you chain another .then() to access the parsed data.

Always include .catch() to handle errors that might be thrown by fetch, otherwise errors drop silently.

You can also use async/await syntax in React Native apps. The async keyword defines a function that uses await tasks. When you want to wait for a task before executing the next, define an async function. The await keyword stops execution until the task response arrives. You can use multiple await calls in one async function.

Async syntax for normal functions: \`async function exampleOne(items) { }\`

Async syntax for arrow functions: \`const exampleSecond = async () => { }\`

Await can call native library functions or your own async functions.

Example GET request with fetch:
\`\`\`javascript
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

Example POST request:
\`\`\`javascript
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({name: 'John', email: 'john@example.com'})
})
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));
\`\`\`

Async/await example:
\`\`\`javascript
const getData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
\`\`\`

Code analogy: Fetch is like ordering food delivery—you call the restaurant (request), they promise to deliver (Promise), you wait (asynchronous), they bring food (response), you eat (handle data), or they call back if there's a problem (error handling). Async/await is like having a personal assistant who waits for each task to complete before starting the next, but doesn't block you from doing other things while waiting.`,
  },
  {
    id: 'n17',
    topic: 'React Native Navigation Fundamentals',
    content: `Developing mobile applications involves many moving parts from styling and functionality to authentication, session persistence, and navigation. React Navigation is a library consisting of components that makes building and connecting screens in React Native easy.

Understanding mobile navigation differences from web navigation is crucial. On the web, navigation uses URLs and browser history. Mobile apps use stack navigation (screens push onto and pop off a stack), tab navigation (bottom or top tabs), and drawer navigation (slide-out menu).

**Drawer navigation** requires swiping from left (sometimes right) side for navigating between screens. It typically consists of links providing gateway to moving between screens, similar to sidebars in web applications.

**Tab navigation** is the most common form in mobile applications using tab-based components (bottom and top tabs).

Most mobile apps use all types of navigators by nesting them together.

To install React Navigation:
\`\`\`bash
npm install @react-navigation/native @react-navigation/native-stack
\`\`\`

Install peer dependencies:
- For Expo managed projects: \`expo install react-native-screens react-native-safe-area-context\`
- For bare React Native projects: \`npm install react-native-screens react-native-safe-area-context\`
- On Mac developing for iOS: \`npx pod-install ios\`

**Creating a simple stack navigation:**

Step 1: Import NavigationContainer and createNativeStackNavigator.

Step 2: Wrap your app in NavigationContainer (only once at root, typically in App.js). NavigationContainer manages navigation tree and contains navigation state.

Step 3: createNativeStackNavigator returns an object with Screen and Navigator properties—both React components for configuring the navigator. Navigator contains Screen elements as children defining route configurations.

Step 4: Create Stack Navigator with \`<Stack.Navigator>\`.

Step 5: Create screens (Home, Profile) as functional components returning View with Text.

Step 6: Add screens to navigator: \`<Stack.Screen name='Home' component={Home}/>\`

Step 7: Use navigation prop to navigate: \`navigation.navigate('Profile')\`

The navigate function goes to a screen. If already on that screen, it does nothing. To add another profile screen (common when passing unique data), use push instead: \`navigation.push('Profile')\`.

Going back: header bar shows back button, or call \`navigation.goBack()\`. Android hardware back button works as expected.

Go to top: \`navigation.popToTop()\`

Configure initial route with initialRouteName prop: \`<Stack.Navigator initialRouteName='Profile'>\`

Code analogy: Stack navigation is like a deck of cards—you push a new card on top (new screen), and pop to go back. Tab navigation is like a filing cabinet with labeled dividers—each tab is a different section you can flip to. Drawer navigation is like a hidden drawer you pull out from the side of a desk—options are hidden until you need them.`,
  },
  {
    id: 'n18',
    topic: 'Navigation: Passing Parameters and Other Navigators',
    content: `**Passing parameters to routes** involves two parts:

1. Pass params to a route by putting them in an object as a second parameter to navigation.navigate:
   \`navigation.navigate('RouteName', { /* params go here */ })\`

2. Read params in screen component: \`route.params\`

Example:
\`\`\`javascript
<Button 
  title='Go to Profile' 
  onPress={() => navigation.navigate('Profile', {name: 'Meron'})} 
/>
\`\`\`

In Profile screen:
\`\`\`javascript
const { name } = route.params;
return <Text>{name} Profile</Text>;
\`\`\`

**Passing additional props** to screens can be done with two approaches:
- Use React context and wrap navigator with context provider (recommended)
- Use render callback instead of component prop:
\`\`\`javascript
<Stack.Screen name="Home">
  {props => <Home {...props} msg='Hello from main navigator' />}
</Stack.Screen>
\`\`\`

**Tab navigation** is possibly the most common style.

Install: \`npm install @react-navigation/bottom-tabs\`

Steps:
1. Import NavigationContainer and createBottomTabNavigator
2. Wrap app in NavigationContainer
3. Create Tab navigator: \`const Tab = createBottomTabNavigator();\`
4. Return NavigationContainer containing Tab.Navigator with Tab.Screen components

**Drawer navigation:**

Install: \`npm install @react-navigation/drawer\`

Install dependencies: \`npm install react-native-gesture-handler react-native-reanimated\`

Add at top of entry file (index.js or App.js): \`import 'react-native-gesture-handler';\`

For Reanimated 2, add Babel plugin to babel.config.js.

Steps:
1. Import NavigationContainer and createDrawerNavigator
2. Wrap app in NavigationContainer
3. Create Drawer navigator: \`const Drawer = createDrawerNavigator();\`
4. Return NavigationContainer containing Drawer.Navigator with Drawer.Screen components

**Nesting navigators** is common—for example, a tab navigator containing stack navigators in each tab, or a drawer navigator containing a stack navigator. This allows different navigation patterns within different parts of the app.

Example: A social media app might have bottom tabs for Home, Search, Notifications, Profile. The Home tab might contain a stack navigator with Feed, Post Details, Comments screens. The Profile tab might contain a stack navigator with Profile, Edit Profile, Settings screens.

Code analogy: Passing parameters is like addressing a package—you write the destination (route name) and include contents (params). Tab navigation is like a multi-tool with different functions on each blade—you flip to the tool you need. Drawer navigation is like a filing cabinet drawer—pull it open to access different folders (screens). Nesting navigators is like Russian dolls—navigators inside navigators inside navigators.`,
  },
  {
    id: 'n19',
    topic: 'Persisting Data with AsyncStorage',
    content: `When building React Native applications, several ways to persist data exist, each with advantages. Popular methods include AsyncStorage, React Native SQLite 2, Realm, and React Native Local MongoDB.

**AsyncStorage** is a simple, asynchronous, unencrypted by default module that persists data offline in React Native apps. Persistence uses a key-value storage system.

Benefits include data or setting variables being available when user restarts app in the same state they left.

Security note: AsyncStorage encrypts none of the saved data. All objects are stored as strings and must be serialized before saving (JSON.stringify) and deserialized before retrieval (JSON.parse).

Three main actions with AsyncStorage: Set, Get, and Delete.
- setItem saves data with a key and value
- getItem retrieves data using the key
- removeItem deletes data using the key
- clear deletes all data (no key needed)

Installation: \`npm install @react-native-async-storage/async-storage\`

Import: \`import AsyncStorage from '@react-native-async-storage/async-storage';\`

Storing string value:
\`\`\`javascript
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_key', value);
  } catch (e) {
    console.error('Saving error:', e);
  }
};
\`\`\`

Storing object value requires serialization:
\`\`\`javascript
const storeObject = async (object) => {
  try {
    const jsonValue = JSON.stringify(object);
    await AsyncStorage.setItem('@storage_key', jsonValue);
  } catch (e) {
    console.error(e);
  }
};
\`\`\`

Reading string value:
\`\`\`javascript
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_key');
    if (value !== null) {
      console.log(value);
    }
  } catch (e) {
    console.error('Error reading:', e);
  }
};
\`\`\`

Reading object value requires parsing:
\`\`\`javascript
const getObject = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(e);
  }
};
\`\`\`

Deleting data: \`await AsyncStorage.removeItem('@storage_key');\`

Clearing all: \`await AsyncStorage.clear();\`

**SQLite** is a C-language library used as data-store in mobile applications. It's an open-source SQL database storing data to a text file on device, supporting all relational database features. No connection needed (like JDBC, ODBC)—just define SQL statements for creating/updating database. Access involves file system access (slow), so perform database operations asynchronously.

Installation: \`npm install --save react-native-sqlite-storage\`

Usage: Import SQLite, open database: \`let db = SQLite.openDatabase({ name: 'UserDatabase.db' });\`

Basic operations: create table, insert record, update record, delete record, select record.

Example: Storing user preferences like theme (dark/light) or notification settings in AsyncStorage so they persist when app restarts.

Code analogy: AsyncStorage is like a notepad and pen—you write down (setItem) information on a page (key), read it later (getItem), erase it (removeItem), or throw away the whole notepad (clear). SQLite is like a filing cabinet with organized folders and index cards—more structured but requires more effort to maintain.`,
  },
  {
    id: 'n20',
    topic: 'Debugging and Testing React Native Apps',
    content: `Debugging React Native apps requires different approaches than web development because code runs on a device or emulator, not a browser.

**Remote JS Debugging** runs your JavaScript code in Chrome's V8 engine instead of on the device. To enable: shake device (physical) or press \`Cmd+D\` (iOS emulator) or \`Cmd+M\` (Android emulator), select "Debug JS Remotely". This opens \`http://localhost:8081/debugger-ui\` in Chrome. Open Chrome DevTools (\`F12\` or \`Cmd+Option+I\`) to set breakpoints, inspect console logs, and profile performance.

Limitations of Remote Debugging: some APIs behave differently (timing, WebSocket), and it disconnects on app reload.

**React Native Debugger** is a standalone app combining Chrome DevTools and Redux DevTools. Download from official GitHub, install, and it automatically connects when you start Remote Debugging. Features include React DevTools (component hierarchy), Redux DevTools (state inspection), network inspection, and performance monitoring.

**Flipper** is Facebook's debugging platform for mobile apps, supporting both iOS and Android. Install Flipper desktop app, then in React Native 0.62+, Flipper is included by default. Flipper provides network inspector (view all API requests/responses), layout inspector (visualize view hierarchy), logs viewer (native and JS logs), and database inspector (SQLite, Realm).

**React DevTools** (standalone app) with \`react-devtools\` package: \`npm install -g react-devtools\`, then run \`react-devtools\`. This shows component tree, props, state, and hooks with update highlighting.

Console.log debugging works but is verbose. Use console.warn (yellow), console.error (red), and console.table (tabular data). React Native includes \`console.disableYellowBox = true\` to hide warnings (not recommended for production).

**Testing React Native apps:**

Jest is the default testing framework included. Test files with \`.test.js\` or \`.spec.js\` extension.

Example test:
\`\`\`javascript
test('renders correctly', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello')).toBeTruthy();
});
\`\`\`

React Native Testing Library (built on React Test Renderer) provides utilities for testing component behavior.

For end-to-end testing, Detox (by Wix) runs tests on real devices/emulators. Detox setup requires separate configuration for iOS and Android.

For component testing, Storybook lets you develop components in isolation—install \`@storybook/react-native\`, run \`npm run storybook\`, and view components in a separate app.

**Common debugging issues:**
- Red screen errors: read the error message and stack trace, check import paths, verify component exports
- White screen: check navigation setup, verify no undefined variables, check for missing return statements
- Network request failures: verify API URL, check CORS, use ngrok for local backend testing
- Performance issues: use \`InteractionManager\` for heavy operations, avoid inline functions in render, use \`useCallback\` and \`useMemo\`

Code analogy: Debugging is like being a detective at a crime scene—you collect clues (console logs), examine evidence (state values), interview witnesses (component props), and piece together what went wrong. Flipper is like having a surveillance camera system (see everything happening in real-time). React DevTools is like having X-ray vision (see inside components).`,
  },
  {
    id: 'n21',
    topic: 'Handling Device Features: Camera, Location, Permissions',
    content: `Modern mobile apps frequently need access to device hardware like camera, GPS, accelerometer, and microphone. React Native provides the PermissionsAndroid API for Android and expo-permissions (Expo) or react-native-permissions (bare React Native) for cross-platform permission handling.

Android permissions are classified as normal (automatically granted) and dangerous (require user consent). Dangerous permissions include CAMERA, ACCESS_FINE_LOCATION, RECORD_AUDIO, READ_CONTACTS, READ_EXTERNAL_STORAGE.

For Android, add permissions to \`android/app/src/main/AndroidManifest.xml\` inside \`<manifest>\` tag:
\`\`\`xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
\`\`\`

For iOS, add permissions to \`ios/YourApp/Info.plist\`:
\`\`\`xml
<key>NSCameraUsageDescription</key>
<string>We need camera access to take photos</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>We need location to find nearby restaurants</string>
\`\`\`

Requesting permissions on Android:
\`\`\`javascript
import {PermissionsAndroid} from 'react-native';

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera Permission',
        message: 'App needs camera access',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK'
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Camera permission granted');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
\`\`\`

For Expo, use expo-camera and expo-location which handle permissions automatically.

Accessing camera with Expo:
\`\`\`javascript
import {Camera} from 'expo-camera';

const [hasPermission, setHasPermission] = useState(null);

useEffect(() => {
  (async () => {
    const {status} = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  })();
}, []);

// Render camera
{hasPermission && <Camera style={{flex:1}} type={Camera.Constants.Type.back} />}
\`\`\`

Accessing location with Expo:
\`\`\`javascript
import * as Location from 'expo-location';

const [location, setLocation] = useState(null);

useEffect(() => {
  (async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') return;
    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
  })();
}, []);
\`\`\`

For bare React Native, use \`@react-native-community/geolocation\` for location (iOS requires \`NSLocationWhenInUseUsageDescription\` in Info.plist).

Accessing accelerometer/gyroscope: Expo provides expo-sensors:
\`\`\`javascript
import {Accelerometer} from 'expo-sensors';

Accelerometer.addListener(accelerometerData => {
  console.log(accelerometerData);
});
\`\`\`

Accessing contacts: expo-contacts or \`@react-native-community/contacts\`.

Accessing file system: expo-file-system or \`react-native-fs\`.

**Best practices:**
- Always explain why you need permission (iOS usage description strings)
- Check permission status before accessing hardware
- Handle denial gracefully (show explanation, disable features)
- Request permissions at contextually appropriate times (not at app launch)
- For Android, handle "Never ask again" state by directing users to settings

Example: A food delivery app requests location permission when user taps "Find restaurants near me", not on launch. Camera app requests camera permission when user taps "Take photo" button.

Code analogy: Permissions are like asking someone for their house keys—you explain why you need them (usage description), they can say yes (grant), no (deny), or give you a key that works only once (single-use permission). You wouldn't ask for keys at the front door before they've invited you in—similarly, ask for permissions when needed, not at app launch.`,
  },
  {
    id: 'n22',
    topic: 'Performance Optimization in React Native',
    content: `React Native performance optimization is crucial because mobile devices have limited CPU, memory, and battery compared to desktops. Poor performance leads to user frustration, app uninstalls, and negative reviews.

The JavaScript thread handles UI logic, state updates, and event handling. The Native/UI thread handles layout, drawing, and gestures. If JavaScript thread blocks for too long (16ms for 60fps), frames drop causing jank.

Use InteractionManager to run non-urgent tasks after interactions/animations complete:
\`\`\`javascript
InteractionManager.runAfterInteractions(() => {
  /* heavy computation */
});
\`\`\`

**Optimizing list rendering:**

FlatList is efficient but still needs optimization:
- Set \`removeClippedSubviews={true}\` to detach off-screen views (Android only, helps memory)
- Set \`maxToRenderPerBatch\` (default 10) to control how many items render per batch
- Set \`updateCellsBatchingPeriod\` (default 50ms) to batch render updates
- Set \`windowSize\` (default 21) to control how many items mount off-screen
- Use \`getItemLayout\` for fixed-height items to skip measuring:
  \`getItemLayout={(data, index) => ({length: 100, offset: 100 * index, index})}\`
- Use \`initialNumToRender\` (default 10) to control first render batch
- Avoid inline functions in renderItem (creates new functions on each render, breaks PureComponent). Instead, define renderItem outside or use useCallback.

**Optimizing images:**
- Specify dimensions to avoid layout thrashing
- Use \`resizeMode\` ('cover', 'contain', 'stretch') appropriately
- For large images, use progressive loading or thumbnails
- React Native's Image component caches images automatically on iOS, but Android requires manual caching or third-party libraries
- Use \`react-native-fast-image\` for better image caching and performance

**Optimizing re-renders:**
- Use React.memo for functional components to prevent re-rendering when props haven't changed
- Use useMemo for expensive calculations:
  \`const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\`
- Use useCallback for functions passed as props:
  \`const handlePress = useCallback(() => { doSomething(id); }, [id]);\`
- Avoid anonymous functions in JSX props: \`onPress={() => doSomething()}\` creates new function each render. Instead, \`onPress={handlePress}\` with useCallback
- Use PureComponent for class components (shallow props/state comparison)

**Optimizing navigation:**
- Use \`lazy\` prop in Tab.Navigator to load screens only when visited
- Use \`unmountOnBlur\` for screens that shouldn't stay in memory
- Avoid heavy computation in navigation lifecycle methods

**Optimizing images and assets:**
- Use compressed images (TinyPNG, ImageOptim)
- Use WebP format (smaller than PNG/JPEG, supported on Android API 18+, iOS 14+)
- Use vector icons (react-native-vector-icons) instead of PNG icons for better scaling
- Use \`hermes\` engine (enabled by default in React Native 0.70+) for faster startup and smaller bundle size

**Optimizing JavaScript bundle:**
- Use Metro's transformer to minify code
- Enable RAM bundles (Random Access Modules) for faster startup
- Use \`expo-optimize\` to compress assets
- Use \`react-native-bundle-visualizer\` to analyze bundle size

**Optimizing animations:**
- Use Animated API with \`useNativeDriver: true\` to run animations on UI thread:
  \`Animated.timing(this.state.fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true })\`
- Use LayoutAnimation for simple layout changes
- For complex animations, consider react-native-reanimated (runs completely on UI thread)
- Avoid too many simultaneous animations

**Performance monitoring tools:**
- React DevTools (highlight updates)
- Flipper (performance plugin shows frame rates)
- React Native Performance Monitor (shake device → "Show Perf Monitor" shows FPS, RAM, CPU)

**Common performance pitfalls:**
- Large component hierarchies (flatten structure)
- Unnecessary re-renders (use memo, PureComponent)
- Synchronous storage operations (AsyncStorage is async)
- console.log in production (strip using babel plugin)
- Too many TouchableOpacity/Highlight (each has overhead)
- Using ScrollView for large lists (use FlatList)

Example: A chat app with thousands of messages should use FlatList with inverted prop, getItemLayout for fixed height messages, and removeClippedSubviews to maintain smooth scrolling.

Code analogy: Performance optimization is like packing a suitcase for a flight—you remove unnecessary items (dead code), compress clothes (image optimization), organize efficiently (component structure), and use lightweight materials (useNativeDriver animations). A poorly packed suitcase is heavy and hard to manage—just like a slow app.`,
  },
  {
    id: 'n23',
    topic: 'State Management Beyond useState: Context and Redux',
    content: `As React Native apps grow, managing state across many components becomes challenging. useState works for local component state but leads to "prop drilling" (passing props through many levels).

**React Context** provides a way to share values between components without explicitly passing props.

Create a Context:
\`const ThemeContext = React.createContext('light');\`

Provide value:
\`<ThemeContext.Provider value="dark"><App /></ThemeContext.Provider>\`

Consume value:
\`const theme = useContext(ThemeContext);\`

Context is good for global state that changes infrequently (theme, authentication status, language). However, Context re-renders all consumers when value changes, making it inefficient for frequent updates.

**Redux** is a predictable state container for JavaScript apps, widely used with React Native.

Core concepts:
- Store (single source of truth)
- Actions (plain objects describing what happened)
- Reducers (pure functions that specify how state changes)
- Dispatch (sends actions to reducer)
- Selectors (extract specific data from store)

Installation: \`npm install redux react-redux @reduxjs/toolkit\`

Redux Toolkit (RTK) is the recommended approach, simplifying Redux setup.

Create a slice:
\`\`\`javascript
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
    incrementByAmount: (state, action) => { state.value += action.payload }
  }
});
\`\`\`

Export actions:
\`export const { increment, decrement, incrementByAmount } = counterSlice.actions;\`

Configure store:
\`const store = configureStore({ reducer: { counter: counterSlice.reducer } });\`

Provide store to app:
\`<Provider store={store}><App /></Provider>\`

Use in component:
\`\`\`javascript
const count = useSelector(state => state.counter.value);
const dispatch = useDispatch();
\`\`\`

Dispatch actions:
\`<Button onPress={() => dispatch(increment())} title="Increment" />\`

Redux DevTools (integrated with RTK) provides time-travel debugging, action inspection, and state diffs.

For async operations, Redux Thunk (included in RTK) handles side effects:
\`\`\`javascript
const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};
\`\`\`

**Other state management options:**
- MobX (uses observable/observer pattern, more automatic than Redux)
- Zustand (minimal API, less boilerplate than Redux)
- Jotai (atomic state, similar to useState but global)
- Recoil (Facebook's state management, experimental)

**Choosing state management:**
- useState for local UI state (input values, toggle switches)
- Context for dependency injection or infrequent global state (theme, auth)
- Redux for complex global state with many updates (shopping cart, user data, cached API responses)
- Zustand for simple global state without Redux boilerplate

**Best practices:**
- Keep state as normalized as possible (avoid deeply nested objects)
- Use selectors to compute derived data (avoid storing computed values)
- Avoid storing non-serializable data (functions, promises) in Redux
- Use Redux Toolkit's createAsyncThunk for API calls:
\`\`\`javascript
const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await fetch('/api/users');
  return response.json();
});
\`\`\`
- Handle loading/error states in reducers

Example: An e-commerce app uses Redux to manage shopping cart (adding items, removing items, updating quantities), user authentication (login state, user profile), and product catalog (filtering, sorting, pagination). Local useState manages which modal is open, input field values, and component-specific UI states.

Code analogy: State management scales like organizing a library—useState is like keeping a few books on your desk (local), Context is like a community bookshelf in your office (shared but limited), Redux is like a professional library with cataloging system, checkout records, and multiple branches (enterprise-scale). Zustand is like a small neighborhood library (simple but effective).`,
  }
];