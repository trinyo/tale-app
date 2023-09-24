import { StyleSheet, View } from "react-native";
import React from "react";
import Label from "@/components/Label";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/BackButton";
import { useSet } from "@/hooks/useSet";
import ModeButton from "@/components/ModeButton";

export default function ViewSet() {
  const { uuid } = useLocalSearchParams();
  const set = useSet(uuid.toString());
  const router = useRouter();

  if (!set) {
    router.back();
    return null;
  }

  return (
    <SafeAreaView style={{ padding: 12, display: "flex", flexDirection: "column", gap: 12 }}>
      <View style={styles.topBar}>
        <BackButton />
        <Label weight="medium" size={24}>
          {set.name}
        </Label>
      </View>
      <ModeButton label="Flashcards" icon="article" route="flashcards" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
});
