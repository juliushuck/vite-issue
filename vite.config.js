import path from "path";
import * as vite from "vite";

const viteConfig = vite.defineConfig({
  build: {
    lib: {
      entry: path.resolve("main.js"),
      formats: ["es"],
    },
    minify: false,
  },
});

export default viteConfig;
