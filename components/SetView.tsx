import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface IProps {
  title: string;
  count: number;
}

export default function SetView({ title, count }: IProps) {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{count} card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
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
