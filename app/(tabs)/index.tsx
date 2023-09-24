import { ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeContainer from "../../components/HomeContainer";

const background = require("../../assets/images/home-bg.png");

export default function index() {
  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
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
