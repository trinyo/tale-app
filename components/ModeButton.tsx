import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Label from "./Label";
import { useTheme } from "@/contexts/ThemeProvider";

interface IProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
}

export default function ModeButton({ icon, label }: IProps) {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.elevation1.normal }]}>
      <Label weight="semibold" size={20}>
        {label}
      </Label>
      <MaterialIcons name={icon} size={36} color={theme.text} />
    </View>
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
