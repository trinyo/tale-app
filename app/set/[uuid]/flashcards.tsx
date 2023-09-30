import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import Label from "@/components/Label";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/ThemeProvider";
import { Colors } from "@/data/Colors";
import Flashcard from "@/components/Flashcard";
import { Redirect, useLocalSearchParams } from "expo-router";
import { useSet } from "@/hooks/useSet";

export default function flashcards() {
  const { uuid } = useLocalSearchParams();

  const theme = useTheme();

  const set = useSet(uuid.toString())?.data;

  const [current, setCurrent] = useState(0);
  const progressPercent = useMemo(() => (current / 75) * 100, [current]);
  const longestDefinition = useMemo(() => {
    if (!set) return 999;
    return Object.values(set)
      .map((definition) => definition.length)
      .sort((a, b) => b - a)[0];
  }, [set]);

  if (!set) {
    return <Redirect href={"/error"} />;
  }

  return (
    <SafeAreaView style={{ padding: 12, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
      <View style={{ height: "25%" }}>
        {/* Header: Bookmark, exit */}
        <Pressable>
          <MaterialIcons name="subject" size={42} color={theme.text} />
        </Pressable>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* flashcard */}
        <Flashcard data={set} current={current} maximumDifficulity={longestDefinition} />
      </View>
      <View style={styles.bottomBar}>
        {/* progress */}
        <Label weight="medium" size={24}>
          {current + 1}/{Object.keys(set).length}
        </Label>
        <View style={[styles.progressBackground, { backgroundColor: theme.elevation1.normal }]}>
          <View style={[styles.progress, { width: `${progressPercent}%` }]} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    height: "25%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  progress: {
    borderRadius: 999,
    height: 20,
    backgroundColor: Colors.accent.blue.normal,
  },
  progressBackground: {
    borderRadius: 999,
    width: "70%",
    height: 20,
  },
});
