module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-reanimated|@ui-kitten|@react-navigation|react-navigation-shared-element|react-native-shared-element|react-native-vector-icons)/)',
  ],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
};
