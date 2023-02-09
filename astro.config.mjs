import path from 'path';
// import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'http://localhost:3000',
  base: '/',

  output: 'static',

  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
