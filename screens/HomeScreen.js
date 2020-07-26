import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AllScreen from "./AllScreen";
import SingleTodoScreen from "./SingleTodoScreen";
const Stack = createStackNavigator();
const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AllScreen" component={AllScreen} />
      <Stack.Screen name="SingleTodoScreen" component={SingleTodoScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
export default HomeScreen;
