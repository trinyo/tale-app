import { StyleSheet, View } from "react-native";
import React from "react";
import { useTheme } from "../contexts/ThemeProvider";
import Label from "./Label";

interface IProps {
  title: string;
  count: number;
}

export default function SetView({ title, count }: IProps) {
  const theme = useTheme();

  return (
    <View style={[styles.view, { backgroundColor: theme.elevation1.normal }]}>
      <Label style={styles.title}>{title}</Label>
      <Label style={styles.count}>{count} card</Label>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 12,
    borderRadius: 8,
    flexDirection: "column",
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  count: {
    color: "#4F4F4F",
    fontWeight: "300",
    fontSize: 14,
  },
});
