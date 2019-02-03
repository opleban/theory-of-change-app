import STAGES from './stages.js';
import Papa from 'papaparse';

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

export function loadBoardData(file, config, callbackFn) {
  if (!file) { console.log("WHERE'S THE FILE"); }
  return Papa.parse(file, { 
    download: true, 
    header:true,
    dynamicTyping: true,
    error: (err) => {
      console.log('THERE WAS AN ERROR');
    },
    complete: (res, file) => {
      const data = _convertBoardDataToBoardObject(res.data, config);
      return callbackFn(data);
    }
  });
}

function _convertBoardDataToBoardObject(data, config) {
  config.cards = 
    data.map((card) => {
      console.log(card);
      return {
        cardStage: card['Card Stage'],
        cardText: {
          en: card['Card Text EN'] || '',
          es: card['Card Text ES'] || ''
        },
        cardHTML: {
          en: card['Card HTML EN'] || '',
          es: card['Card HTML ES'] || ''
        },
        section: card['Section']
      }
    });
  return config;
}


export function getBoardLocale(pbBoard, locale='en') {
  const { sectionConfigs, title, cards, stages, numOfSections } = pbBoard;
  return {
    numOfSections,
    sectionConfigs,
    title: title[locale],
    cards: cards.map((card) => {
      const {cardStage, cardText, cardHTML, section } = card;
      console.log(card);
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

const stages = [
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
        en: INPUT.PLURAL.en,
        es: INPUT.PLURAL.es
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
        en: OUTPUT.PLURAL.en,
        es: OUTPUT.PLURAL.es
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
        en: INTERMEDIATE_OUTCOME.PLURAL.en,
        es: INTERMEDIATE_OUTCOME.PLURAL.es,
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

export const sanFerminConfig = {
  title: {
    en: 'San Fermin Library - Co-Creation',
    es: 'Biblioteca de San Fermin - Co-Creación'
  },
  numOfSections: 4,
  style: 'default',
  sectionConfigs: {
    1: {
      height: 180,
      color: 'rgba(38, 86, 208, 1)'
    },
    2: {
      height: 125,
      color: 'rgba(238, 132, 52, 1)'
    },
    3: {
      height: 295,
      color: 'rgba(201, 93, 99, 1)'
    },
    4: {
      height: 150,
      color: 'rgba(113, 126, 195, 1)'
    }
  },

  stages
};

export const pbConfig = {
  title: {
    en: 'Participatory Budgeting',
    es: 'Presupuestos Participativos'
  },
  numOfSections: 2,
  style: 'default',
  sectionConfigs: {
    1: {
      height: 475,
      color: 'rgba(38, 86, 208, 1)'
    },
    2: {
      height: 325,
      color: 'rgba(201, 93, 99, 1)'
    }
  },
  
  stages
};
// export default {
//   title: {
//     en: 'San Fermin Library - Co-Creation',
//     es: 'Biblioteca de San Fermin - Co-Creación'
//   },
//   numOfSections: 4,
//   style: 'default',
//   sectionConfigs: {
//     1: {
//       height: 180,
//       color: 'rgba(38, 86, 208, 1)'
//     },
//     2: {
//       height: 125,
//       color: 'rgba(238, 132, 52, 1)'
//     },
//     3: {
//       height: 295,
//       color: 'rgba(201, 93, 99, 1)'
//     },
//     4: {
//       height: 150,
//       color: 'rgba(113, 126, 195, 1)'
//     }
//   },
//   cards: [
//     {
//       cardStage: PROBLEM.id,
//       cardText: {
//         en: 'Policy in San Fermin does not reflect local knowledge (municipal officials lack knowledge of citizens needs and preferences)',
//         es: 'Política local no incorpora el conocimiento local de los vecinos sobre sus necesidades y preferencias  (conocimiento que reside en la ciudadanía no es la administración)'
//       },
//       section: 1
//     },
//      {
//       cardStage: INPUT.id,
//       cardText: {
//         en: 'Constitute the Steering Committee',
//         es: 'Constitución del Grupo Motor'
//       },
//       section: 1
//     },
//     {
//       cardStage: INPUT.id,
//       cardText: {
//         en: 'Steering Committee identifes key stakeholders with local knowledge.',
//         es: 'Grupo Motor identifica actores relevantes con conocimiento local'
//       },
//       section: 1
//     },
//     {
//       cardStage: INPUT.id,
//       cardText: {
//         en: 'Steering Committee develops questionnaire for needs assesment and ran survey',
//         es: 'Grupo Motor desarrolla cuestionario de diagnóstico de necesidades'
//       },
//       section: 2
//     },
//     {
//       cardStage: INPUT.id,
//       cardHTML: {
//         en: '<ul>Citizens provide ideas in co-creation workshops with:<li>Children</li><li>Youth</li><li>Organized and not organized neighbors</li></ul>',
//         es: '<ul>Vecinos proveen sus ideas en talleres de co-creación con:<li>Niños</li><li>Jóvenes</li><li>Vecinos organizados y no organizados</li></ul>'
//       },
//       cardText: {
//         en: 'Citizens provide ideas in co-creation workshops',
//         es: 'Citizens provide ideas in co-creation workshops Castellano'
//       },
//       section: 3
//     },
//     {
//       cardStage: INPUT.id,
//       cardText: {
//         en: 'Dinamizadores facilitate the process',
//         es: 'Dinamizadores moderan el proceso'
//       },
//       section: 3
//     },
//     {
//       cardStage: INPUT.id,
//       cardText: {
//         en: 'Technical profile staff/participants translate ideas into design',
//         es: 'Personal técnico traduce ideas a diseño'
//       },
//       section: 3
//     },
//     {
//       cardStage: INPUT.id,
//       cardText: {
//         en: 'Conduct outreach and provide information on the process',
//         es: 'Administración y Grupo Motor difunden y proveen información sobre el proceso'
//       },
//       section: 4
//     },
//     {
//       cardStage: OUTPUT.id,
//       cardText: {
//         en: 'Steering Committee is constituted',
//         es: 'Grupo Motor constituido'
//       },
//       section: 1
//     },
//     {
//       cardStage: OUTPUT.id,
//       cardText: {
//         en: 'Map of relevant stakeholders',
//         es: 'Mapeo de actores'
//       },
//       section: 1
//     },
//     {
//       cardStage: OUTPUT.id,
//       cardText: {
//         en: 'Needs assesment developed',
//         es: 'Diagnóstico complete'
//       },
//       section: 2
//     },
//     {
//       cardStage: OUTPUT.id,
//       cardText: {
//         en: 'Workshops & co-creation activties conducted',
//         es: 'Talleres y actividades de co-creación implentadas'
//       },
//       section: 3
//     },
//     {
//       cardStage: OUTPUT.id,
//       cardText: {
//         en: 'Citizens’ ideas collected',
//         es: 'Ideas de los vecinos recogidas'
//       },
//       section: 3
//     },
//     {
//       cardStage: OUTPUT.id,
//       cardText: {
//         en: 'Ideas systematized and translated into a design',
//         es: 'Ideas sistematizadas y traducidas a diseño técnico'
//       },
//       section: 3
//     },
//     {
//       cardStage: OUTPUT.id,
//       cardText: {
//         en: 'Information disseminated',
//         es: 'Información difundida'
//       },
//       section: 4
//     },
//     {
//       cardStage: INTERMEDIATE_OUTCOME.id,
//       cardText: {
//         en: 'Continued Committment',
//         es: 'Compromiso continuado'
//       },
//       section: 1
//     },
//     {
//       cardStage: INTERMEDIATE_OUTCOME.id,
//       cardText: {
//         en: 'Steering Committee knows the reality of the neighborhood',
//         es: 'Grupo Motor conoce realidad del barrio'
//       },
//       section: 1
//     },
//     {
//       cardStage: INTERMEDIATE_OUTCOME.id,
//       cardText: {
//         en: 'Stakeholders map represents neighborhood',
//         es: 'Mapeo de actores es representativo del vecindario'
//       },
//       section: 1
//     },
//     {
//       cardStage: INTERMEDIATE_OUTCOME.id,
//       cardText: {
//         en: 'Citizens partcipate in needs assesment',
//         es: 'Vecinos participan del diagnóstico'
//       },
//       section: 2
//     },
//     {
//       cardStage: INTERMEDIATE_OUTCOME.id,
//       cardText: {
//         en: 'Needs assessment accurately captures needs',
//         es: 'Diagnóstico recoge con fidelidad las necesidades'
//       },
//       section: 2
//     },
//     {
//       cardStage: INTERMEDIATE_OUTCOME.id,
//       cardText: {
//         en: 'Workshop participants are representative of target population',
//         es: 'Participantes en los talleres son representativos de los vecinos'
//       },
//       section: 3
//     },
//     {
//       cardStage: INTERMEDIATE_OUTCOME.id,
//       cardText: {
//         en: 'Quality of facilitation',
//         es: 'Calidad de la moderación'
//       },
//       section: 3
//     },
//     {
//       cardStage: INTERMEDIATE_OUTCOME.id,
//       cardText: {
//         en: 'Originality of solutions',
//         es: 'Originalidad de las soluciones'
//       },
//       section: 3
//     },
//     {
//       cardStage: INTERMEDIATE_OUTCOME.id,
//       cardText: {
//         en: 'Feasibility of solutions',
//         es: 'Factibilidad de las soluciones'
//       },
//       section: 3
//     },
//     {
//       cardStage: INTERMEDIATE_OUTCOME.id,
//       cardText: {
//         en: 'End-user value of solutions',
//         es: 'Valor para el usuario de las soluciones'
//       },
//       section: 3
//     },
//     {
//       cardStage: INTERMEDIATE_OUTCOME.id,
//       cardText: {
//         en: 'Neighbors are informed about the process',
//         es: 'Vecinos informados sobre el proceso'
//       },
//       section: 4
//     },
//     {
//       cardStage: INTERMEDIATE_OUTCOME.id,
//       cardText: {
//         en: 'Influence and credibility',
//         es: 'Influencia y credibilidad'
//       },
//       section: 4
//     },
//     {
//       cardStage: FINAL_OUTCOME.id,
//       cardText: {
//         en: 'Policy reflects local knowledge, needs, and preferences',
//         es: 'Política local incorpora el conocimiento local de los vecinos sobre sus necesidades y preferencias  (conocimiento que reside en la ciudadanía no es la administración)'
//       },
//       section: 1
//     }
//   ],
  // stages: [
  //   {
  //     order: 1,
  //     id: PROBLEM.id,
  //     stageTitle: {
  //       en: PROBLEM.SINGULAR.en,
  //       es: PROBLEM.SINGULAR.es
  //     },
  //     stageDesc: {
  //       en: PROBLEM.DESCRIPTION.en,
  //       es: PROBLEM.DESCRIPTION.es
  //     }
  //   },
  //   {
  //     order: 2,
  //     id: INPUT.id,
  //     stageTitle: {
  //       en: INPUT.PLURAL.en,
  //       es: INPUT.PLURAL.es
  //     },
  //     stageDesc: {
  //       en: INPUT.DESCRIPTION.en,
  //       es: INPUT.DESCRIPTION.es
  //     }
  //   },
  //   {
  //     order: 3,
  //     id: OUTPUT.id,
  //     stageTitle: {
  //       en: OUTPUT.PLURAL.en,
  //       es: OUTPUT.PLURAL.es
  //     },
  //     stageDesc: {
  //       en: OUTPUT.DESCRIPTION.en,
  //       es: OUTPUT.DESCRIPTION.es
  //     }
  //   },
  //   {
  //     order: 4,
  //     id: INTERMEDIATE_OUTCOME.id,
  //     stageTitle: {
  //       en: INTERMEDIATE_OUTCOME.PLURAL.en,
  //       es: INTERMEDIATE_OUTCOME.PLURAL.es,
  //     },
  //     stageDesc: {
  //       en: INTERMEDIATE_OUTCOME.DESCRIPTION.en,
  //       es: INTERMEDIATE_OUTCOME.DESCRIPTION.es
  //     }
  //   },
  //   { order: 5,
  //     id: FINAL_OUTCOME.id,
  //     stageTitle: {
  //       en: FINAL_OUTCOME.SINGULAR.en,
  //       es: FINAL_OUTCOME.SINGULAR.es
  //     },
  //     stageDesc: {
  //       en: FINAL_OUTCOME.DESCRIPTION.en,
  //       es: FINAL_OUTCOME.DESCRIPTION.es
  //     }
  //   }
//   ]
// };