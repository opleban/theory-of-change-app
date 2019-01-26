import STAGES from './stages.js';
const  { PROBLEM, INPUT, OUTPUT, 
         INTERMEDIATE_OUTCOME, FINAL_OUTCOME } = STAGES;

export default {
  title: 'Participatory Budget',
  style: 'default',
  cards: [
    {
      cardStage: PROBLEM.SINGULAR,
      cardText: 'Policy in San Fermin does not reflect local knowledge (municipal officials lack knowledge of citizens needs and preferences)'
    },
    {
      cardStage: INPUT.SINGULAR,
      cardText: 'Grupo Motor identifes key stakeholders with local knowledge.'
    },
    {
      cardStage: INPUT.SINGULAR,
      cardText: 'Grupo Motor develops questionnaire for needs assesment and ran survey'
    },
    {
      cardStage: INPUT.SINGULAR,
      cardHTML: '<p>Citizens provide ideas in co-creation workshops with:</p><ul><li>Children</li><li>Youth</li><li>Organized and not organized neighbors</li></ul>',
      cardText: 'Citizens provide ideas in co-creation workshops'
    }
  ],
  stages: [
    {
      order: 1,
      stageTitle: PROBLEM.SINGULAR,
      stageDesc: PROBLEM.DESCRIPTION,
    },
    {
      order: 2,
      stageTitle: INPUT.SINGULAR,
      stageDesc: INPUT.DESCRIPTION
    },
    {
      order: 3,
      stageTitle: OUTPUT.SINGULAR,
      stageDesc: OUTPUT.DESCRIPTION

    },
    {
      order: 4,
      stageTitle: INTERMEDIATE_OUTCOME.SINGULAR,
      stageDesc: INTERMEDIATE_OUTCOME.DESCRIPTION
    },
    { order: 5,
      stageTitle: FINAL_OUTCOME.SINGULAR,
      stageDesc: FINAL_OUTCOME.DESCRIPTION
    }
  ]
};