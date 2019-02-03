import React, { Component } from 'react';
import '../styles/toc-card.css';

class ToCCard extends Component {

  renderCardText() {
    const {cardText, cardHTML} = this.props;
    return cardHTML ? 
    (<div className="toc-card-html" 
      dangerouslySetInnerHTML={{__html: cardHTML}}></div>) :
    (<div className="toc-card-text">{cardText}</div>)
  }

/**  
getCardHeight(props=this.props) {
  if (['problem', 'final_outcome'].includes(props.cardStage)) {

  }
}
 **/ 

  render() {
    const {cardText, cardColor} = this.props;
    const cardStyle = {
      backgroundColor: cardColor
    };

    return (
      <div className="toc-card-container" style={cardStyle}>
        <div className="toc-card"> 
          <div className="toc-card-text">{this.renderCardText()}</div>
        </div>
      </div>
    );
  }
}

ToCCard.defaultProps = {
  cardText: "I'm a card. Please add text to me.",
  cardColor: '#2A5ACD'
};

export default ToCCard;