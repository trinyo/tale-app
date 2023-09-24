import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Label from "./Label";
import { useTheme } from "@/contexts/ThemeProvider";
import { useLocalSearchParams, useRouter } from "expo-router";

interface IProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  route: string;
}

export default function ModeButton({ icon, label, route }: IProps) {
  const theme = useTheme();
  const router = useRouter();
  const { uuid } = useLocalSearchParams();

  return (
    <Pressable
      onPress={() => router.push({ pathname: `/set/[uuid]/${route}`, params: { uuid: uuid.toString() } } as any)}
      style={[styles.container, { backgroundColor: theme.elevation1.normal }]}
    >
      <Label weight="semibold" size={20}>
        {label}
      </Label>
      <MaterialIcons name={icon} size={36} color={theme.text} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    padding: 12,
  },
});
