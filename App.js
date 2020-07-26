import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ActiveScreen from "./screens/ActiveScreen";
import AllScreen from "./screens/AllScreen";
import CompleteScreen from "./screens/CompleteScreen";
import HomeScreen from "./screens/HomeScreen";
import TabBarIcon from "./components/TabBarIcon";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: "absolute",
            right: -6,
            top: -3,
            backgroundColor: "red",
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

function HomeIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "HomeScreen") {
            return (
              <HomeIconWithBadge
                name={
                  focused
                    ? "ios-information-circle"
                    : "ios-information-circle-outline"
                }
                size={size}
                color={color}
              />
            );
          } else if (route.name === "ActiveScreen") {
            return (
              <Ionicons
                name={focused ? "ios-list-box" : "ios-list"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "CompleteScreen") {
            return (
              <Ionicons
                name={focused ? "ios-list-box" : "ios-list"}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
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
