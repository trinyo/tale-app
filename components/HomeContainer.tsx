import React from "react";
import { View, StyleSheet } from "react-native";
import { DataSets } from "../data/datasets";
import HomeSets from "./HomeSets";

let HomeContainer = () => {
  return (
    <View style={styles.container}>
      {DataSets.map((dataset, index) => (
        <HomeSets key={index} title={dataset.name} />
      ))}
    </View>
  );
};

export default HomeContainer;

const styles = StyleSheet.create({
  container: {
    gap: 12,
    margin: 16,
  },
});
