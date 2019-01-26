import React, { Component } from 'react';
import ToCCard from './toc-card';
import { Col } from 'react-flexbox-grid';
import '../styles/toc-stage.css'

class ToCStage extends Component {
  getHeader(props) {
    const {stageDesc, stageTitle, noHeader} = props;
    return noHeader ?
      <div/>:
      <h2 className="toc-stage-title" title={stageDesc}>{stageTitle}</h2>
  }
  render() {
    const {stageCards} = this.props;

    return (
      <Col lg={2}>
        <div className="toc-stage-container"> 
          {this.getHeader(this.props)}
          <ul>
            {
              stageCards.map((card, i) => { 
                return <li className="toc-card-container" key={i}><ToCCard {...card} /></li>
              })
            }
          </ul>
        </div>
      </Col>
    );
  }
}

ToCStage.defaultProps = {
  stageCards: []
};

export default ToCStage;