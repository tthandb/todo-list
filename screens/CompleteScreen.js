import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CompleteScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CompleteScreen</Text>
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
export default CompleteScreen;
