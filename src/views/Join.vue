<template>
  <div class="home">
    <v-ons-page>
      <Header v-bind:name="user_data.first_name" v-bind:picture="user_data.picture"/>
      <br/>
      <br/>
      <Body v-bind:user="user_data"/>
    </v-ons-page>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Join/Header.vue'
import Body from '@/components/Join/Body.vue'

export default {
  name: 'home',
  components: {
    Header,
    Body
  },
  data(){
    return {
      playlist_id: String,
      user_data: Object

    }
  },
  created(){
    this.user_data = JSON.parse(this.$route.query.user_data);
    this.user_data.first_name = this.user_data.name.split(' ')[0]
  }
}
</script>
