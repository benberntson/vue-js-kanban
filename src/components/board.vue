<template>
  <div class="board" v-bind:style="style">
  </div>
</template>

<script>
export default {
  el:'board',
  props: {
    color: {
      type: String,
      default: 'teal'
    },
    height: {
      type: Number,
      default: 600
    },
    width: {
      type: Number,
      default: 250
    },
    tasks:{
      type: Array
    },
  },
  data(){
    return{
      style: {
        backgroundColor: this.color,
        width: this.width + 'px',
        height: this.height + 'px'
      },
    }
  },
}
</script>

<style>
.board{
  position:fixed;
  z-index: -1;
  border-radius:10px;
}
</style>
