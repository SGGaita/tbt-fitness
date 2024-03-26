import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  // Base colors
  primary: "#D93025", // Red
  primaryLight:"#fce0de",
  primaryDark: "#C92A1B",
  secondary: "#e0e0e0", // Light gray
  textBlack: "#1E1F20",
  textGray: "#C1C3C5",
  black: "#1E1F20",
  white: "#FFFFFF",
  transparent: "transparent",
};

export const SIZES = {
  // Global sizes
  base: 8,
  font: 14,
  radius: 10,
  padding: 16,
  margin: 12,

  // Spacing
  section: 24,
  halfSection: 12,
  quarterSection: 8,

  // Font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 20,
  body2: 18,
  body3: 16,
  body4: 14,
  body5: 12,

  // App dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: { fontFamily: "Roboto-Bold", fontSize: SIZES.largeTitle },
  h1: { fontFamily: "Roboto-Bold", fontSize: SIZES.h1 },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2 },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3 },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4 },
  body1: {  fontSize: SIZES.body1, fontWeight:300 },
  body2: {  fontSize: SIZES.body2 },
  body3: {  fontSize: SIZES.body3 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
