<template>
    <div>
      <v-ons-page>
        <v-ons-toolbar>
            <div class="center">Room Code: {{playlist_id}}</div>
            <div class="right">
                <v-ons-button modifier="quiet" style="color: red" @click="leave">Leave</v-ons-button>
            </div>
        </v-ons-toolbar>
        
        <v-ons-pull-hook :action="reloadSongs" @changestate="state = $event.state">
          <span v-show="state === 'initial'"> Pull to refresh </span>
          <span v-show="state === 'preaction'"> Release </span>
          <span v-show="state === 'action'"> Loading... </span>
        </v-ons-pull-hook>
        <v-ons-list>
          <v-ons-list-header>Playlist</v-ons-list-header>
          <div v-bind:key="song.id" v-for="(song, index) in songs">
            <Song v-bind:song="song" v-bind:index="index" v-on:plus-minus="$emit('plus-minus',$event)" />
          </div>
           <v-ons-list-item></v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </div>
</template>



<script>
import Song from '@/components/Playlist/Song.vue';
export default {
  name: 'Body',
  components: {
    Song    
  },
  props:{
    songs: {
        type: Array,
        default: () => []
    },
    playlist_id: ''
  },
  methods: {
    reloadSongs(done){
      //this will eventually reload the songs from a database
      setTimeout(() => {
        this.state = 'initial';
        done();
      }, 2000);
    },
    leave(){
        this.$router.go(-1)
    }
  },
  data(){
    return {
      state: 'initial'
    }
  }
}
</script>

<style scoped>
  .overflow{
    overflow-y: auto;
  }
  .logo_img {
  height: 50px;
  width: 50px;
}
.menu{
    color: #FF5252;
}
  
</style>

