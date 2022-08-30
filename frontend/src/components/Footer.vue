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
    <div class='author'>
      Made with 💕 by Christian
    </div>
    <div class='footer-right'>
      <a href='https://github.com/ui-Auxilary'>
        <i class='giticon fab fa-github' />
      </a>
    </div>
  </footer>
</template>

<style scoped>
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

  .giticon {
    font-size: 2.2rem;
    transition: all 0.3s ease;
  }

  .giticon:hover {
    transform: scale(1.3);
    color: white;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #11243f;
  }
</style>