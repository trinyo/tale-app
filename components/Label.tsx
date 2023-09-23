import { StyleProp, Text, TextStyle } from "react-native";
import React from "react";
import { useTheme } from "../contexts/ThemeProvider";

interface IProps {
  // typography?: "display" | "title" | "title2" | "title3" | "subtitle" | "content" | "highlight" | "aside" | "label";
  style?: StyleProp<TextStyle>;
}

export default function Label({ children, style }: React.PropsWithChildren<IProps>) {
  const theme = useTheme();

  // const typographyObject = TextStyles[typography];
  const textStyle: StyleProp<TextStyle> = {
    color: theme.text,
    // fontFamily: typographyObject.family + typographyObject.style,
    // fontSize: typographyObject.size,
  };

  return <Text style={[textStyle, style]}>{children}</Text>;
}
