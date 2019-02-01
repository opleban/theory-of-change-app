import React, { Component } from 'react';
import ToCStage from './toc-stage';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../styles/toc-board.scss';

class ToCBoard extends Component {
  getCardsByStage(stageId, cards) {
    return cards.filter((card) => { return card.cardStage === stageId; })
  }

  renderstageCards(props=this.props) {
    const { title, stages, cards, numOfSections, sectionConfigs } = props;
    return (
      stages.map((stage, i) => {
        const stageCards = this.getCardsByStage(stage.id, cards)
        return (<ToCStage key={i} 
                  sectionConfigs={sectionConfigs} 
                  numOfSections={numOfSections} 
                  stageCards={stageCards} {...stage} />)
      })
    )
  }

  render() {
    const {title} = this.props
    return (
      <div className="toc-board-container">
        <div className="toc-board-title-wrapper">
          <div className="toc-board-title-container">
            <h1 className="toc-board-title">{title}</h1>
            <img src="assets/Humaaans/sitting-3.png" />
            </div>
        </div>
        <div className="toc-stages-container">
          <Grid fluid>
            <Row> 
            {this.renderstageCards(this.props)}
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

ToCBoard.defaultProps = {
  title: '',
  stages: [],
  cards: [],
  numOfSections: 1,
  sectionConfigs: {}
};

export default ToCBoard;
