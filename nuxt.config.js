export default {
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  rootDir: 'frontend',

  css: [
  ],


  plugins: [
  ],


  components: true,


  buildModules: [
  ],

  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/apollo',
    'cookie-universal-nuxt'
  ],

  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-client.js'
    }
  },

  build: {
  }
}
