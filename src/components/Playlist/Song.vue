<template>
    <div>
       <v-ons-list-item>
        <div class="left">
                <img class="list-item__thumbnail" src="@/assets/music_placeholder.png">
            </div>
            <div class="center">
                <p class="list-item__title">{{song.song}}</p>
                <p class="list-item__subtitle">{{song.artist}}</p>
            </div>
            <div class="right">
                <v-ons-button modifier="quiet" class="count_btn"><v-ons-icon icon="fa-chevron-up" @click="handle_count(index, 'up')"></v-ons-icon></v-ons-button>
                <p class="num_count">{{song.count}}</p>
                <v-ons-button modifier="quiet" class="count_btn"><v-ons-icon icon="fa-chevron-down" @click="handle_count(index, 'down')"></v-ons-icon></v-ons-button>
            </div>
       </v-ons-list-item>
    </div>
</template>

<script>
export default {
    name: 'Song',
    props: {
        song: Object,
        index: Number
    },
    methods: {
        handle_count(index,dir){
            var obj = {
                index: index,
                dir: dir
            }
            this.$emit('plus-minus', obj);
        }
    }
}
</script>

<style scoped>
    .song_title{
        font-size: 30px;
    }
    .song_artist{
        font-size: 15px;
    }
    .num_count{
        margin-left: 5px;
        margin-right: 5px;
        font-size: 20px;
    }
    .count_btn{
        color:red;
    }
</style>

