import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ActiveScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ActiveScreen</Text>
    </View>
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
export default ActiveScreen;
