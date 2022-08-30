<template>
  <form class='form'>
    <div class='form-group'>
      <label>Username</label>
      <input 
        type='text' 
        placeholder='Username'
      >
    </div>
    <div class='form-group'>
      <label>Password</label>
      <input 
        type='password' 
        placeholder='Password'
      >
    </div>
    <div class='form-group'>
      <div 
        class='button' 
        @click='onLogin()'
      >
        Sign in
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import axios from 'axios'
export default {
  name: 'WebsiteForm',
  methods: {
    async onLogin() {
      // const req = {
      //   method: 'POST',
      //   mode: 'cors',
      //   body: {'username': 'bob', 'password': 'cool'}
      // };

      // console.log(req)
      // const response = await fetch('http://localhost:3000/auth/login', req);
      axios.post('http://localhost:3000/auth/login', {
        username: 'Fred',
        password: ''
      }).then((response) => {
        console.log(response.data)
      }).catch((err) => {
        console.log(err.message)
      })
    }
  }
}
</script>

<style scoped>
  .form {
    font-family: Roboto, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  .form-group {
    margin: 10px auto;
    width: 100%;
  }

  .form-group:nth-child(2) {
    margin-bottom: .5rem;
  }

  label {
    font-size: 14px;
  }

  input {
    border-radius: 50px;
    width: 100%;
    padding: 15px 10px;
    margin: 8px 0;
    background: #fff;
    border: none;
  }

  .button {
    text-align: center;
    width: 8rem;
    border-radius: 50px;
    background-color: #3726FF;
    color: white;
    cursor: pointer;
    padding: 12px 15px;
    margin: 8px 0;
  }
</style>