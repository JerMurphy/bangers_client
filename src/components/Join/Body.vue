<template>
    <div>
        <div class="content">
            <h4>Join a Party</h4>
            <b-form-input class="code_input" v-model="playlist_id" type="text" placeholder="Enter party code here..."></b-form-input>
            <b-button  class="" variant="success" @click="goToPlaylist">Join</b-button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Header',
  components: {
        
  },
  props: {
    user: Object
  },
  data(){
      return {
          playlist_id: ""
      }
  },
  methods:{
      goToPlaylist(){
        if(this.playlist_id){
            this.$router.push({ name: 'playlist', params: { id: this.playlist_id, user: this.user}});
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
.code_input {
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 2%;
    width: 96%
}
  
</style>
