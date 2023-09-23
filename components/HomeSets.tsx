import React from "react";
import { View, StyleSheet } from "react-native";
import Label from "./Label";
import { useTheme } from "@/contexts/ThemeProvider";

export default function HomeSets(props: any) {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.elevation1.normal }]}>
      <Label style={styles.text}>{props.title}</Label>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});
