import React, { Component } from 'react';
import '../styles/toc-card.css';

class ToCCard extends Component {

  renderCardText() {
    const {cardText, cardHTML} = this.props;
    console.log('CARD', cardHTML);
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
    const {cardText} = this.props;

    return (
      <div className="toc-card"> 
        <div className="toc-card-text">{this.renderCardText()}</div>
      </div>
    );
  }
}

export default ToCCard;