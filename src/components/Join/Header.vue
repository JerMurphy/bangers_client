<template>
    <div>
        <v-ons-toolbar>
            <div class="center">Bangers</div>
            <div class="right" style="margin-right:1%">
               <img :src="picture" height="30px" alt="Avatar"> {{name}}
            </div>
        </v-ons-toolbar>
    </div>
</template>

<script>

export default {
  name: 'Header',
  components: {
        
  },
  props: {
    picture: String,
    name: String
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
    color: green;
}
img {
  border-radius: 50%;
}
  
</style>
