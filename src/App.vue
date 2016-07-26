<template>
  <div id="app">
    <task content="This is PROPS!"></task>
    <board></board>
  </div>
</template>

<script>
import Vue from 'vue'
import Task from './components/task'
import Board from './components/board'



export default {
  components: {
    Task,
    Board
  }
}
</script>

<style>
</style>
