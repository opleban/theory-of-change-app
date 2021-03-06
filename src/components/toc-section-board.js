import React, { Component } from 'react';
import ToCStage from './toc-stage';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../styles/toc-board.css';

class ToCBoard extends Component {
  getUniqueSections(cards) {
    const uniqueSections = [];
    cards.forEach((card) => {
      const section = card.section || 1;
      if (!(uniqueSections.includes(section))) {
        uniqueSections.push(section);
      }
    });
    return uniqueSections.sort();
  }

  groupCardsBySection(cards) {
    const cardsBySection = {};
    cards.forEach((card) => {
      const section = card.section || 1;
      cardsBySection[section] ?   
        cardsBySection[section].push(card):
        cardsBySection[section] = [card]
    });
    return cardsBySection
  }

  getCardsByStage(stageId, cards) {
    return cards.filter((card) => { return card.cardStage === stageId; })
  }

  renderStage(showHeader, stageSectionCards, stage) {
    return showHeader ? 
      (<ToCStage key={j} stageCards={stageSectionCards} {...stage} />) :
      (<ToCStage key={j} noHeader stageCards={stageSectionCards} {...stage} />)
  }

  renderSections(props=this.props) {
    const {stages, cards} = props;
    const uniqueSections = this.getUniqueSections(cards);
    const cardsBySection = this.groupCardsBySection(cards);

    return (
      uniqueSections.map((section, i)=> {
          const showHeader = i === 0; 
          const sectionGroup = cardsBySection[section];

          return (
            <Row key={i}>
              {
                stages.map((stage, j) => {
                  const stageSectionCards = this.getCardsByStage(stage.id, sectionGroup)
                  return this.renderStage(showHeader, stageSectionCards, stage)
                })
              }
            </Row>
          );
        })
    );
  }


  render() {
    const {title} = this.props;
    return (
      <div className="toc-board-container">
        <div className="toc-board-title-wrapper">
          <h1 className="toc-board-title">{title}</h1>
        </div>
        <div className="toc-stages-container">
          <Grid fluid>
          {
            this.renderSections(this.props);
          }
          </Grid>
        </div>
      </div>
    );
  }
}

ToCBoard.defaultProps = {
  title: '',
  stages: [],
  cards: []
};

export default ToCBoard;
