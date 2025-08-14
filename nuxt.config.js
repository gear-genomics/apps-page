import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig ({
  app: {
    head: {
      title: 'GEAR: genome analysis server',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'A suite of bioinformatics / genomics web applications.'
        },
        { name: 'og:title', content: 'GEAR: genome analysis server.' },
        {
          name: 'og:description',
          content: 'GEAR is a suite of bioinformatics / genomics web applications. Give it a spin! 🚀'
        },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://www.gear-genomics.com' },
        { name: 'og:image', content: 'https://www.gear-genomics.com/gear.png' },
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:title',
          content: 'GEAR: genome analysis server.'
        },
        {
          name: 'twitter:description',
          content: 'GEAR is a suite of bioinformatics / genomics web applications. Give it a spin! 🚀'
        },
        {
          name: 'twitter:image',
          content: 'https://www.gear-genomics.com/gear.png'
        },
        { name: 'twitter:image:alt', content: 'GEAR Logo' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href:
            'https://www.gear-genomics.com/libs/landing.css'
        }
      ]
    }
  },
  css: [
    'vuetify/styles'
  ],
  build: {
    transpile: ['vuetify'],
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader'
      })
    }
  }
})

