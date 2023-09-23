import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function HomeSets(props: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
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
