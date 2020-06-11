<template>
  <div class="">
    <NavBar />
    <main role="main">
      <nuxt />
    </main>
    <Footer />
    <!-- <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous" />
    <script>window.jQuery || document.write('<script src="../assets/js/vendor/jquery.slim.min.js"><\/script>')</script><script src="../assets/dist/js/bootstrap.bundle.js" /> -->
  </div>
</template>

<script>
// import Nav from '@/components/Nav'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
  components: {
    NavBar, Footer
  }
}
</script>

<style>
html {
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

/* body {
  background: wheat;
} */

p {
  text-indent: 16px;
  margin: 0 1rem;
}

.bg-color {
  background: #022d30
}

.border-purple {
  border: #220223 solid .5px;
}

* {
  box-sizing: border-box;
}

.jumbotron {
  padding-top: 0;
  padding-bottom: 1rem;
  margin-top: 0;
  margin-bottom: 0;
  background: transparent;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

a:hover {
  text-decoration: underline;
  text-decoration-color: wheat;
}

footer {
  background: wheat;
  color: #220223
}
</style>
