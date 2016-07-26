import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'


Vue.use(Vuex)

const state = {
  boards:{
    backlog: [],
    ready: {
      cool:[],
      warm: [],
      hot: []
    },
    doing: [],
    done: [ ],
    //free contains a predefined note
    free: [
      {//uses the schema from noteTemplate
        content: 'Your first task',
        start: Date.now(),
        finish: null,
        complete:false
      }
    ]
  }
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
})
