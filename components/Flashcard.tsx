import { Pressable, StyleSheet, Text, View, Animated, Easing, ScrollView, ImageBackground, LayoutChangeEvent } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import Label from "./Label";
import { useTheme } from "@/contexts/ThemeProvider";
import { Colors } from "@/data/Colors";

const BackgroundImageEasy = require("../assets/images/diffuculty_card_easy.png");
const BackgroundImageMedium = require("../assets/images/difficulty_card_medium.png");
const BackgroundImageHard = require("../assets/images/difficulty_card_hard.png");

interface IProps {
  data: { [key: string]: string };
  current: number;
  maximumDifficulity: number;
}

export default function Flashcard({ data, current, maximumDifficulity }: IProps) {
  const theme = useTheme();

  const [flipped, setFlipped] = useState(false);
  const [zFlipped, setZFlipped] = useState(false);

  const difficulityBackground = useMemo(() => {
    const relativeDifficulity = data[Object.keys(data)[current]].length / maximumDifficulity;
    if (relativeDifficulity > 0.66) return BackgroundImageHard;
    else if (relativeDifficulity > 0.33) return BackgroundImageMedium;
    else return BackgroundImageEasy;
  }, [current]);

  const rotation = useMemo(() => new Animated.Value(0), []);

  const frontRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const backRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["-180deg", "0deg"],
  });

  useEffect(() => {
    Animated.timing(rotation, {
      toValue: flipped ? 1 : 0,
      duration: 400,
      delay: 0,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setZFlipped(flipped);
    }, 200);
  }, [flipped]);

  return (
    <Pressable onPress={() => setFlipped((value) => !value)} style={{ position: "relative", top: 0, left: 0, width: "100%", height: "60%" }}>
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: theme.elevation1.normal,
            transform: [{ rotateY: frontRotation }],
            zIndex: zFlipped ? 0 : 1,
          },
        ]}
      >
        <ImageBackground source={difficulityBackground} style={styles.image} imageStyle={{ borderRadius: 8 }} blurRadius={0}>
          <Label>{Object.keys(data)[current]}</Label>
        </ImageBackground>
      </Animated.View>
      <Animated.View
        style={[styles.container, styles.definitionCard, { backgroundColor: theme.elevation1.normal, transform: [{ rotateY: backRotation }], paddingTop: 12 }]}
      >
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ justifyContent: "center" }}>
          <Label>{data[Object.keys(data)[current]]}</Label>
        </ScrollView>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  definitionCard: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    textAlign: "justify",
    overflow: "scroll",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
});
