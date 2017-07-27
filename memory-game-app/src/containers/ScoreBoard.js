import React, {Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions';
import '../css/ScoreBoard.css'

class ScoreBoard extends Component {

    render() {

        //If this.props.isStarting === true, show reset button instead of start & show generated cards
        let button = this.props.isStarting? <span>RESET</span> : <span>START THE GAME</span>

        return (
            <div className={ this.props.isStarting ? 'scoreBoard--active' : 'scoreBoard'}>
              <button className={ this.props.isStarting ? 'gameButton--active' : 'gameButton'} onClick={this.props.startGame.bind(this)}>{button}</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);