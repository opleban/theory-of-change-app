import React, { Component } from 'react';

class ToCCard extends Component {
  render() {
    const {cardText} = this.props;

    return (
      <div className="toc-card"> 
        <div class="toc-card-text">{cardText}</div>
      </div>
    );
  }
}

export default ToCCard;