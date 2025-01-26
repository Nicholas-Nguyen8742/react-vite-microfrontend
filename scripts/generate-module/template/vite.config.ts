import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '../../../../', ['VITE_USER_NODE_ENV', 'PORT']);

  return {
    envDir: '../../../../',
    preview: {
      port: parseInt(env.PORT || '5002', 10),
    },
    server: {
      port: parseInt(env.PORT || '5002', 10),
    },
    plugins: [
      react(),
      tsconfigPaths(),
      federation({
        name: "viteRemote1",
        filename: "remoteEntry1.js",
        exposes: {
          './Button1': './src/components/Button'
        },
        shared: ['react','react-dom']
      })
    ],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
      sourcemap: env.VITE_USER_NODE_ENV !== 'production',
    }
  }
});
