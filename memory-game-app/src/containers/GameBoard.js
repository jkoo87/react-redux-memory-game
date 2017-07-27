import React, {Component} from 'react'
import { Card } from '../components'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions';
import '../css/GameBoard.css'

class GameBoard extends Component {


    render() {

      let cardsList=[]
      let initialCards = []
      let cardFrontStyle = {
        backgroundImage: 'url(assets/img/back.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }

      //initial card background
      for(let i=0; i < 16; i++){
        initialCards.push(<div key={i} className="initialCardsWrapper" style={cardFrontStyle}><span className="gameName">Memory Game</span></div>)
      }

      //generate cards
      let cards = this.props.cards

      cards = cards.map((card, i) => {
        return (
                <div className={card.flipped? "card_active" : "card"} key={i}>
                  <Card
                  index={i}
                  card={card}
                  flipCard={this.props.flipCard}
                  />
                </div>
            )
      })
      console.log(this.props.cards)
      //If this.props.isStarting === true, show generated cards
      cardsList = this.props.isStarting? cards : initialCards


        return (
            <div className="gameBoard">
              <div className="cardsWrapper">
                {cardsList}
              </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return{
    cards: state.game.cards,
    isStarting: state.game.isStarting,
    score: state.game.score
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
