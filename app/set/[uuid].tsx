import { StyleSheet, View } from "react-native";
import React from "react";
import Label from "@/components/Label";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/BackButton";
import { useSet } from "@/hooks/useSet";

export default function ViewSet() {
  const { uuid } = useLocalSearchParams();
  const set = useSet(uuid.toString());
  const router = useRouter();

  if (!set) {
    router.back();
    return null;
  }

  return (
    <SafeAreaView style={{ padding: 12 }}>
      <View style={styles.topBar}>
        <BackButton />
        <Label style={styles.title}>{set.name}</Label>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
  },
});
