<template>
  <div id="app">
    <v-ons-page>
    <Body v-bind:songs="songs" v-bind:playlist_id="this.playlist_id" v-on:del-song="delete_song"/>
    </v-ons-page>
    <Footer v-on:add-song="add_song"/>
  </div>
</template>

<script>
import Body from '@/components/Playlist/Body.vue'
import Footer from '@/components/Playlist/Footer.vue'

export default {
  name: 'app',
  components: {
    Body,
    Footer
  },
  methods: {
    delete_song(index){
      this.songs.splice(index,1)
    },
    add_song(obj){
      this.songs = [...this.songs,obj]
    }
  },
  created(){
    this.playlist_id = this.$route.params.id;
  },
  data(){
    return {
      playlist_id: '',
      state: 'initial',
      songs: [
        {
          id: 1,
          song: 'La Macarena',
          artist: 'Los Del Rio',
          count: 18
        },
        {
          id: 2,
          song: 'Never gonna give you up',
          artist: 'Rick Astley',
          count: 16
        },
        {
          id: 3,
          song: 'Who let the dogs out',
          artist: 'Baha Men',
          count: 12
        },
        {
          id: 4,
          song: 'Back in Black',
          artist: 'AC/DC',
          count: 8
        }
      ]
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
