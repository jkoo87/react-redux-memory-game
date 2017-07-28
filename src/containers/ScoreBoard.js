import React, {Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions';
import '../css/ScoreBoard.css'

class ScoreBoard extends Component {


    componentDidUpdate(){
      if(this.props.isCompleted){
        this.props.setHighScore(this.props.score)
      }


    }

    render() {
        //show score board when scoreOn is true
        let showScore = this.props.scoreOn ?
          <div>
            <div className="title">{this.props.score} pt</div>
            <div className="highestScore">HS: {this.props.highScore} pt</div>
          </div> : <div className="title">MEMORY GAME</div>


        //If this.props.isStarting === true, show reset button instead of start & show generated cards
        let button = this.props.isStarting? <span>RESET</span> : <span>START THE GAME</span>

        return (
            <div className={ this.props.isStarting ? 'scoreBoard--active' : 'scoreBoard'}>
              {showScore}
              <button className={ this.props.isStarting ? 'gameButton--active' : 'gameButton'} onClick={this.props.startGame.bind(this)}>{button}</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return{
    cards: state.game.cards,
    isStarting: state.game.isStarting,
    scoreOn: state.game.scoreOn,
    score: state.game.score,
    highScore: state.game.highestScore,
    show: state.game.show,
    isCompleted: state.game.isCompleted
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
