import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 12,
          marginHorizontal: 12,
          elevation: 0,
          borderRadius: 999,
          height: 50,
          backgroundColor: "#EAEAEA",
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen options={{ tabBarIcon: (props) => <NavbarIcon name="reorder" focused={props.focused} /> }} name="sets" />
      <Tabs.Screen options={{ tabBarIcon: (props) => <NavbarIcon name="home" focused={props.focused} /> }} name="index" />
      <Tabs.Screen options={{ tabBarIcon: (props) => <NavbarIcon name="settings" focused={props.focused} /> }} name="settings" />
    </Tabs>
  );
}

function NavbarIcon(props: { name: keyof typeof MaterialIcons.glyphMap; focused: boolean }) {
  return (
    <View style={{ alignItems: "center", backgroundColor: props.focused ? "#e0e0e0" : "transparent", padding: 12, borderRadius: 999 }}>
      <MaterialIcons name={props.name} size={24} color="#161616" />
    </View>
  );
}
