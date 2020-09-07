const INITIAL_STATE = []

function rootReducer(state = INITIAL_STATE, action){
  switch (action.type) {
    case "ADD_MEME":
      return [...state, action.payload]
    //Accepts meme ID to delete via payload
    case "DELETE_MEME":
      return [...state].filter(meme => meme.id !== action.payload)
    default:
      return state
  }

}

export default rootReducer