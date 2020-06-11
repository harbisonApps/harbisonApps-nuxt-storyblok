<template>
  <nuxt-link
    :to="'/blog/' + id"
  >
    <article>
      <div class="card my-2 shadow-sm bg-color text-white">
        <div
          :style="{backgroundImage: 'url(' + thumbnail + ')'}"
          class="post-preview-thumbnail card-img-top bg-light"
          width="100%"
          height="180"
        />
        <div class="card-body">
          <h2 class="h5 text-center">
            {{ title }}
          </h2>
          <p class="lead small font-italic text-center">
            {{ date }}
          </p>
          <p class="card-text lead small mt-1">
            {{ excerpt }}
          </p>
        </div>
      </div>
      <!-- <div
        :style="{backgroundImage: 'url(' + thumbnail + ')'}"
        class="post-preview-thumbnail"
      />
      <div class="post-preview-content">
        <h1>{{ title }}</h1>
        <p>{{ excerpt }}</p>
      </div> -->
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
    excerpt: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  border-color: wheat;
}

.post-preview-thumbnail {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 9rem;
}

</style>
