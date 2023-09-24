import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Label from "@/components/Label";
import { Colors } from "@/data/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/ThemeProvider";
import { useRouter } from "expo-router";

export default function Notfound() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <MaterialCommunityIcons name="emoticon-sad-outline" size={36} color={Colors.accent.red.normal} />
      <Label weight="bold" size={24}>
        Routing Error Occured
      </Label>
      <Pressable
        onPress={() => Linking.openURL("https://github.com/trinyo/tale-app/issues/new")}
        style={[styles.backButton, { backgroundColor: theme.elevation1.normal }]}
      >
        <MaterialCommunityIcons name="github" size={20} color={theme.text} />
        <Label>Report Issue</Label>
      </Pressable>
      <Pressable
        onPress={() => router.replace("/")}
        style={[styles.backButton, { backgroundColor: theme.elevation1.normal, borderWidth: 1, borderColor: "#D70A84" }]}
      >
        <MaterialCommunityIcons name="home-variant" size={20} color={theme.text} />
        <Label>Back to home</Label>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  backButton: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    paddingVertical: 8,
    width: 200,
  },
});
