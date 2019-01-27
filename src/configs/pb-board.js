import STAGES from './stages.js';
const  { PROBLEM, INPUT, OUTPUT, 
         INTERMEDIATE_OUTCOME, FINAL_OUTCOME } = STAGES;


/**
UGH I HATE THIS, BUT SUCH IS LIFE, I'M NOT CLEVER ENOUGH 
YET TO FIGURE OUT HOW TO HANDLE THIS BETTER. THIS IS SUPER 
TIGHTLY COUPLED THE STRUCTURE OF BOARD CONFIGURATION. 
NEEDS TO RETURN THIS:
{
  title: 'A TITLE'
  cards: [{
    cardStage: STRING,
    cartText: STRING
  },...],
  stages: [{
    order: INT,
    stageTitle: STRING"
  },...]
}
**/
export function getPBBoardLocale(pbBoard, locale='en') {
  const { sectionConfigs, title, cards, stages, numOfSections } = pbBoard;
  return {
    numOfSections,
    sectionConfigs,
    title: title[locale],
    cards: cards.map((card) => {
      const {cardStage, cardText, cardHTML, section } = card;
      return { cardStage,
               cardText: cardText[locale],
               cardHTML: (cardHTML||{})[locale],
               section };
    }),
    stages: stages.map((stage) => {
      const { order, id, stageTitle, stageDesc } = stage;
      return {
        order,
        id,
        stageTitle: stageTitle[locale],
        stageDesc: stageDesc[locale]
      }
    })

  }
}

export default {
  title: {
    en: 'San Fermin Library - Co-Creation',
    es: 'Biblioteca de San Fermin - Co-Creación'
  },
  numOfSections: 4,
  style: 'default',
  sectionConfigs: {
    1: {
      height: 100,
    },
    2: {
      height: 200,
    },
    3: {
      height: 400,
    },
    4: {
      height: 200
    }
  },
  cards: [
    {
      cardStage: PROBLEM.id,
      cardText: {
        en: 'Policy in San Fermin does not reflect local knowledge (municipal officials lack knowledge of citizens needs and preferences)',
        es: 'Policy in San Fermin does not reflect local knowledge (municipal officials lack knowledge of citizens needs and preferences) Castellano'
      },
      section: 1
    },
    {
      cardStage: INPUT.id,
      cardText: {
        en: 'Grupo Motor identifes key stakeholders with local knowledge.',
        es: 'Grupo Motor identifes key stakeholders with local knowledge. Castellano'
      },
      section: 1
    },
    {
      cardStage: INPUT.id,
      cardText: {
        en: 'Grupo Motor develops questionnaire for needs assesment and ran survey',
        es: 'Grupo Motor develops questionnaire for needs assesment and ran survey. Castellano'
      },
      section: 2
    },
    {
      cardStage: INPUT.id,
      cardHTML: {
        en: '<ul>Citizens provide ideas in co-creation workshops with:<li>Children</li><li>Youth</li><li>Organized and not organized neighbors</li></ul>',
        es: '<ul>Citizens provide ideas in co-creation workshops with Castellano:<li>Children</li><li>Youth</li><li>Organized and not organized neighbors</li></ul>'
      },
      cardText: {
        en: 'Citizens provide ideas in co-creation workshops',
        es: 'Citizens provide ideas in co-creation workshops Castellano'
      },
      section: 3
    },
    {
      cardStage: INPUT.id,
      cardText: {
        en: 'Dinamizadores facilitate the process',
        es: 'Dinamizadores facilitate the process ES'
      },
      section: 3
    },
    {
      cardStage: INPUT.id,
      cardText: {
        en: 'Technical profile staff/participants translate ideas into design',
        es: 'Technical profile staff/participants translate ideas into design ES'
      },
      section: 3
    },
    {
      cardStage: INPUT.id,
      cardText: {
        en: 'Conduct outreach and provide information on the process',
        es: 'Conduct outreach and provide information on the process ES'
      },
      section: 4
    },
    {
      cardStage: OUTPUT.id,
      cardText: {
        en: 'Map of relevant stakeholders',
        es: 'Carta de stakeholders'
      },
      section: 1
    },
    {
      cardStage: OUTPUT.id,
      cardText: {
        en: 'Needs assesment developed',
        es: 'Needs assesment developed ES'
      },
      section: 2
    },
    {
      cardStage: OUTPUT.id,
      cardText: {
        en: 'Workshops & co-creation activties conducted',
        es: 'Workshops & co-creation activties conducted ES'
      },
      section: 3
    },
    {
      cardStage: OUTPUT.id,
      cardText: {
        en: 'Citizens’ ideas collected',
        es: 'Citizens’ ideas collected ES'
      },
      section: 3
    },
    {
      cardStage: OUTPUT.id,
      cardText: {
        en: 'Ideas systematized and translated into a design',
        es: 'Ideas systematized and translated into a design ES'
      },
      section: 3
    },
    {
      cardStage: OUTPUT.id,
      cardText: {
        en: 'Information disseminated',
        es: 'Information disseminated ES'
      },
      section: 4
    },
    {
      cardStage: INTERMEDIATE_OUTCOME.id,
      cardText: {
        en: 'Stakeholders map represents neighborhood',
        es: 'Stakeholders map represents neighborhood ES'
      },
      section: 1
    },
    {
      cardStage: INTERMEDIATE_OUTCOME.id,
      cardText: {
        en: 'Citizens partcipate in needs assesment',
        es: 'Citizens partcipate in needs assesment ES'
      },
      section: 2
    },
    {
      cardStage: INTERMEDIATE_OUTCOME.id,
      cardText: {
        en: 'Needs assessment accurately captures needs',
        es: 'Needs assessment accurately captures needs ES'
      },
      section: 2
    },
    {
      cardStage: INTERMEDIATE_OUTCOME.id,
      cardText: {
        en: 'Workshop participants are representative of target population',
        es: 'Workshop participants are representative of target population ES'
      },
      section: 3
    },
    {
      cardStage: INTERMEDIATE_OUTCOME.id,
      cardText: {
        en: 'Sustained engagement',
        es: 'Sustained engagement ES'
      },
      section: 3
    },
    {
      cardStage: INTERMEDIATE_OUTCOME.id,
      cardText: {
        en: 'Quality of facilitation',
        es: 'Quality of facilitation ES'
      },
      section: 3
    },
    {
      cardStage: INTERMEDIATE_OUTCOME.id,
      cardText: {
        en: 'Originality of solutions',
        es: 'Originality of solutions ES'
      },
      section: 3
    },
    {
      cardStage: INTERMEDIATE_OUTCOME.id,
      cardText: {
        en: 'Feasibility of solutions',
        es: 'Feasibility of solutions ES'
      },
      section: 3
    },
    {
      cardStage: INTERMEDIATE_OUTCOME.id,
      cardText: {
        en: 'End-user value of solutions',
        es: 'End-user value of solutions ES'
      },
      section: 3
    },
    {
      cardStage: INTERMEDIATE_OUTCOME.id,
      cardText: {
        en: 'Influence and credibility',
        es: 'Influence and credibility ES'
      },
      section: 4
    },
    {
      cardStage: INTERMEDIATE_OUTCOME.id,
      cardText: {
        en: 'Transparency',
        es: 'Transparency ES'
      },
      section: 4
    },
    {
      cardStage: FINAL_OUTCOME.id,
      cardText: {
        en: 'Policy reflects local knowledge, needs, and preferences',
        es: 'Policy reflects local knowledge, needs, and preferences ES'
      },
      section: 1
    }
  ],
  stages: [
    {
      order: 1,
      id: PROBLEM.id,
      stageTitle: {
        en: PROBLEM.SINGULAR.en,
        es: PROBLEM.SINGULAR.es
      },
      stageDesc: {
        en: PROBLEM.DESCRIPTION.en,
        es: PROBLEM.DESCRIPTION.es
      }
    },
    {
      order: 2,
      id: INPUT.id,
      stageTitle: {
        en: INPUT.SINGULAR.en,
        es: INPUT.SINGULAR.es
      },
      stageDesc: {
        en: INPUT.DESCRIPTION.en,
        es: INPUT.DESCRIPTION.es
      }
    },
    {
      order: 3,
      id: OUTPUT.id,
      stageTitle: {
        en: OUTPUT.SINGULAR.en,
        es: OUTPUT.SINGULAR.es
      },
      stageDesc: {
        en: OUTPUT.DESCRIPTION.en,
        es: OUTPUT.DESCRIPTION.es
      }
    },
    {
      order: 4,
      id: INTERMEDIATE_OUTCOME.id,
      stageTitle: {
        en: INTERMEDIATE_OUTCOME.SINGULAR.en,
        es: INTERMEDIATE_OUTCOME.SINGULAR.es,
      },
      stageDesc: {
        en: INTERMEDIATE_OUTCOME.DESCRIPTION.en,
        es: INTERMEDIATE_OUTCOME.DESCRIPTION.es
      }
    },
    { order: 5,
      id: FINAL_OUTCOME.id,
      stageTitle: {
        en: FINAL_OUTCOME.SINGULAR.en,
        es: FINAL_OUTCOME.SINGULAR.es
      },
      stageDesc: {
        en: FINAL_OUTCOME.DESCRIPTION.en,
        es: FINAL_OUTCOME.DESCRIPTION.es
      }
    }
  ]
};