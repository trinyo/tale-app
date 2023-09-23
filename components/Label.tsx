import { StyleProp, Text, TextStyle } from "react-native";
import React from "react";
import { useTheme } from "../contexts/ThemeProvider";

interface IProps {
  weight?: "regular" | "light" | "medium" | "semibold" | "bold";
  size?: number;
  style?: StyleProp<TextStyle>;
}

const fontStyles: { [key in NonNullable<IProps["weight"]>]: string } = {
  regular: "",
  light: "Light",
  medium: "Medium",
  semibold: "SemiBold",
  bold: "Bold",
} as const;

export default function Label({ children, weight = "regular", size = 16, style }: React.PropsWithChildren<IProps>) {
  const theme = useTheme();

  const textStyle: StyleProp<TextStyle> = {
    color: theme.text,
    fontFamily: "Inter" + fontStyles[weight],
    fontSize: size,
  };

  return <Text style={[textStyle, style]}>{children}</Text>;
}
