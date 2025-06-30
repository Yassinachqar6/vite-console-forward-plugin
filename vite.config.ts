import { defineConfig } from "vite";
import { consoleForwardPlugin } from "./vite-console-forward-plugin";

export default defineConfig({
  plugins: [consoleForwardPlugin({})],
  server: {
    port: 5173,
  },
});
