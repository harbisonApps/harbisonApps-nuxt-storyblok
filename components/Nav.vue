/* eslint-disable vue/html-self-closing */
<template>
  <header class="main-header">
    <!-- <div class="site-title">
      Nuxt Storyblok Blog
    </div> -->
    <nav class="navbar navbar-expand-md fixed-top">
      <a class="navbar-brand" href="/">Harbison Apps</a>
      <!-- <nuxt-link to="/" class="navbar-brand">
        <a>Nuxt-Storyblok</a>
      </nuxt-link> -->
      <button
        class="navbar-toggler navbar-dark"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <!-- <li class="nav-item"> -->
          <nuxt-link tag="li" to="/" class="nav-item nav-link">
            <a>home</a>
          </nuxt-link>
          <!-- </li> -->
          <!-- <li class=""> -->
          <nuxt-link to="about" tag="li" class="nav-item nav-link">
            <a>about</a>
          </nuxt-link>
          <!-- </li> -->
          <!-- <li class=""> -->
          <nuxt-link tag="li" to="/blog" class="nav-item nav-link">
            <a>blog</a>
          </nuxt-link>
          <!-- </li> -->
          <!-- <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li> -->
        </ul>
        <!-- <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form> -->
      </div>
      <!-- <ul class="nav-links">
        <nuxt-link to="/" tag="li" class="nav-link">
          <a>Home</a>
        </nuxt-link>
        <nuxt-link to="about" tag="li" class="nav-link">
          <a>About</a>
        </nuxt-link>
        <nuxt-link to="blog" tag="li" class="nav-link">
          <a>Blog</a>
        </nuxt-link>
      </ul> -->
    </nav>
  </header>
</template>

<style scoped>
  .main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #022d30;
    height: 3.5rem;
    z-index: 1;
  }

  .navbar-brand {
    color: wheat;
  }

  .nav-link.nuxt-link-exact-active {
    border-bottom: 3px solid #3b8070;
  }
  .nav-link a {
    display: block;
    text-decoration: none;
    color: white;
  }
  .nav-link a:hover,
  .nav-link a:active,
  .nav-link.nuxt-link-exact-active a {
    color: #3b8070;
  }
</style>
