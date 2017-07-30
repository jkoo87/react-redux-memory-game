import * as types from '../actions/ActionTypes';
import generateCards from '../data/generateCards'

const INITIAL_STATE = {
  cards: [],
  isStarting: false,
  scoreOn: false,
  gameOn: false,
  isLocked: false,
  isCompleted: false,
  score: 0,
  show: true,
  highestScore: 0
}


export default function game (state=INITIAL_STATE, action){
  switch(action.type) {
    case types.START_GAME:
      return {
        ...state,
        cards: generateCards(),
        isStarting: true,
        show: true,
        gameOn: false
      }

    case types.SHOW_CARD:
      return{
        ...state,
        show: false,
        score: 0,
        cards: state.cards.map((card, i) => i === action.card[0] ?
            { ...card, flipped: true } :
            card
        )
    }

    case types.HIDE_CARD:
      return {
        ...state,
        score: 0,
        scoreOn: true,
        gameOn: true,
        cards: state.cards.map((card, i)=>{
          return {
            ...card,
            ...card.flipped= false, ...card.matched=false
          }
        })
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
        if(selectedCards[0].cardName === selectedCards[1].cardName ){
          return {
            ...state,
            score: state.score + 40,
            isLocked: false,
            cards: state.cards.map((card) => card.cardName === selectedCards[0].cardName ?
                { ...card, matched: true } :
                card
            )
          }
        } else if(selectedCards[0].cardName !== selectedCards[1].cardName){
          return {
            ...state,
            score: state.score - 10,
            isLocked: false,
            cards: state.cards.map((card) => card.cardName === selectedCards[0].cardName || card.cardName === selectedCards[1].cardName ?
                { ...card, flipped: false } :
                card
            )
          }
        } else return state

      case types.COMPLETE:
        return{
          ...state,
          isCompleted: true
        }

      case types.SET_SCORE:
        if(state.highestScore < action.score){
        return{
          ...state,
          highestScore: action.score
        }
      }else return state


    default:
      return state
  }
}
