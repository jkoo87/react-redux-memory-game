import React, {Component} from 'react'
import { Card } from '../components'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions';
import '../css/GameBoard.css'

class GameBoard extends Component {

    render() {
      console.log(this.props)
        return (
            <div className="gameBoard">
              <Card
              cards={this.props.cards}
              isStarting={this.props.isStarting}
              flipCard={this.props.flipCard}

              />
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
