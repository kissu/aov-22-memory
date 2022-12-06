import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    Components({
      imports: ['vue'],
      dts: 'src/auto-imports.d.ts',
      resolvers: [
        IconsResolver({
          componentPrefix: false,
          enabledCollections: ['fluent-emoji'],
          // alias: {
          //   icon: 'fluent-emoji',
          // },
        }),
      ],
    }),
    Icons({}),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
