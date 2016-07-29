export const toBacklog = ({dispatch},task) => {
  dispatch('ADD_TO_BACKLOG',task)
}

export const toFree = ({dispatch},task) => {
  dispatch('ADD_TO_FREE',task)
}

export const setPosition = ({dispatch}, board, position) => {
  console.log(dispatch)
  dispatch('SET_BOARD_AREA',board,position)
}
