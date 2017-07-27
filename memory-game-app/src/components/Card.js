import React, {Component} from 'react'
import '../css/Card.css'


class Card extends Component {

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
        let cardStyle = {
          backgroundImage: 'url(' + card.img + ')'
        }
        return (
              <div key={i} className="card">
                <div className="cardFront" style={cardFrontStyle}><span className="gameNameOn">?</span></div>
                <div className="cardBack" style={cardStyle}>{card.cardName}</div>
              </div>
            )
      })


      //If this.props.isStarting === true, show generated cards
      cardsList = this.props.isStarting? cards : initialCards


        return (
          <div className="cardsWrapper">
            {cardsList}
          </div>
        );
    }
}

export default Card;
