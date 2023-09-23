import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/ThemeProvider";

export default function BackButton() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <Pressable style={[styles.button, { backgroundColor: theme.elevation1.normal }]} onPress={() => router.back()}>
      <MaterialIcons name="chevron-left" color={theme.text} size={24} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 999,
  },
});
