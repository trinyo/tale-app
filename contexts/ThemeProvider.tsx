import React, { useContext, useState } from "react";
import { Colors, INeutralColor } from "../data/Colors";
import { Appearance, useColorScheme } from "react-native";
import { useMemo } from "react";
import { ThemeProvider as NavThemeProvider } from "@react-navigation/native";

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
      <ThemeUpdateContext.Provider value={changeTheme}>
        <NavigationThemeProvider>{children}</NavigationThemeProvider>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

export default function NavigationThemeProvider({ children }: React.PropsWithChildren) {
  const theme = useTheme();

  const navTheme = useMemo(() => {
    return {
      dark: true,
      colors: {
        primary: "rgb(0,0,0)",
        background: theme.background,
        card: "rgb(0,0,0)",
        text: "rgb(0,0,0)",
        border: "rgb(0,0,0)",
        notification: "rgb(0,0,0)",
      },
    };
  }, [theme]);

  return <NavThemeProvider value={navTheme}>{children}</NavThemeProvider>;
}
