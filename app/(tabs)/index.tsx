import { ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeContainer from "../../components/HomeContainer";

const backgroundLight = require("../../assets/images/bg-light.png");
const backgroundDark = require("../../assets/images/bg-dark.png");

export default function index() {
  return (
    <ImageBackground source={backgroundDark} style={styles.backgroundImage}>
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
