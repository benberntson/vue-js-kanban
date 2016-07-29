import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mutations = {
  NEW_TASK(state){
    const newTask = {
      content: 'Task content',
      start: 0,
      finish: 0,
      complete: false,
      xPosition: 100,
      yPosition: 800,
      taskStage: 'free'
    };
    this.ADD_TO_FREE(state,task);
  },
  ADD_TO_FREE(state,task){
    state.boards.free.push(task)
  },
  ADD_TO_BACKLOG(state,task){
    state.boards.backlog.push(task)
  },
  ADD_TO_READY(state,task){
    state.boards.ready.push(task)
  },
  ADD_TO_DONE(state,task){
    state.boards.done.push(task)
  },
  ADD_TO_DOING(state,task){
    state.boards.doing.push(task)
  },
  SET_BOARD_AREA(state,board,position){
    state.boards[board].position = position
  }
}

const state = {
  boards:{
    backlog:{
      tasks: [ ],
      position:{
        x: 0,
        y: 0,
        width: 0,
        height:0
      }
    },
    ready:{
      tasks:[ ],
    } ,
    doing: {
      tasks: [ ],
    },
    done:{
      tasks:  [ ],
    },
    free:{
      tasks: [ ],
    },
  },
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
})
