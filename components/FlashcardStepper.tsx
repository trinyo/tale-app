import { Animated, PanResponder, StyleSheet } from "react-native";
import React, { useRef } from "react";
import Flashcard from "./Flashcard";

interface IProps {
  onForward: () => void;
  onBack: () => void;

  data: { [key: string]: string };
  current: number;
  maximumDifficulity: number;
}

export default function FlashcardStepper({ onForward, onBack, data, current, maximumDifficulity }: IProps) {
  const pan = useRef(new Animated.Value(0)).current;
  const width = useRef(0);
  const panValue = useRef(0);

  pan.addListener(({ value }) => {
    panValue.current = value;
  });

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan }], { useNativeDriver: false }),
      onPanResponderRelease: () => {
        if (panValue.current > width.current / 2) {
          onBack();
          pan.setValue(-panValue.current);
        } else if (panValue.current < (width.current / 2) * -1) {
          onForward();
          pan.setValue(-panValue.current);
        }
        Animated.timing(pan, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  return (
    <Animated.View
      onLayout={(e) => (width.current = e.nativeEvent.layout.width)}
      style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center", transform: [{ translateX: pan }] }}
      {...panResponder.panHandlers}
    >
      <Flashcard data={data} current={current} maximumDifficulity={maximumDifficulity} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({});
