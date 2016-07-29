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
    state.board[board].position = position
  }
}
console.log(mutations)
export {mutations}
