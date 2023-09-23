import { StyleSheet, View } from "react-native";
import React from "react";
import Label from "@/components/Label";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/BackButton";

export default function ViewSet() {
  const { uuid } = useLocalSearchParams();

  return (
    <SafeAreaView style={{ padding: 12 }}>
      <View style={styles.topBar}>
        <BackButton />
        <Label style={styles.title}>{uuid.toString()}</Label>
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
