<template>
  <section id="home-page">
    <div class="masthead" role="img" aria-label="computer code">
      <h1 class="masthead-h1">
        {{ pageTitle }}
      </h1>
      <ServicesBtn />
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-9 rounded-lg">
          <section class="text-center">
            <p class="mb-2 h6">
              Pride, Professionalism, Attention to Detail
            </p>
          </section>
          <hr>
          <section>
            <img src="../static/me.jpg" class="logo pr-3 img-fluid float-left" alt="">
            <h2 class="text-center h5 mt-2">
              Why Do I Love Using Vue?
            </h2>
            <p class="pa-2 mt-2">
              Because Vue has learned form the other JavaScript frameworks on the market. Implementing
              their best parts and yet remaining as unopinionated as possible. Vue also comes in a variety
              of flavors.
            </p>
            <h3 class="text-center h5 mt-2">
              "Flavors, what flavors?"
            </h3>
            <p class="pa-2 mt-2">
              One the benefits of using Vue.js is that there are a variety of ways to build web sites and apps.
            </p>
            <div class="mx-auto text-center">
              <ul class="ul-list">
                <b>
                  <li>Development Speed</li>
                  <li>Smaller JavaScript Payload</li>
                  <li>Versatile</li>
                  <li>Reusability</li>
                </b>
              </ul>
            </div>
          </section>
        </div>
        <div class="col-md-3 text-center">
          <aside class=" border-purple pb-3">
            <h2 class=" h4 mt-1 px-1">
              Blog Posts
            </h2>
            <PostLinks
              v-for="post in posts"
              :id="post.id"
              :key="post.id"
              :title="post.title"
            />
          </aside>
        </div>
      </div>
      <div class="text-center">
        <ServicesBtn class=" w-50 mx-auto" />
      </div>
    </div>
  </section>
</template>

<script>
import PostLinks from '~/components/Blog/PostLinks'
import ServicesBtn from '~/components/Buttons/ServicesBtn'

export default {
  components: {
    PostLinks, ServicesBtn
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories/', {
      version: context.isDev ? 'draft' : 'published',
      starts_with: 'blog/'
    })
      .then((res) => {
        return {
          // posts: res.data.stories.slice(0, 5).map((bp) => {
          posts: res.data.stories.map((bp) => {
            return {
              id: bp.slug,
              title: bp.content.title
            }
          })
        }
      })
  },
  data () {
    return {
      pageTitle: 'Harbison Apps'
    }
  },
  head () {
    return {
      title: this.pageTitle,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>

<style scoped>
#home-page {
  margin-top: -85px;
}

.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 75vh;  /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size:contain;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(48,68,85,0.65) 100%),url(~static/NL-Green.jpg) no-repeat center center scroll;
}

.masthead-h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 11vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 68px;
}

.masthead-button {
  background: #222222;
  border-radius: 10px;
  display: inline-block;
  border: none;
  padding: .5rem 1.5rem 0.75rem 1.5rem;
  margin: 0;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.logo {
  height: 50%;
  width: 50%;
}

.ul-list {
  list-style: none;
}

</style>
