import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import { compression } from 'vite-plugin-compression2';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'ImproveAI',
        short_name: 'ImproveAI',
        description: 'Soluções inteligentes de IA para empresas que buscam excelência no atendimento ao cliente.',
        theme_color: '#1E1E1E',
        icons: [
          {
            src: 'https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742314338/Group_1_t1wmpz.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: 'https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742314338/Group_1_t1wmpz.svg',
            sizes: '512x512',
            type: 'image/svg+xml'
          }
        ]
      }
    }),
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
    compression({
      algorithm: 'brotliCompress',
      exclude: [/\.(br)$/, /\.(gz)$/],
    })
  ],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: process.env.NODE_ENV !== 'production',
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: process.env.NODE_ENV === 'production'
      }
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: (id) => {
          // Cria chunks diferentes para cada biblioteca
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            return 'vendor'; // resto dos vendors
          }
        },
        // Adiciona hash aos nomes dos arquivos para cache busting
        entryFileNames: 'assets/js/[name].[hash].js',
        chunkFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name)) {
            return 'assets/images/[name].[hash].[ext]';
          }
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/.test(assetInfo.name)) {
            return 'assets/media/[name].[hash].[ext]';
          }
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
            return 'assets/fonts/[name].[hash].[ext]';
          }
          if (/\.css$/.test(assetInfo.name)) {
            return 'assets/css/[name].[hash].[ext]';
          }
          return 'assets/[name].[hash].[ext]';
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
}); 