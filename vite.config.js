import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "path/to/your/csv/files/*.csv", // Adjust the path to your CSV files
          dest: "assets", // Destination directory in the build output
        },
      ],
    }),
  ],
  assetsInclude: ["**/*.csv"],
  alias: {
    "@fortawesome/fontawesome-free":
      "node_modules/@fortawesome/fontawesome-free",
  },
});
