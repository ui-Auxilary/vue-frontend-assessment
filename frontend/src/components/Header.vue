<script lang="ts">
import { defineComponent } from 'vue'

/**
 * Header component. You are welcome to modify this file although it might break the challenge.
 * Only modify it if you are confident of your abilities =)
 */

export default defineComponent ({
  name: 'WebsiteHeader',
  props: {
    changeText: {
      type: String,
      required: false,
      default: 'Vue is Mega Fun'
    },
  },
  data() {
    return {};  
  }
});

</script>

<template>  
  <div class='header-container'>
    <a id='logo' href='#'>
      <img class='logo' src='../assets/pogjects.svg'>
    </a>
    <div>
      {{ changeText }}
    </div>
  </div>
</template>

<style scoped>
  .header-container {
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  .logo {
    width: 100%;
  }

  .navbar-nav {
    display: flex;
    width: 8rem;
    justify-content: space-between;
    list-style: none;
    text-decoration: none;
  }

  .nav-item {
    display: flex;
  }
</style>