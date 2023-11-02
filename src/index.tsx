import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { IconButton } from "./components/Button";
import { TopPanel } from "./components/TopPanel";
// Store
import { persistor, store } from "./redux/store";
// Navigation
import { Stack } from "./navigation";
// Screens
import { HomeScreen } from "./screens/home";
import { ReadingScreen } from "./screens/reading";
import { SearchScreen } from "./screens/search";
import { BookScreen } from "./screens/book";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#f1f1f1",
                  borderBottomWidth: 0,
                },
                headerBackTitleVisible: false,
                title: "",
                headerShadowVisible: false,
                headerTintColor: "#555",
                headerRight: () => <TopPanel />,
              }}
            >
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen
                name="Search"
                component={SearchScreen}
                sharedElements={(route) => {
                  const { bookKey } = route.params;
                  return ["search_bar", `item_${bookKey}`];
                }}
              />
              <Stack.Screen
                name="Book"
                component={BookScreen}
                options={({ navigation, route }) => ({
                  presentation: "card",
                })}
                sharedElements={(route) => {
                  const { bookKey } = route.params;
                  return [`item_${bookKey}`];
                }}
              />
              <Stack.Screen name="Reading" component={ReadingScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};
