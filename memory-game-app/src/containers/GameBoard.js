import React, {Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions';
import '../css/GameBoard.css'

class GameBoard extends Component {

    render() {
      console.log(this.props)
      let initialCards = []
      for(let i=0; i < 16; i++){
        initialCards.push(<div key={i} className="card">hi</div>)
      }

        return (
            <div className="gameBoard">
              <button className="gameButton" onClick={this.props.startGame.bind(this)}>Click Me!</button>
              <div className="cardsWrapper">
                {initialCards}
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
