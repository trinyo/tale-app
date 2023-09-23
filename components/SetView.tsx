import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "../contexts/ThemeProvider";
import Label from "./Label";
import { useRouter } from "expo-router";

interface IProps {
  name: string;
  count: number;
  id: string;
}

export default function SetView({ name, count, id }: IProps) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Pressable
      style={[styles.view, { backgroundColor: theme.elevation1.normal }]}
      onPress={() => router.push({ pathname: "/set/[uuid]", params: { uuid: id } })}
    >
      <Label style={styles.title}>{name}</Label>
      <Label style={styles.count}>{count} card</Label>
    </Pressable>
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
