import { ThemeProvider, Theme } from "@example/core";
import "@example/core/dist/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Story) => {
  return (
    <ThemeProvider theme={Theme.Light}>
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
