<template>
    <div>
      <v-ons-fab position="bottom center" @click="showModal" :visible="true" class="add_btn">
          <v-ons-icon icon="md-plus"></v-ons-icon>
        </v-ons-fab>
       <v-ons-modal :visible="modalVisible">
        <div class="modal_div">
          <div class="inner-modal">
            <v-ons-icon @click="hideModal" style="float:right; color:black; font-size:25px;" icon="fa-times"></v-ons-icon>
            <h4 class="input-text"> Song title</h4>
            <b-form-input v-model="new_song" type="text" placeholder="title.."></b-form-input>
            <h4 class="input-text"> Artist Name</h4>
            <b-form-input v-model="new_artist" type="text" placeholder="artist.."></b-form-input>
            <b-button  class="add_song_btn" variant="outline-danger" @click="add_song">Add song</b-button>
          </div>
        </div>
      </v-ons-modal>
    </div>
</template>

<script>
import uuid from 'uuid';

export default {
  name: 'Footer',
  Props: {
    new_artist: String,
    new_song: String
  },
  methods: {
    showModal() {
      this.modalVisible = true;
      
    },
    hideModal(){
      this.modalVisible = false;
    },
    add_song(){
      if(this.new_song && this.new_artist){
        const newSong = {
          id: uuid.v4(),
          song: this.new_song,
          artist: this.new_artist,
          count: 5
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
      new_artist: '',
    }
  }
}
</script>

<style scoped>
.add_btn {
    background-color: #FF5252;
  }
  .modal_div{
    background-color: white;
    height: 55%;
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

