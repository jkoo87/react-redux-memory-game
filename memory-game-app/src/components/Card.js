import React, {Component} from 'react'
import '../css/Card.css'


class Card extends Component {

    render() {

      let cards = this.props.cards


      cards = cards.map((card, i) => {
        let cardStyle = {
          backgroundImage: 'url(' + card.img + ')'
        }
        return <div key={i} className="card" style={cardStyle}>{card.cardName}</div>
      })

        return (
          <div>
            {cards}
          </div>
        );
    }
}

export default Card;
