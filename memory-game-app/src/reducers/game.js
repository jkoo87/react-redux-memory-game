import * as types from '../actions/ActionTypes';
import generateCards from '../data/generateCards'

const INITIAL_STATE = {
  cards: [],
  isStarting: false,
  score: 0,
  highestScore: 0
}


export default function game (state=INITIAL_STATE, action){
  switch(action.type) {
    case types.START_GAME:
      return {
        ...state,
        cards: generateCards(),
        isStarting: true,
      }
    case types.FLIP_CARD:
      return{
        ...state,
        cards: state.cards.map((card, i) => i === action.index ?
            // transform the one with a matching index
            { ...card, flipped: true } :
            // otherwise return original card
            card
        )

      }

    default:
      return state
  }
}
