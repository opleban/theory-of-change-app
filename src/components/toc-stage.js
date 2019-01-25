import React, { Component } from 'react';

class ToCStage extends Component {
  render() {
    const {stageDesc, stageTitle} = this.props;

    return (
      <div className="toc-stage"> 
        <h2 className="toc-stage-title" title={stageDesc}>{stageTitle}</h2>
      </div>
    );
  }
}

export default ToCStage;