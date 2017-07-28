import * as types from './ActionTypes.js'

export function startGame() {
 return{
   type: types.START_GAME
 }
}

export function flipCard(index, cardName) {
 return{
   type: types.FLIP_CARD,
   index,
   cardName
 }
}

export function lockCard() {
 return{
   type: types.LOCK_CARD,
 }
}

export function matchCard(flippedCard) {
 return{
   type: types.MATCH_CARD,
   flippedCard
 }
}
