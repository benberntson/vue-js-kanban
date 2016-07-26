<template>
  <div class="task" v-bind:style="style" v-on:mousedown="drag" v-on:mouseup="drop">
    {{content}}
  </div>
</template>

<script>
import store from '../vuex/store'

const DRAG_BOX_SHADOW = "5px 5px 3px #888888"
const DROP_BOX_SHADOW = "rgba(0,0,0) 0px 0px 0px"


export default {
  el:'task',
  props:{
    content:String,
    start:Number,
    finish:Number,
    complete:Boolean,
    taskStage:{
      type: String,
      default: 'free'
    },
    xPosition: {
      type: Number,
      default: 100
    },
    yPosition: {
      type: Number,
      default: 100
    }
  },
  data(){
    return {
      style:{
        position: this.isFree() ? 'relative' : fixed,
        borderLeftColor: 'lightblue',
        boxShadow: DROP_BOX_SHADOW,
        left: '100px',
        top: '100px',
        transition: 'box-shadow 0.2s'
      }
    }
  },
  methods: {
    drag($e){
      let boundingRect = $e.target.getBoundingClientRect()
      let originalX = boundingRect.left - $e.clientX
      let originalY = boundingRect.top - $e.clientY
      this.style.boxShadow = DRAG_BOX_SHADOW
      document.onmousemove = (e) => {
        this.xPosition = originalX + e.clientX
        this.yPosition = originalY + e.clientY
        this.style.left = this.xPosition + 'px'
        this.style.top  = this.yPosition + 'px'
      }
    },
    drop(){
      //TODO:fix boxShadow bug (the dom is not updating with the new style)
      document.onmousemove = null
      this.style.boxShadow = DROP_BOX_SHADOW
    },
    isFree(){
      return this.taskStage === 'free'
    }
  }
}
</script>

<style scoped>
  div.task{
    font-family: arial, cursive, sans-serif;
    padding: 5px 1px;
    width:250px;
    height: 100px;
    background-color:whitesmoke;
    border-left-style: solid;
    border-left-width:15px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
  }
</style>
