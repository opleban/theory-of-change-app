import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const stages = {
      title: 'Participatory Budget',
      style: 'default',
      stages: [
        {
          order: 1,
          stageTitle: 'Problems',
          hoverText: 'I have 99 problems...',
        },
        {
          order: 2,
          stageTitle: 'Inputs-Activities',
          hoverText: 'Insert coin here.'
        },
        {
          order: 3,
          stageTitle: 'Output',
          hoverText: 'Point this way forward.'

        },
        {
          order: 4,
          stageTitle: 'Intermediate Outcome',
          hoverText: 'Short-term gain'
        },
        { order: 5,
          stageTitle: 'Final Outcome',
          hoverText: 'Profit'
        }
      ]
    }
    return (
      <div className="App">
        <div className="stages"> 
        {
          stages.stages.map((stage) => {
            return (
              <div className="stage"> 
                <h2 className="stage-title" title={stage.stageText}>{stage.stageTitle}</h2>
              </div>
            );
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
