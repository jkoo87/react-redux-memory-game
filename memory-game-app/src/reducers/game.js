import * as types from '../actions/ActionTypes';
import generateCards from '../data/generateCards'

const INITIAL_STATE = {
  cards: [],
  isStarting: false
}


export default function game (state=INITIAL_STATE, action){
  switch(action.type) {
    case types.START_GAME:
      return {
        ...state,
        cards: generateCards(),
        isStarting: true
      }

    default:
      return state
  }
}