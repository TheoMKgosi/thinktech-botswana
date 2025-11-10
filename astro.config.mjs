// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://theomkgosi.github.io/',
  base: '/thinktech-botswana',
  vite: {
    plugins: [tailwindcss()]
  }
});
