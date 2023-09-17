import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#f5f5f5" },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen name="sets" />
      <Tabs.Screen
        options={{ tabBarIcon: (props) => <Fogalmamnincs name="home" /> }}
        name="index"
      />
      <Tabs.Screen
        // Name of the route to hide.
        name="settings"
      />
    </Tabs>
  );
}

function Fogalmamnincs(props: { name: keyof typeof MaterialIcons.glyphMap }) {
  return (
    <View style={{ alignItems: "center" }}>
      <MaterialIcons name={props.name} size={24} color="black" />
      <Text>Home</Text>
    </View>
  );
}
