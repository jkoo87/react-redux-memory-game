import * as types from './ActionTypes.js'

export function pageLoading() {
 return{
   type: types.PAGE_LOADING
 }
}
export function startGame() {
 return{
   type: types.START_GAME
 }
}

export function showCard(card) {
 return{
   type: types.SHOW_CARD,
   card
 }
}

export function hideCard() {
 return{
   type: types.HIDE_CARD,
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

export function gameComplete() {
 return{
   type: types.COMPLETE,
 }
}

export function setHighScore(score) {
 return{
   type: types.SET_SCORE,
   score
 }
}
