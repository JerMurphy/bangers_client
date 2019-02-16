<template>
  <div class="login">
    <v-ons-page>
      <h1> BANGERS </h1>
      <b-button  class="" variant="success" @click="login()">Log in with <img src="@/assets/spotify-logo.png" height="30px"></b-button>
    </v-ons-page>
  </div>
</template>

<script>
//import Header from '@/components/Join/Header.vue'
import axios from 'axios';

export default {
  name: 'login',
  methods: {
    login(){
      axios('http://localhost:5000/login', {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      }).then(function(url){
        window.location = url.data;
      })
    }
  },
  data(){
    return {
  
    }
  }

}
</script>

<style scoped>

</style>

