<template>
    <div>
      <v-ons-fab position="bottom center" @click="showModal" :visible="true" class="add_btn">
          <v-ons-icon icon="md-plus"></v-ons-icon>
        </v-ons-fab>
       <v-ons-modal :visible="modalVisible">
        <div class="modal_div">
          <div class="inner-modal">
            <v-ons-icon @click="hideModal" style="float:right; color:black; font-size:25px;" icon="fa-times"></v-ons-icon>
            <h4 class="input-text"> Song title (required)</h4>
            <b-form-input v-model="new_song" type="text" placeholder="title.."></b-form-input>
            <h4 class="input-text"> Artist Name (optional)</h4>
            <b-form-input v-model="new_artist" type="text" placeholder="artist.."></b-form-input>
            <b-button  class="add_song_btn" variant="success" @click="add_song">Search <img src="@/assets/spotify-logo.png" height="25px"></b-button>
          </div>
        </div>
      </v-ons-modal>
    </div>
</template>

<script>
// import uuid from 'uuid';
// import axios from 'axios';

export default {
  name: 'Footer',
  Props: {
   user: {}
  },
  methods: {
    showModal() {
      this.modalVisible = true;
      
    },
    hideModal(){
      this.modalVisible = false;
    },
    add_song(){
      if(this.new_song){
      
        const newSong = {
          song: this.new_song,
          artist: this.new_artist,
        }

        this.$emit('add-song', newSong);
        this.new_artist = '';
        this.new_song = '';
        this.hideModal();
      }
    },
  },
  data(){
    return {
      modalVisible: false,
      new_song: '',
      new_artist: ''
    }
  }
}
</script>

<style scoped>
.add_btn {
    background-color: green;
  }
  .modal_div{
    background-color: white;
    height: 40%;
    width: 90%;
    margin-left: 5%;
  }
  .input-text{
    color: black;
    float: left;
    margin-top: 5%;
  }
  .inner-modal {
    margin-left: 5%;
    margin-right: 5%;
  }
  .add_song_btn {
    margin-top: 5%;
  }


</style>

