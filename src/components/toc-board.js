import React, { Component } from 'react';
import ToCStage from './toc-stage';

class ToCBoard extends Component {
  getCardsByStage(stage, cards) {
    console.log(stage);
    return cards.filter((card) => { return card.cardStage === stage; })
  }

  render() {
    const { title, stages, cards } = this.props;

    return (
      <div className="toc-board-container">
        <h1 className="toc-board-title">{title}</h1>
        <div className="toc-stages"> 
        {
          stages.map((stage, i) => {
            const stageCards = this.getCardsByStage(stage.stageTitle, cards)
            return (<ToCStage key={i} stageCards={stageCards} {...stage} />)
          })
        }
        </div>
      </div>
    );
  }
}

export default ToCBoard;
