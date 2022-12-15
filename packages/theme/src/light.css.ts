import { createTheme } from "@vanilla-extract/css";
import { vars } from "./contract.css";

export const lightTheme = createTheme(vars, {
  color: {
    brand: "purple",
  },
});
