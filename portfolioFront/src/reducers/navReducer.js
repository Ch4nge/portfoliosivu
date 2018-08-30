const reducer = (state='home', action) => {
  switch(action.type){
  case 'SWITCHPAGE':
    return action.navi
  default:
    return state
  }
}

export const switchPage = (pageName) => {
  return async (dispatch) => {
    dispatch({
      type: 'SWITCHPAGE',
      navi: pageName
    })
  }
}

export default reducer
