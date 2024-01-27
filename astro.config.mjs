import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';
import glsl from 'vite-plugin-glsl';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), vue()],
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [glsl()],
  },
});
