<template>
  <div id="blog-page">
    <section id="blog-page-header" class="masthead" role="img" aria-label="HTML5 Vue JavaScript">
      <h1 class="masthead-h1">
        {{ pageTitle }}
      </h1>
    </section>
    <div class="text-center my-2">
      <p class="font-italic h6">
        {{ description }}
      </p>
    </div>
    <div class="container">
      <section id="blog-posts" class="row">
        <PostPreview
          v-for="post in posts"
          :id="post.id"
          :key="post.id"
          :title="post.title"
          :date="post.date"
          :excerpt="post.excerpt"
          :thumbnail="post.thumbnailUrl"
          class="col-md-6"
        />
      </section>
      <div class="text-center mt-2">
        <ServicesBtn />
      </div>
    </div>
  </div>
</template>

<script>
import ServicesBtn from '~/components/Buttons/ServicesBtn'
import PostPreview from '@/components/Blog/PostPreview'
export default {
  components: {
    PostPreview, ServicesBtn
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories/', {
      version: context.isDev ? 'draft' : 'published',
      starts_with: 'blog/'
    })
      .then((res) => {
        return {
          posts: res.data.stories.map((bp) => {
            return {
              id: bp.slug,
              title: bp.content.title,
              excerpt: bp.content.excerpt,
              thumbnailUrl: bp.content.thumbnailUrl,
              date: bp.content.date
            }
          })
        }
      })
  },
  data () {
    return {
      pageTitle: 'Blog',
      description: 'A weekly blog dedicated to VueJs, the MEVN stack, and a handful of topics I find interesting.'
    }
  },
  head () {
    return {
      title: this.pageTitle + ' - Harbison Apps',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  }
}
</script>

<style scoped>
#blog-page {
  margin-top: -85px;
}

.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 72vh;  /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size:cover;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(48,68,85,0.65) 100%),url(~static/blog-header.jpg) no-repeat center center scroll;
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

</style>
