import React from "react";
import { View, StyleSheet } from "react-native";
import Label from "./Label";
export default function HomeSets(props: any) {
  return (
    <View style={styles.container}>
      <Label style={styles.text}>{props.title}</Label>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#171717",
    padding: 12,
    borderRadius: 8,
  },
  text: {
    color: "#FAFAFA",
    fontSize: 16,
    fontWeight: "500",
  },
});
