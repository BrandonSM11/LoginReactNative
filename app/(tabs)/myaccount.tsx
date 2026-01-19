import React from "react";
import { StyleSheet, View } from "react-native";

export default function Box() {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View style={styles.box1} />
      <View style={styles.box2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  box: {
    backgroundColor: "blue",
    flex: 1,
  },
  box1: {
    backgroundColor: "red",
    flex: 1,
  },
  box2: {
    backgroundColor: "green",
    flex: 1,
  },
});
