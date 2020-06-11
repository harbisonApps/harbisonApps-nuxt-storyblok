import axios from 'axios'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt + Storyblok Blog ' + ' || ' + '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'robots', content: 'index, follow' },
      { name: 'copyright', content: 'Harbison Apps' },
      { name: 'language', content: 'EN' },
      { hid: 'keywords', name: 'keywords', content: 'Harbison Apps, VueJs, Nuxt, Quasar, javascript, NodeJs, freelance, San Diego, San Diego CA' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,700;1,300' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#220223' },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.NODE_ENV === 'production'
          ? 'bwir4B2SmD0WBu84SxDvrwtt'
          : 'HyzhsjfQ5DFBvA14Bw7eDQtt',
        cacheProvider: 'memory'
      }
    ]
  ],
  generate: {
    // eslint-disable-next-line object-shorthand
    routes: function (callback) {
      const token = 'bwir4B2SmD0WBu84SxDvrwtt'
      const version = 'published'
      // eslint-disable-next-line camelcase
      let cache_version = 0

      const toIgnore = ['home', 'en/settings']
      const routes = ['/']

      // eslint-disable-next-line camelcase
      axios.get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`).then((space_res) => {
        // timestamp of latest publish
        // eslint-disable-next-line camelcase
        cache_version = space_res.data.space.version

        // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
        // eslint-disable-next-line camelcase
        axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`).then((res) => {
          Object.keys(res.data.links).forEach((key) => {
            if (!toIgnore.includes(res.data.links[key].slug)) {
              routes.push('/' + res.data.links[key].slug)
            }
          })

          callback(null, routes)
        })
      })
      // return axios.get(
      //   'https://api.storyblok.com/v1/cdn/stories&version=published&token=bwir4B2SmD0WBu84SxDvrwtt&starts_with=blog&cv=' +
      //   Math.floor(Date.now() / 1e3)
      // )
      //   .then((res) => {
      //     const blogPosts = res.data.stories.map(bp => bp.slug)
      //     return [
      //       '/',
      //       '/about',
      //       '/blog',
      //       ...blogPosts
      //     ]
      //   })
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
