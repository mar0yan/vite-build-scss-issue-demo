import { defineConfig } from 'vite';
import path from 'path';
import tailwindcss from '@tailwindcss/postcss';

export default defineConfig({
  plugins: [],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
      ],
    },
  },
  server: {
    watch: [
        'src/javascript/*.js',
        'src/sass/**/*.scss',
    ],
},
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    outDir: path.resolve(__dirname, 'Resources/Public'),
    emptyOutDir: true,
    watch: {
        include: [
            'src/javascript/*.js',
            'src/sass/*.scss',
            'src/sass/**/*.scss',
        ],
    },
    rollupOptions: {
      input: {
        'index-css': path.resolve(__dirname, 'src/sass/index.scss'),
        'critical-css': path.resolve(__dirname, 'src/sass/critical.scss'),
        main: path.resolve(__dirname, 'src/javascript/main.js'),
        tportal: path.resolve(__dirname, 'src/javascript/tportal.js'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            // return 'styles/[name].[hash].css'; // Save all CSS files in "styles" folder
            return 'styles/[name].css'; // Save all CSS files in "styles" folder
          }
        },
        entryFileNames: 'javascripts/[name].js',
        dir: 'Resources/Public',
      },
    },
  },
});
