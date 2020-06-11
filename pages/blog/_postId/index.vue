<template>
  <section id="blog-post" v-editable="blokPost">
    <div id="post-image" class="bg-color pt-1 border-top-0 rounded-bottom">
      <img :src="image" class="img-fluid pb-lg-2 mx-auto d-block" :alt="title">
    </div>
    <!-- <div class="post-image img-fluid " :style="{backgroundImage: 'url(' + image + ')'}">
      <h1 id="post-title" class="text-center align-middle text-light">
        {{ title }}
      </h1>
    </div> -->
    <div class="container">
      <div class="row mt-1">
        <div class="col-lg-1" />
        <article class="col-lg-10">
          <h1 id="post-title" class="text-center h4">
            {{ title }}
          </h1>
          <p class="lead small text-center mb-1">
            {{ date }}
          </p>
          <p class="lead small font-italic text-center mb-2">
            {{ excerpt }}
          </p>
          <p class="text-left pb-4">
            {{ content }}
          </p>
        </article>
        <div class="col-lg-1" />
      </div><hr>
    </div>
    <div class="text-center mt-2">
      <ServicesBtn class="bg-color" />
    </div>
  </section>
</template>

<script>
import ServicesBtn from '~/components/Buttons/ServicesBtn'
export default {
  components: {
    ServicesBtn
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories/blog/' + context.params.postId, {
      // version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      version: context.isDev ? 'draft' : 'published'
    }).then((res) => {
      return {
        blokPost: res.data.story.content,
        image: res.data.story.content.thumbnailUrl,
        title: res.data.story.content.title,
        date: res.data.story.content.date,
        excerpt: res.data.story.content.excerpt,
        content: res.data.story.content.content
      }
    })
  },
  head () {
    return {
      title: this.title + ' - Harbison Apps',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.excerpt },
        { hid: 'creationdate', name: 'creationdate', content: this.date },
        { hid: 'author', name: 'author', content: 'Brian Leabold, Harbison Apps' }
      ]
    }
  }
}
</script>

<style scoped>
#blog-post {
  margin: 0;
}

/* .post-image {
  margin-top: 85px;
} */

/* #post-image {
  z-index: 0;
} */
</style>
