<template>
  <div id="app">
    <v-ons-page>
    <Body v-bind:songs="playlist.playlist" v-bind:playlist_id="playlist_id" v-on:plus-minus="handle_plus_minus"/>
    <Footer v-bind:user="user" v-on:add-song="add_song"/>
    <v-ons-bottom-toolbar v-if="playlist.createdBy == user.id">
        <!-- will likely change later -->
        <v-ons-toolbar-button v-if="!isPlaying &&  playlist.playlist[0]" icon="ion-ios-play" @click="play_song()"></v-ons-toolbar-button>
        <v-ons-toolbar-button  v-if="isPlaying" icon="ion-ios-pause" @click="pause_song()"></v-ons-toolbar-button>
    </v-ons-bottom-toolbar>

    <!-- modal -->
    <v-ons-modal :visible="modalVisible">
        <div class="modal_div">
          <div class="inner-modal">
            <v-ons-icon @click="hideModal" style="float:right; color:black; font-size:25px;" icon="fa-times"></v-ons-icon>
            <v-ons-list>
              <v-ons-list-header>Suggestions</v-ons-list-header>
              <div v-bind:key="suggestion.id" v-for="(suggestion) in suggestions">
                <v-ons-list-item>
                  <div class="left">
                        <img class="list-item__thumbnail" :src="suggestion.picture">
                    </div>
                    <div class="center">
                        <p class="list-item__title">{{suggestion.song}}</p>
                        <p class="list-item__subtitle">{{suggestion.artist}}</p>
                    </div>
                    <div class="right">
                      <button @click="add_suggestion(suggestion)"> add </button>
                    </div>
                </v-ons-list-item>
              </div>
            </v-ons-list>
          </div>
        </div>
      </v-ons-modal>
    </v-ons-page>
  </div>
</template>

<script>
import Body from '@/components/Playlist/Body.vue'
import Footer from '@/components/Playlist/Footer.vue'
import io from "socket.io-client"
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Body,
    Footer
  },
  methods: {
    add_song(obj){
      var self = this;
      var url = 'http://localhost:5000/search_songs?song=' + obj.song + '&ua=' + this.user.access_token
      if(obj.artist){
        url = url + "&artist="+ obj.artist
      }
      axios.get(url).then(function(suggestions){
       self.suggestions = suggestions.data
       self.modalVisible = true;
      }).catch(function(err){
        alert(err);
      })
      //this.socket.emit('new_song', obj)
    },
    handle_plus_minus(obj){
      obj.code = this.playlist_id;
      this.socket.emit('plus_minus', obj)
    },
    hideModal(){
      this.modalVisible = false;
    },
    add_suggestion(obj){
      obj.code = this.playlist_id;
      this.socket.emit('new_song', obj);
      this.modalVisible = false;
    },
    play_song(){
      var self = this;
      var obj = {
        ua: this.user.access_token,
        device_id: this.device.id,
        uri: this.playlist.playlist[0].uri
      }
      axios.post('http://localhost:5000/play_song', obj).then(function(){
        self.isPlaying = true;
      }).catch(function(err){
        alert(err.message)
      })
    },
    pause_song(){
      var self = this;
      var obj = {
        ua: this.user.access_token,
        device_id: this.device.id
      }
      axios.post('http://localhost:5000/pause_song', obj).then(function(){
        self.isPlaying = false;
      }).catch(function(err){
        alert(err.message)
      })
    }
  },
  created(){
    //initializing data
    this.playlist_id = this.$route.params.id;
    this.device = this.$route.params.device;
    //confirmed user here..
    this.user = this.$route.params.user;
    this.socket = io.connect('http://localhost:5000', {query: 'room='+this.playlist_id});
  },
  mounted(){
    //socket listeners
    this.socket.on('fresh_list', (data) => {
        this.playlist = data;
    });
    this.socket.on('new_song', (song)=> {
      this.playlist.playlist.push(song)
    });

    this.socket.on('plus_minus', (data)=> {
      this.playlist.playlist = data;
    });

    this.socket.on('delete_song', (index)=> {
      this.playlist.playlist.splice(index,1)
    });
  },
  data(){
    return {
      socket: {},
      playlist_id: "",
      user: {},
      state: 'initial',
      playlist: {},
      suggestions: [],
      modalVisible: false,
      device: {},
      isPlaying: false
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
.modal_div{
    background-color: white;
    width: 90%;
    margin-left: 5%;
  }
  .inner-modal {
    margin-left: 5%;
    margin-right: 5%;
    overflow-y: auto;
  }

</style>
