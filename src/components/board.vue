<template>
  <div class="board" v-bind:style="style">
  </div>
</template>

<script>
import {setPosition} from '../vuex/actions'

const HELP_OFFSET = 10;

export default {
  el:'board',
  props: {
    color: {
      type: String,
      default: 'teal'
    },
    x:{
      type:Number,
      default:200,
    },
    y:{
      type:Number,
      default:200
    },
    height: {
      type: Number,
      default: 650
    },
    width: {
      type: Number,
      default: 300
    },
    tasks:{
      type: Array
    },
    stage:{
      type:String,
      default:'backlog'
    }
  },
  created(){

    let position = {
      x: this.x,
      y: this.y,
      height: this.height,
      width: this.width
    }

    this.setPosition(this.stage,position)
  },
  data(){
    return{
      style: {
        backgroundColor: this.color,
        left: this.x + 'px',
        top: this.x + 'px',
        width: this.width + 'px',
        height: this.height + 'px'
      },
    }
  },
  vuex:{
    getters:{
      tasks: state => state.boards[this.stage].tasks,

    },
    actions:{
      setPosition,
    },
  }
}
</script>

<style>
.board {
  position:fixed;
  z-index: -1;
  border-radius:10px;
}
</style>
