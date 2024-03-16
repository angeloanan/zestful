import { defineConfig, squooshImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import solidJs from '@astrojs/solid-js'
import sitemap from '@astrojs/sitemap'

import robots from 'astro-robots'
import cloudflare from '@astrojs/cloudflare'

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
  image: {
    service: squooshImageService()
  },
  adapter: cloudflare({
    mode: 'advanced',
    routes: {
      strategy: 'auto',
      include: [],
      exclude: []
    },
    imageService: 'compile'
  })
})
