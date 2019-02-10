<template>
  <div class="home">
    <v-ons-page>
      <Header/>
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
      playlist_id: ''
    }
  }
}
</script>
