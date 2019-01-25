import React, { Component } from 'react';
import ToCBoard from './components/toc-board';
import './styles/styles.css';

class App extends Component {
  render() {
    const board = {
      title: 'Participatory Budget',
      style: 'default',
      stages: [
        {
          order: 1,
          stageTitle: 'Problems',
          stageDesc: 'I have 99 problems...',
        },
        {
          order: 2,
          stageTitle: 'Inputs-Activities',
          stageDesc: 'Insert coin here.'
        },
        {
          order: 3,
          stageTitle: 'Output',
          stageDesc: 'Point this way forward.'

        },
        {
          order: 4,
          stageTitle: 'Intermediate Outcome',
          stageDesc: 'Short-term gain'
        },
        { order: 5,
          stageTitle: 'Final Outcome',
          stageDesc: 'Profit'
        }
      ],
      cards: [
        {
          cardStage: 'Problem',
          cardText: 'Policy in San Fermin does not reflect local knowledge (municipal officials lack knowledge of citizens needs and preferences)'
        },
        {
          cardStage: 'Inputs-Activities',
          cardText: 'Grupo Motor identifes key stakeholders with local knowledge.'
        },
        {
          cardStage: 'Inputs-Activities',
          cardText: 'Grupo Motor develops questionnaire for needs assesment and ran survey'
        },
        {
          cardstage: 'Inputs-Activities',
          cardHtml: '<p>Citizens provide ideas in co-creation workshops with:</p><ul><li>Children</li><li>Youth</li><li>Organized and not organized neighbors</li></ul>',
          cardText: 'Citizens provide ideas in co-creation workshops'
        }
      ]
    };
    return (
      <div className="App">
        <ToCBoard {...board} />
      </div>
    );
  }
}

export default App;
