import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'

export default defineConfig({
  integrations: [tailwind(), vue()],
  output: 'static',
  site: 'https://plane55.github.io',
  base: '/skill_market',
})
