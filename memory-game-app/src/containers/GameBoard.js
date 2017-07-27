import React, {Component} from 'react'
import { Card } from '../components'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions';
import '../css/GameBoard.css'

class GameBoard extends Component {

    render() {
        let cardList=[]
        let initialCards = []
        let button = ''
        for(let i=0; i < 16; i++){
          initialCards.push(<div key={i} className="card">Memory Game</div>)
        }

        //If this.props.isStarting === true, show reset button instead of start & show generated cards
        button = this.props.isStarting? <span>RESET</span> : <span>START THE GAME</span>
        cardList = this.props.isStarting? <Card cards={this.props.cards} /> : initialCards


        return (
            <div className="gameBoard">
              <button className={ this.props.isStarting ? 'gameButton--active' : 'gameButton'} onClick={this.props.startGame.bind(this)}>{button}</button>
              <div className="cardsWrapper">
                {cardList}
              </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return{
    cards: state.game.cards,
    isStarting: state.game.isStarting
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
