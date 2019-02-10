<template>
    <div>
        <v-ons-toolbar>
            <div class="center">Bangers</div>
            <div class="right">
                <v-ons-toolbar-button icon="ion-navicon, material: md-menu" class="menu"></v-ons-toolbar-button>
            </div>
        </v-ons-toolbar>
    </div>
</template>

<script>

export default {
  name: 'Header',
  components: {
        
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
