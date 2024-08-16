import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  root: ".",
  srcDir: "./src",
  publicDir: "./public",
  compressHTML: true,
  trailingSlash: "ignore",
  server: { port: 4321, host: "0.0.0.0" },
  devToolbar: { enabled: false },
});
