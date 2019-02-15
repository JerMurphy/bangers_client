<template>
  <div class="home">
    <v-ons-page>
      <Header/>
      <br/>
      <br/>
      <h3> Welcome <h1>{{user_data.name}}</h1></h3>
      <Body/>
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
      playlist_id: '',
      user_data: Object

    }
  },
  created(){
    this.user_data = JSON.parse(this.$route.query.user_data);
  }
}
</script>
