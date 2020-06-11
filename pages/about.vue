<template>
  <section id="about-page" v-editable="blokPost">
    <div class="masthead" role="img" aria-label="computer code">
      <h1 class="masthead-h1">
        {{ title }}
      </h1>
      <a class="text-light" href="#pills-tab">
        <button class="masthead-button">
          Services I Provide
        </button>
      </a>
    </div>
    <div class="container mt-3">
      <p class="font-italic small lead mb-2">
        {{ lead }}
      </p>
      <p class="text-left pb-4">
        {{ content }}
      </p>
      <div class="mx-2">
        <nav id="pills-tab" class="nav nav-pills nav-justified border-purple p-1 rounded-top border-bottom-0" role="tablist">
          <a
            id="vue-tab"
            class="nav-item nav-link active"
            data-toggle="pill"
            href="#vue"
            role="tab"
            aria-controls="vue"
            aria-selected="true"
          >Vue</a>
          <a
            id="nuxt-tab"
            class="nav-item nav-link"
            data-toggle="pill"
            href="#nuxt"
            role="tab"
            aria-controls="nuxt"
            aria-selected="false"
          >Nuxt</a>
          <a
            id="quasar-tab"
            class="nav-item nav-link"
            data-toggle="pill"
            href="#quasar"
            role="tab"
            aria-controls="quasar"
            aria-selected="false"
          >Quasar</a>
        </nav>
        <div id="pills-tabContent" class="tab-content border-purple border-top-0 rounded-bottom mb-2">
          <div id="vue" class="tab-pane fade show active mb-2" role="tabpanel" aria-labelledby="vue-tab">
            <h3 class="h4 text-center">
              Vue
            </h3>
            <div class="text-center">
              <img class="image-fluid" src="../static/nuxt_logo.png" alt="Nuxt">
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.

              Architecto, sed. Asperiores, dolores voluptatibus eius nobis veritatis non illum optio totam facere blanditiis quaerat, expedita reprehenderit et dignissimos officiis ipsam sequi?
            </p>
          </div>
          <div id="nuxt" class="tab-pane fade" role="tabpanel" aria-labelledby="nuxt-tab">
            <h3 class="h4 text-center">
              Nuxt
            </h3>
            <div class="text-center">
              <img class="image-fluid" src="../static/nuxt_logo.png" alt="Nuxt">
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sed. Asperiores, dolores voluptatibus eius nobis veritatis non illum optio totam facere blanditiis quaerat, expedita reprehenderit et dignissimos officiis ipsam sequi?
            </p>
          </div>
          <div id="quasar" class="tab-pane fade" role="tabpanel" aria-labelledby="quasar-tab">
            <h3 class="h4 text-center">
              Quasar
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sed. Asperiores, dolores voluptatibus eius nobis veritatis non illum optio totam facere blanditiis quaerat, expedita reprehenderit et dignissimos officiis ipsam sequi?
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories/about', {
      version: context.isDev ? 'draft' : 'published'
    }).then((res) => {
      // eslint-disable-next-line no-console
      // console.log(res.data.story)
      return {
        blokPost: res.data.story.content,
        title: res.data.story.content.title,
        lead: res.data.story.content.lead,
        image: res.data.story.content.image,
        content: res.data.story.content.content
        // tags: res.data.story.tag_list
      }
    })
  },
  head () {
    return {
      title: this.title + ' - Harbison Apps',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.lead }
      ]
    }
  }
}
</script>

<style scoped>

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
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(48,68,85,0.65) 100%),url(~static/laptop-code.jpg) no-repeat center center scroll;
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
  background: #327a5a;
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

.masthead:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}

#about-page {
  margin-top: -85px;
}
  #about-page p {
    /* text-indent: 16px; */
    white-space: pre-line;
    margin-top: -1rem;
  }

.nav-item.nav-link.active {
  background: #3b8070;
  color: white
}

.nav-item.nav-link {
  color: #3b8070;
}

.tab-image {
   height: 50px;
 }
</style>
