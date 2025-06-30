import { defineConfig } from "vite";
import { consoleForwardPlugin } from "./vite-console-forward-plugin";

export default defineConfig({
  plugins: [
    // Add the console forward plugin
    consoleForwardPlugin({
      // Enable console forwarding (default: true in dev mode)
      enabled: true,

      // Custom API endpoint (default: '/api/debug/client-logs')
      endpoint: "/api/debug/client-logs",

      // Which console levels to forward (default: all)
      levels: ["log", "warn", "error", "info", "debug"],
    }),
  ],

  // Your other Vite configuration...
  server: {
    port: 3000,
  },
});
