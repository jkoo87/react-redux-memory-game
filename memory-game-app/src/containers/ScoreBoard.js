import React, {Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions';
import '../css/ScoreBoard.css'

class ScoreBoard extends Component {


    componentDidUpdate(){
      // let getSet = ''
      //   if(this.props.show){
      //     setTimeout(()=>{
      //       getSet = <div>Ready</div>
      //     }, 2500)
      //   }

      }

    render() {
      console.log(this.props.show)
      let getSet = ''
      if(this.props.show){
        setTimeout(()=>{
          getSet = <div className="getSet">Ready</div>
        }, 200)
      }

        //If this.props.isStarting === true, show reset button instead of start & show generated cards
        let button = this.props.isStarting? <span>RESET</span> : <span>START THE GAME</span>

        return (
            <div className={ this.props.isStarting ? 'scoreBoard--active' : 'scoreBoard'}>
              {getSet}
              <button className={ this.props.isStarting ? 'gameButton--active' : 'gameButton'} onClick={this.props.startGame.bind(this)}>{button}</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return{
    cards: state.game.cards,
    isStarting: state.game.isStarting,
    isLocked: state.game.isLocked,
    show: state.game.show
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
