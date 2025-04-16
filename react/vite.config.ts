import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: ".", // a projekt gyökere, ahol az index.html van
  plugins: [react()],
  build: {
    outDir: "dist", // ide kerül majd a kész build
    emptyOutDir: true, // törli a korábbi fájlokat
  },
});
