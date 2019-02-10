<template>
    <div>
        <div class="content">
            <h4>Join a Party</h4>
            <b-form-input v-model="playlist_id" type="text" placeholder="artist.."></b-form-input>
            <b-button  class="" variant="outline-danger" @click="goToPlaylist">Join</b-button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Header',
  components: {
        
  },
  data(){
      return {
          playlist_id: ""
      }
  },
  methods:{
      goToPlaylist(){
        if(this.playlist_id){
        this.$router.push({ name: 'playlist', params: { id: this.playlist_id } });
        }
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
