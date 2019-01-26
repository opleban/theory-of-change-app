import React, { Component } from 'react';
import ToCCard from './toc-card';
import '../styles/toc-stage.css'

class ToCStage extends Component {
  render() {
    const {stageDesc, stageTitle, stageCards} = this.props;
    console.log(this.props);

    return (
      <div className="toc-stage"> 
        <h2 className="toc-stage-title" title={stageDesc}>{stageTitle}</h2>
        <ul>
          {
            stageCards.map((card, i) => { 
              return <li className="toc-card-container" key={i}><ToCCard {...card} /></li>
            })
          }
        </ul>
      </div>
    );
  }
}

ToCStage.defaultProps = {
  stageCards: []
};

export default ToCStage;