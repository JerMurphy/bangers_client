<template>
    <div>
        <div class="content">
            <h4>Join a Party</h4>
            <b-form-input class="code_input" v-model="playlist_id" type="text" placeholder="Enter party code here..."></b-form-input>
            <b-button  class="" variant="success" @click="goToPlaylist">Join</b-button>
            <br/>
            <br/>
            <h4> No Party to join? Create one:</h4>
            <b-form-input class="code_input" v-model="create_name" type="text" placeholder="Name your playlist"></b-form-input>
            <b-button  class="" variant="success" @click="create_room">Create</b-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Header',
  components: {
        
  },
  props: {
    user: Object
  },
  data(){
      return {
          playlist_id: "",
          create_name: ""
      }
  },
  methods:{
    goToPlaylist(){
      if(this.playlist_id){//might want to add a check to make sure playlist exist before navigating
          this.$router.push({ name: 'playlist', params: { id: this.playlist_id, user: this.user}});
      }
    },
    create_room(){
      var self = this;
      if(this.create_name){
        var obj = {
          name: this.create_name,
          creator_id: this.user.uid
        }
        axios.post('http://localhost:5000/create_party',obj).then(function(resp){
           self.$router.push({ name: 'playlist', params: { id: resp.data, user: self.user}});
        })
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
