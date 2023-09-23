import { ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import HomeContainer from "../../components/HomeContainer";

const backgroundLight = require("../../assets/images/bg-light.png");
const backgroundDark = require("../../assets/images/bg-dark.png");

export default function index() {
  return (
    // !FIXME: need better resolution image
    <ImageBackground source={backgroundDark} style={styles.backgroundImage}>
      <StatusBar style="light" />
      <SafeAreaView>
        <HomeContainer />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});
