<template>
  <div class='login-container'>
    <div class='login-text'>
      <h3>Welcome to Pogject!</h3>
      <span>Register an account</span>
    </div>
    <WebsiteForm />
    <h4>Forgot your password?</h4> 
  </div>
</template>

<script lang="ts">
import WebsiteForm from './Form.vue'

export default {
  name: 'WebsiteLogin',
  components: {
    WebsiteForm,
  }
}
</script>

<style scoped>
  .login-container {
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 4rem;
    text-align: left;
  }

  .login-text {
    margin-bottom: 1rem;
  }

  .login-text h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    text-align: left;
    float: left;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .login-text span {
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    color: #CDB6B6;
  }

  h4 {
    text-decoration: underline;
    font-size: 12px;
  }
</style>