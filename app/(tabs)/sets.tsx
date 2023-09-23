import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DataSets } from "@/data/datasets";
import SetView from "@/components/SetView";
import Label from "@/components/Label";

export default function sets() {
  return (
    <SafeAreaView style={styles.container}>
      <Label weight="bold" size={28}>
        Sets
      </Label>
      <FlatList data={DataSets} renderItem={({ item }) => <SetView {...item} />} ItemSeparatorComponent={() => <View style={{ height: 12 }} />} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
