import { ImageBackground, StyleSheet, useColorScheme } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeContainer from "../../components/HomeContainer";

const backgroundLight = require("../../assets/images/bg-light.png");
const backgroundDark = require("../../assets/images/bg-dark.png");

export default function index() {
  const colorScheme = useColorScheme() || "light";

  return (
    <ImageBackground source={colorScheme === "dark" ? backgroundDark : backgroundLight} style={styles.backgroundImage}>
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
