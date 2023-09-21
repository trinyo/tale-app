import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const image = require("../../assets/images/layered-waves-haikei.png");

export default function index() {
  return (
    // !FIXME: need better resolution image
    <ImageBackground source={image} style={styles.backgroundImage}>
      <StatusBar style="light" />
      <SafeAreaView>
        <Text>jajajajajajajajajajajajajajaja</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});
