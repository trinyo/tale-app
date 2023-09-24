import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Label from "./Label";
import { useTheme } from "@/contexts/ThemeProvider";
import { Colors } from "@/data/Colors";

export default function Flashcard() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.elevation1.normal }]}>
      <View style={{ height: 20, width: "100%", backgroundColor: Colors.accent.red.normal }} />
      <Label>Ja</Label>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "60%",
    borderRadius: 8,
    paddingTop: 12,
    gap: 4,
    alignItems: "center",
  },
});
