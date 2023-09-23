export interface IInteractiveColor {
  normal: string;
  hover: string;
  press: string;
}

interface IAccentColor {
  primary: IInteractiveColor;
  blue: IInteractiveColor;
  yellow: IInteractiveColor;
  red: IInteractiveColor;
}

export interface INeutralColor {
  background: string;
  text: string;
  outline: string;
  elevation1: IInteractiveColor;
  elevation2: IInteractiveColor;
  elevation3: IInteractiveColor;
}

interface IColor {
  neutral: {
    light: INeutralColor;
    dark: INeutralColor;
  };
  accent: IAccentColor;
}

export const Colors: IColor = {
  neutral: {
    light: {
      background: "#e8e8e8",
      text: "#181818",
      outline: "#4F4F4F",
      elevation1: {
        normal: "#f0f0f0",
        hover: "#e8e8e8",
        press: "#e1e1e1",
      },
      elevation2: {
        normal: "#f7f7f7",
        hover: "#efefef",
        press: "#e8e8e8",
      },
      elevation3: {
        normal: "#ffffff",
        hover: "#f7f7f7",
        press: "#f0f0f0",
      },
    },
    dark: {
      background: "#121212",
      text: "#FAFAFA",
      outline: "#E0E0E0",
      elevation1: {
        normal: "#1a1a1a",
        hover: "#222222",
        press: "#292929",
      },
      elevation2: {
        normal: "#212121",
        hover: "#292929",
        press: "#303030",
      },
      elevation3: {
        normal: "#292929",
        hover: "#3d3d3d",
        press: "#383838",
      },
    },
  },
  accent: {
    primary: {
      normal: "#7FB77E",
      hover: "#78b377",
      press: "#72b071",
    },
    blue: {
      normal: "#5d9ff0",
      hover: "#5499ef",
      press: "#4a94ee",
    },
    yellow: {
      normal: "#f7d060",
      hover: "#f7cd56",
      press: "#f6ca4d",
    },
    red: {
      normal: "#ea5455",
      hover: "#e94b4c",
      press: "#e84243",
    },
  },
};
