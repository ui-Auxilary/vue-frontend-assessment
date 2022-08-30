<template>
  <form 
    class='form'
    @submit.prevent='onFormSubmit'
  >
    <Teleport to='body'>
      <WebsiteModal ref='popup' />
    </Teleport>
    <div class='form-group'>
      <label>Username</label>
      <div class='input'>
        <i class='fa-solid fa-user' />
        <input 
          v-model='username'
          type='text' 
          placeholder='Username'
        >
      </div>
    </div>
    <div class='form-group'>
      <label>Password</label>
      <div class='input'>
        <i class='fa-solid fa-lock' />
        <input 
          v-model='password'
          type='password' 
          placeholder='password'
        >
      </div>
    </div>
    <div class='form-group'>
      <button class='submit'>
        Sign in
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import axios from 'axios'
import WebsiteModal from './Modal.vue'

export default {
  name: 'WebsiteForm',
  components: {
    WebsiteModal
  },
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    onFormSubmit() {
      axios.post('http://localhost:3000/auth/login', {
        username: this.username,
        password: this.password,
      }).then((response) => {
        this.$refs.popup.show = true;
        this.$refs.popup.status = response.data.status;
        this.$refs.popup.message = response.data.message;
        console.log(response.data)
      }).catch((err) => {
        this.$refs.popup.show = true;
        this.$refs.popup.status = 401;
        this.$refs.popup.message = err.message;
      });
    },
  },
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

  .input {
    border-radius: 50px;
    width: 90%;
    padding: 15px 25px;
    margin: 8px 0;
    background: #fff;
    border: none;
    display: flex;
    gap: 1rem;
  }
  .input:hover {
    outline: 2px solid #a8a3e6;
  }

  input {
    border: none;
    width: 100%;
  }

  input:focus {
    outline: none;
  }

  .submit {
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