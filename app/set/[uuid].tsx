import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Label from "@/components/Label";
import { useLocalSearchParams } from "expo-router";

export default function ViewSet() {
  const { uuid } = useLocalSearchParams();

  return (
    <View>
      <Label>{uuid.toString()}</Label>
    </View>
  );
}

const styles = StyleSheet.create({});
