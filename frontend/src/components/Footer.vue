<script lang="ts">
export default {
  name: 'WebsiteFooter',
}
</script>

<template>
  <footer class='footer'>
    <div class='footer-left'>
      <img src='../assets/pog.svg'>
    </div>
    <div class='author'>Made with 💕 by Christian</div>
    <div class='footer-right'>
      WHAT
    </div>
  </footer>
</template>

<style>
  .footer {
    display: flex;
    bottom: 0px;
    background-color: #4F3A56;
    padding: 0.5rem;
    justify-content: space-around;
    align-items: center;
    position: sticky;
  }
  
  .footer-left {
    width: 5%;
  }

  .author {
    color: white;
  }
</style>