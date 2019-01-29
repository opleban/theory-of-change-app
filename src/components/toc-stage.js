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

  getSectionProperty(sectionId, configName, props=this.props) {
    return props.sectionConfigs[sectionId][configName];
  }

  // There must be a better way than this. Makes you miss Ruby

  generateLoopArray(num) {
    const ary = [];
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
        const sectionHeight = this.getSectionProperty(sectionId, 'height');
        const sectionColor = this.getSectionProperty(sectionId, 'color');

        const sectionStyle = {
          minHeight: `${sectionHeight}px`
        };

        return (
          <div key={i}>
            <MediaQuery maxWidth={991}>
              <div className="toc-stage-section">
                {
                  this.getCardsBySection(sectionId, stageCards).map((card, i) => { 
                    return  <ToCCard cardColor={sectionColor} key={`${i}_mobile`} {...card} />
                  })
                }
              </div>
            </MediaQuery>
            <MediaQuery minWidth={992}>
              <div className="toc-stage-section" style={sectionStyle}>
                {
                  this.getCardsBySection(sectionId, stageCards).map((card, i) => { 
                    return <ToCCard key={`${i}_normal`} cardColor={sectionColor} {...card} />
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