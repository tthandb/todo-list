import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ActiveScreen from "./screens/ActiveScreen";
import AllScreen from "./screens/AllScreen";
import CompleteScreen from "./screens/CompleteScreen";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CompleteScreen" component={CompleteScreen} />
      <Tab.Screen name="AllScreen" component={AllScreen} />
      <Tab.Screen name="ActiveScreen" component={ActiveScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
