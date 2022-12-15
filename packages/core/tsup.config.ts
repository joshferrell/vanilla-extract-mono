import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export default defineConfig({
  esbuildPlugins: [vanillaExtractPlugin()],
});
