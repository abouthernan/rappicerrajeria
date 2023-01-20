import { defineConfig } from 'astro/config'

// https://astro.build/config
import react from '@astrojs/react'
import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
  site: 'https://abouthernan.github.io',
  base: './',
  integrations: [react(), image()]
})
