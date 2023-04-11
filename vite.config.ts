import { defineConfig, splitVendorChunkPlugin } from 'vite';
import graphql from '@rollup/plugin-graphql';
import viteCompression from 'vite-plugin-compression';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';
import { version } from './package.json';

const VERSION = process.env.VERSION || version;
const BUILD_TYPE = process.env.BUILD_TYPE || 'dev';
const BUILD_PLATFORM = process.env.BUILD_PLATFORM || 'h5';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'dist/build', BUILD_PLATFORM),
    sourcemap: BUILD_TYPE !== 'pro' ? 'inline' :  false,
  },
  server: {
    hmr: true,
    host: '0.0.0.0',
  },
  plugins: [splitVendorChunkPlugin(), graphql(), BUILD_PLATFORM === 'h5' ? viteCompression() : null, svgr()],
  resolve: {
    alias:
      [
        { find: '@', replacement: resolve(__dirname, 'src') },
        { find: /^~/, replacement: '' },
      ]
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#FB4B42'
        }
      },
    },
  },
  define: {
    'process.env': {
      BUILD_TYPE,
      VERSION,
    },
  },
});
