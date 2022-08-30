<template>
  <Transition name='modal'>
    <div 
      v-if='show' 
      class='modal'
    >
      <div class='modal-container'>
        <div class='modal-header'>
          <div class='modal-status'>
            Status: {{ status }}
          </div>
          <div 
            class='modal-close' 
            @click='show = false'
          >
            <i class='fas fa-times' />
          </div>
        </div>
        
        <div class='modal-message'>
          {{ message }}
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang='ts'>
export default {
  name: 'WebsiteModal',
  data() {
    return {
      show: false,
      status: '',
      message: '',
    }
  }
}
</script>

<style scoped>
  .modal-container {
    position: relative;
    border-radius: 10px;
    background-color: #fefefe;
    width: 30rem;
    height: 15rem;
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);
    padding: 1.5rem;
    transition: all 0.3s ease;
  }

  .modal {
    position: fixed;
    
  }
  
  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.2rem solid #DAF7A6;
  }

  .modal-status {
    padding: 1rem 2rem;
  }

  .modal-message {
    text-align: center;
    top: 30%;
    position: relative;
  }
  .modal-close {
    color: red;
    cursor: pointer;
    margin-right: 2rem;
    font-size: 1.5rem;
  }

  .modal-enter-from {
    opacity: 0;
  }

  .modal-enter-to {
    opacity: 0;
  }

  .modal-enter-from .modal-container,
  .modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>