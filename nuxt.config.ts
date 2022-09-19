// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  plugins: [{ src: '~/plugins/oruga.ts' }],
  head: {
    // meta: [],
    link: [
      { rel: 'icon', href: '/favicon.ico', sizes: 'any' }, // 32×32
      { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }, // 180×180
      { rel: 'manifest', href: '/manifest.webmanifest' },
    ],
    // style: [],
    // script: [],
    // noscript: [],
    // charset: 'utf-8',
    // viewport: 'width=device-width, initial-scale=1',
  },
  modules: ['nuxt-windicss'],
})
