import React, {Component} from 'react'
import '../css/Card.css'


class Card extends Component {

    handleClickFlipCard(e){
      e.preventDefault()
      this.props.flipCard(this.props.index)
    }

    render() {
      let cardFrontStyle = {
        backgroundImage: 'url(assets/img/back.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }

      let cardStyle = {
        backgroundImage: 'url(' + this.props.card.img + ')'
      }


        return (
            <div onClick={this.handleClickFlipCard.bind(this)}>
              <div className="cardFront" style={cardFrontStyle}><span className="gameNameOn">?</span></div>
              <div className="cardBack" style={cardStyle}>{this.props.card.cardName}</div>
            </div>
        );
    }
}

export default Card;
