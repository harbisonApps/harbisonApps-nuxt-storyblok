<template>
  <nuxt-link :to="'/blog/' + id">
    <article>
      <hr class="bg-purple">
      <p class="link-color font-italic">
        <u>
          {{ title }}
        </u>
      </p>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
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
  }
}
</script>

<style scoped>
 .link-color {
    color: #022d30;
  }
</style>
