// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: "load",
    prefetchAll: true,
  },
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },

  output: "static",
  outDir: "./docs",

  // TODO: Change this to your repo name if you are deploying to GitHub Pages
  base: "/Into-Deep-Ocean-AI-Blog",
  site: "https://deveshrx.github.io",

  integrations: [
    react(),
    mdx(),
    sitemap({
      changefreq: "monthly",
      priority: 0.7,

      // lastmod: new Date('2022-02-24'),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "material-theme",
    },
  },
});
