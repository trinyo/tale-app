import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DataSets } from "@/data/datasets";
import SetView from "@/components/SetView";
import Label from "@/components/Label";

export default function sets() {
  return (
    <SafeAreaView style={styles.container}>
      <Label style={styles.title}>Sets</Label>
      <FlatList
        data={DataSets}
        renderItem={({ item }) => <SetView title={item.name} count={item.count} />}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
