<script lang="ts">
import { defineComponent } from 'vue';
import WebsiteHeader from './components/Header.vue'
import WebsiteFooter from './components/Footer.vue'
import WebsiteLogin from './components/Login.vue'

/**
 * App component. You are welcome to modify this file.
 */
export default defineComponent({
  components: {
    WebsiteHeader,
    WebsiteFooter,
    WebsiteLogin,
  },
  data() {
    return {};
  },
});
</script>

<template>
  <main>
    <WebsiteHeader />
    <div class='home-body'>
      <div class='body-left'>
        <img 
          class='splash-art' 
          src='./assets/pogart.svg'
        >
      </div>
      <div class='body-right'>
        <WebsiteLogin />
      </div>
    </div>
    <WebsiteFooter />
  </main>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Roboto:wght@500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    background-image: url('./assets/topography.svg');
    font-family: "Poppins", sans-serif;
  }

  main {
    padding: 0rem 3rem;
  }

  p {
    font-size: 1.2rem;
  }

  body {
    display: flex;
    justify-content: center;
  }

  .home-body {
    display: flex;
    border-radius: 0.5rem;
    background-color: #f5f5f5;
  }

  .body-left {
    padding: 2.5rem;
    background-color: #593067;
    width: 40vw;
  }

  .body-right {
    width: 50vw;
  }

  .splash-art {
    width: 80%;
  }
</style>
