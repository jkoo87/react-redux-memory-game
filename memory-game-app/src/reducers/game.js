import * as types from '../actions/ActionTypes';
import generateCards from '../data/generateCards'

const INITIAL_STATE = {
  cards: [],
  // matchCardArray: [],
  isStarting: false,
  isLocked: false,
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
        isLocked: false,
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


      case types.LOCK_CARD:
        return{
          ...state,
          isLocked: true
        }

      case types.MATCH_CARD:
        const selectedCards = action.flippedCard
        console.log(selectedCards[0].cardName === selectedCards[1].cardName)
        if(selectedCards[0].cardName === selectedCards[1].cardName){
          return {
            ...state,
            isLocked: false,
            cards: state.cards.map((card) => card.cardName === selectedCards[0].cardName ?
                { ...card, matched: true } :
                card
            )
          }
        } else if(selectedCards[0].cardName !== selectedCards[1].cardName){
          return {
            ...state,
            isLocked: false,
            cards: state.cards.map((card) => card.cardName === selectedCards[0].cardName || card.cardName === selectedCards[1].cardName ?
                { ...card, flipped: false } :
                card
            )
          }
        } else return state


    default:
      return state
  }
}
