import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ActiveScreen from "./screens/ActiveScreen";
import AllScreen from "./screens/AllScreen";
import CompleteScreen from "./screens/CompleteScreen";
import HomeScreen from "./screens/HomeScreen";
import TabBarIcon from "./components/TabBarIcon";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
    // tabBar={(props) => <TabBarIcon {...props} />}
    >
      <Tab.Screen name="CompleteScreen" component={CompleteScreen} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
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
