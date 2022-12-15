import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    brand: "purple",
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    brand: "purple",
  },
});
