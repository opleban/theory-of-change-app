import React, { Component } from 'react';
import ToCStage from './toc-stage';

class ToCBoard extends Component {
  groupCardsByStage(props) {
    const {stage, cards} = props;
    
  }
  render() {
    const { title, stages, cards } = this.props;

    return (
      <div className="toc-board-container">
        <h1 className="toc-board-title">{title}</h1>
        <div className="toc-stages"> 
        {
          stages.map((stage, i) => {
            return (<ToCStage key={i} {...stage} />)
          })
        }
        </div>
      </div>
    );
  }
}

export default ToCBoard;
