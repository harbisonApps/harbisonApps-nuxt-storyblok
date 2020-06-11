<template>
  <div id="nav-bar" class="bg-header bg-color d-flex flex-column flex-md-row align-items-center p-1 px-md-3">
    <h5 class="my-0 mr-md-auto font-weight-normal company-name">
      Harbison Apps
    </h5>

    <nav class="my-2 my-md-0 mr-md-3">
      <ul class="navbar-nav">
        <nuxt-link to="/" tag="li" class="p-2 nav-item nav-link">
          <a>home</a>
        </nuxt-link>
        <nuxt-link to="/about" tag="li" class="p-2 nav-item nav-link">
          <a>about</a>
        </nuxt-link>
        <nuxt-link to="/blog" tag="li" class="p-2 nav-item nav-link">
          <a>blog</a>
        </nuxt-link>
        <nuxt-link to="/contact" tag="li" class="p-2 nav-item nav-link">
          <a>contact</a>
        </nuxt-link>
      </ul>
    </nav>
    <!-- <div class="mt-1">
      <a class="btn btn-outline-light mt-1" href="#">Contact</a>
    </div> -->
  </div>
</template>

<style scoped>
/* #nav-bar {

  z-index: 1;
} */

/* .bg-header {
  background: transparent;
  background: #000;
} */

.company-name {
  color: wheat;
}

ul {
  display: inline;
  list-style: none;
  font-weight: bold;
}

.nav-link {
  display: inline;
}

.nav-link.nuxt-link-exact-active {
  border-bottom: 3px solid #022d30
}

.nav-link a {
  display: inline;
  text-decoration: none;
  color: wheat;
}
.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active a {
  color: wheat;
}
</style>
