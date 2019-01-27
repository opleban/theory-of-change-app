import React, { Component } from 'react';
import ToCCard from './toc-card';
import { Col } from 'react-flexbox-grid';
import MediaQuery from 'react-responsive';
import '../styles/toc-stage.css'

class ToCStage extends Component {
  renderHeader(props=this.props) {
    const {stageDesc, stageTitle, noHeader, numOfSections} = props;
    return noHeader ?
      <div/>:
      <h2 className="toc-stage-title" title={stageDesc}>{stageTitle}</h2>
  }

  getSectionHeight(sectionId, props=this.props) {
    return props.sectionConfigs[sectionId].height;
  }

  // There must be a better way than this. Makes you miss Ruby

  generateLoopArray(num) {
    const ary = []
    for(let i=0; i<num; i++) {
      ary.push(i);
    }
    return ary;
  }

  getCardsBySection(section, cards){
    return cards.filter((card) => { return card.section === section; })
  }

  renderCardsBySection(props=this.props) {
    const {stageCards, numOfSections, sectionConfigs} = props;
    const loopAry = this.generateLoopArray(numOfSections); 
    return (
      loopAry.map((section, i) => {
        const sectionId = section + 1;
        const sectionHeight = this.getSectionHeight(sectionId);
        const sectionStyle = {
          minHeight: `${sectionHeight}px`
        };
        return (
          <div key={i}>
            <MediaQuery maxWidth={991}>
              <div className="toc-stage-section">
                {
                  this.getCardsBySection(sectionId, stageCards).map((card, i) => { 
                    return <div className="toc-card-container" key={i}><ToCCard {...card} /></div>
                  })
                }
              </div>
            </MediaQuery>
            <MediaQuery minWidth={992}>
              <div className="toc-stage-section" style={sectionStyle}>
                {
                  this.getCardsBySection(sectionId, stageCards).map((card, i) => { 
                    return <div className="toc-card-container" key={i}><ToCCard {...card} /></div>
                  })
                }
              </div>
            </MediaQuery>
          </div>
        );
      })
    );
  }

  render() {
    return (
      <Col lg>
        <div className="toc-stage-container"> 
          {this.renderHeader()}
          {this.renderCardsBySection()}
        </div>
      </Col>
    )
  }
}

ToCStage.defaultProps = {
  stageCards: []
};

export default ToCStage;