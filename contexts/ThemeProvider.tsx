import React, { useContext, useEffect, useState } from "react";
import { Colors, INeutralColor } from "../data/Colors";
import { Appearance, useColorScheme } from "react-native";

const ThemeContext = React.createContext<INeutralColor>(Colors.neutral.dark);
const ThemeUpdateContext = React.createContext<(arg0: "dark" | "light") => void>(() => {});

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdater() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const colorScheme = useColorScheme() || "light";
  const [theme, setTheme] = useState<INeutralColor>(colorScheme === "dark" ? Colors.neutral.dark : Colors.neutral.light);

  function changeTheme(themeset: "dark" | "light") {
    setTheme(themeset === "dark" ? Colors.neutral.dark : Colors.neutral.light);
    Appearance.setColorScheme(themeset);
  }

  // useEffect(() => {
  //   const load = async () => {
  //     const storedTheme = await AsyncStorage.getItem("@SETTING_THEME");
  //     const storedColor = await AsyncStorage.getItem("@THEME_COLOR");

  //     let neutral: Omit<IThemeContext, "primary"> = theme;
  //     let primary = Colors.accent.primary;

  //     if (storedTheme != null && storedTheme !== "System") {
  //       neutral = storedTheme.toLowerCase() === "dark" ? Colors.neutral.dark : Colors.neutral.light;
  //       Appearance.setColorScheme(storedTheme.toLowerCase() as "dark" | "light");
  //     }

  //     if (storedColor != null) {
  //       primary = {
  //         normal: storedColor,
  //         hover: tinycolor(storedColor).darken(2).toHexString(),
  //         press: tinycolor(storedColor).darken(4).toHexString(),
  //       };
  //     }

  //     setTheme({ primary: primary, ...neutral });
  //   };

  //   load();
  // }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={changeTheme}>{children}</ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
