<template>
  <div class="login">
    <v-ons-page>
      <h3> -- Welcome to --</h3>
      <h1> BANGERS </h1>
      <h5> The best democratic party playlist App </h5>
      <button @click="login()"> Log in with Spotify </button>
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
