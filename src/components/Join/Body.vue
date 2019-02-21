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
            <b-button  class="" variant="success" @click="check_devices">Create</b-button>
            <v-ons-action-sheet :visible.sync="actionSheetVisible" cancelable title="Please choose one of the following devices to play your music:">
                <v-ons-list>
                    <div v-if="devices[0]">
                        <div v-bind:key="device.id" v-for="device in devices">
                            <v-ons-list-item>
                                <div class="left">
                                        <img class="list-item__thumbnail" src="../../assets/devices.png">
                                    </div>
                                    <div class="center">
                                        <p class="list-item__title">{{device.name}}</p>
                                        <p class="list-item__subtitle">{{device.type}}</p>
                                    </div>
                                    <div class="right">
                                    <button @click="create_room(device)"> Use </button>
                                    </div>
                            </v-ons-list-item>
                        </div>
                    </div>
                    <div v-if="!devices[0]">
                        <v-ons-list-item>
                            <div class="left">
                                <img class="list-item__thumbnail" src="../../assets/devices.png">
                            </div>
                            <div class="center">
                                <h3> You do not currently have any active devices, please activate one and try again</h3>
                            </div>
                        </v-ons-list-item>
                    </div>
                    <v-ons-list-item></v-ons-list-item>
                </v-ons-list>
            </v-ons-action-sheet>
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
          create_name: "",
          actionSheetVisible: false,
          devices: [],
          current_device: {}
      }
  },
  methods:{
    goToPlaylist(){
      if(this.playlist_id){//might want to add a check to make sure playlist exist before navigating
          this.$router.push({ name: 'playlist', params: { id: this.playlist_id, user: this.user}});
      }
    },
    check_devices(){
        var self = this;
        if(this.create_name){
            axios.get('http://localhost:5000/get_active_devices?ua='+ this.user.access_token).then(function(resp){
                self.devices = resp.data;
                self.actionSheetVisible = true;
            });
        }
    },
    create_room(device){
      //add functionality to set users selected device to be their current playback device
      var self = this;
      if(this.create_name){
        var obj = {
          name: this.create_name,
          creator_id: this.user.uid
        }
        axios.post('http://localhost:5000/create_party',obj).then(function(resp){
           self.$router.push({ name: 'playlist', params: { id: resp.data, user: self.user, device: device}});
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
