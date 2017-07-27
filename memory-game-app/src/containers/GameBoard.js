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
        let cardStyle = {
          backgroundImage: 'url(assets/img/back.jpg)'
        }
        for(let i=0; i < 16; i++){
          initialCards.push(<div key={i} className="card" style={cardStyle}><span className="gameName">Memory Game</span></div>)
        }


        //If this.props.isStarting === true, show generated cards
        cardList = this.props.isStarting? <Card cards={this.props.cards} /> : initialCards


        return (
            <div className="gameBoard">
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
