import * as types from './ActionTypes.js'

export function startGame() {
 return{
   type: types.START_GAME
 }
}

export function matchCard() {
 return{
   type: types.MATCH_CARD
 }
}

export function flipCard() {
 return{
   type: types.FLIP_CARD
 }
}
