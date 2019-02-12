<template>
  <div id="app">
    <v-ons-page>
    <Body v-bind:songs="songs" v-bind:playlist_id="this.playlist_id" v-on:plus-minus="handle_plus_minus"/>
    </v-ons-page>
    <Footer v-on:add-song="add_song"/>
  </div>
</template>

<script>
import Body from '@/components/Playlist/Body.vue'
import Footer from '@/components/Playlist/Footer.vue'
import io from "socket.io-client"

export default {
  name: 'app',
  components: {
    Body,
    Footer
  },
  methods: {
    add_song(obj){
      this.socket.emit('new_song', obj)
    },
    handle_plus_minus(obj){
      this.socket.emit('plus_minus', obj)
    }
  },
  created(){
    this.playlist_id = this.$route.params.id;
    this.socket = io.connect('http://localhost:5000', {query: 'room='+this.playlist_id});
    this.socket.on('fresh_list', (data) => {
        this.songs = data;
    });
  },
  mounted(){
    this.socket.on('new_song', (song)=> {
      this.songs = [...this.songs,song]
    });

    this.socket.on('plus_minus', (data)=> {
      this.songs = data;
    });

    this.socket.on('delete_song', (index)=> {
      this.songs.splice(index,1)
    });
  },
  data(){
    return {
      socket: {},
      playlist_id: '',
      state: 'initial',
      songs: []
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo_img {
  height: 200px;
  width: 200px;
}
.header{
  margin-bottom: 10%;
}

</style>
