import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import solidJs from '@astrojs/solid-js'
import sitemap from '@astrojs/sitemap'

import robots from 'astro-robots'
import node from '@astrojs/node'

// https://astro.build/config
import db from '@astrojs/db'

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'https://mood.angelo.fyi',
  // site: 'http://localhost:4321',
  prefetch: {
    // defaultStrategy: 'viewport',
    prefetchAll: true
  },
  integrations: [db(), solidJs(), tailwind(), sitemap(), robots()],
  adapter: node({
    mode: 'standalone'
  })
})
