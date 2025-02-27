import { resolve } from 'path'
import { defineConfig } from "vite";
import handlebars from 'vite-plugin-handlebars';
import injectHTML from 'vite-plugin-html-inject';
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { DEFAULT_OPTIONS } from './config/imageOptimizerConfig';
import cssnanoPlugin from 'cssnano';
import viteHTMLIncludes from '@kingkongdevs/vite-plugin-html-includes';

import pages from './vitejs/pages.config'

const pagesInput = {}

pages.forEach((page => {
    pagesInput[page.name] = page.path
}));


export default defineConfig({
  build: {
    target: 'es2017',
    // target: 'es5',
    outDir: 'dist',
    rollupOptions: {
      input: {
        ...pagesInput
      },
      output: {
        // sourcemap: true,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'app.css') {
            return 'sintec-motor-oil-2025-02/assets/style.css';
          }

          return 'sintec-motor-oil-2025-02/assets/'+assetInfo.name;
        },
        chunkFileNames: (chunkInfo) => {
          console.log(chunkInfo);
          return "sintec-motor-oil-2025-02/assets/[name].js"
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: true,
  },
  plugins: [
    ViteImageOptimizer(DEFAULT_OPTIONS),
    handlebars({
      partialDirectory: resolve(__dirname, 'src/html'),
    }),
    injectHTML(),
    // Минификация CSS
    cssnanoPlugin({
      preset: "default",
    }),
    viteHTMLIncludes({
      componentsPath: '/src/html/',
      componentsDir: '/src/html/'
    }),
  ],
})