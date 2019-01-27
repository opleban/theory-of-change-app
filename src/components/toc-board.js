import React, { Component } from 'react';
import ToCStage from './toc-stage';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../styles/toc-board.css';

class ToCBoard extends Component {
  getCardsByStage(stageId, cards) {
    return cards.filter((card) => { return card.cardStage === stageId; })
  }

  render() {
    const { title, stages, cards, numOfSections, sectionConfigs } = this.props;
    return (
      <div className="toc-board-container">
        <div className="toc-board-title-wrapper">
          <div className="toc-board-title-container">
            <h1 className="toc-board-title">{title}</h1>
            <img src="../assets/Humaaans/sitting-3.png" />
          </div>
        </div>
        <div className="toc-stages-container">
          <Grid fluid>
            <Row> 
            {
              stages.map((stage, i) => {
                const stageCards = this.getCardsByStage(stage.id, cards)
                return ( <ToCStage key={i} 
                                   sectionConfigs={sectionConfigs} 
                                   numOfSections={numOfSections} 
                                   stageCards={stageCards} {...stage} />)
              })
            }
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default ToCBoard;
