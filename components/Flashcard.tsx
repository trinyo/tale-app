import { Pressable, StyleSheet, Text, View, Animated, Easing } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import Label from "./Label";
import { useTheme } from "@/contexts/ThemeProvider";
import { Colors } from "@/data/Colors";

interface IProps {
  data: { [key: string]: string };
  current: number;
}

export default function Flashcard({ data, current }: IProps) {
  const theme = useTheme();

  const [flipped, setFlipped] = useState(false);
  const [zFlipped, setZFlipped] = useState(false);

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
    <Pressable onPress={() => setFlipped((value) => !value)} style={{ width: "100%", height: "60%" }}>
      <Animated.View
        style={[styles.container, { backgroundColor: theme.elevation1.normal, transform: [{ rotateY: frontRotation }], zIndex: zFlipped ? 0 : 1 }]}
      >
        <View style={{ height: 20, width: "100%", backgroundColor: Colors.accent.red.normal }} />
        <Label>{Object.keys(data)[current]}</Label>
      </Animated.View>
      <Animated.View style={[styles.container, { backgroundColor: theme.elevation1.normal, transform: [{ rotateY: backRotation }] }]}>
        <Label>{data[Object.keys(data)[current]]}</Label>
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
    paddingTop: 12,
    gap: 4,
    alignItems: "center",
  },
});
