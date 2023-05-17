import { createContext, useReducer } from 'react';

export const LessonContext = createContext();

const stages = ['theory', 'quiz', 'end'];

const _questions = [
    // {
    //   starId: 2,
    //   type: 'selection',
    //   stem: 'Como fazer que um programa escreva "que horas são?"',
    //   code: `
    //   se (condicao) {
    //     escreva('correspondente 1');
    //     escreva('correspondente 1');
    // } senao {
    //     escreva('correspondente 2');
    // }   
    //   `,
    //   options: [
    //     'escreva(que horas são)',
    //     'imprima("que horas são")',
    //     'escreva("que horas são")',
    //     'escreva("14:52am")',
    //   ],
    //   answer: 'escreva("que horas são")',
    // },
    // {
    //   starId: 3,
    //   type: 'checkbox',
    //   code: `se (condicao) {
    //     escreva('correspondente 1');
    // } senao {
    //     se (condicao) {
    //         escreva('correspondente 1');
    //     } senao {
    //         escreva('correspondente 2');
    //         escreva('correspondente 2');
    //         escreva('correspondente 2');
    //     }   escreva('correspondente 2');
    // }`,
    //   stem: 'quais dos itens abaixo pode ser um nome válido de variável?',
    //   options: ['_idade', '4mor', 'altura_em_cm', 'peso em kg'],
    //   correctOptions: ['_idade', 'altura_em_cm'],
    // },
    {
      starId: 2,
      type: 'open',
      code: `se (condicao) {
        escreva('correspondente 1');
    } senao {
        escreva('correspondente 2');
    }`,
      stem: 'O nome do comando para um programa receber informações é',
      answer: 'leia',
    },
  //   {
  //     starId: 11,
  //     type: 'drag-and-drop-list',
  //     stem: 'Reordene o programa para que ele fique na ordem correta',
  //     items: [
  //       {
  //         id: 1,
  //         label: 'var planeta = verdadeiro',
  //       },
  //       {
  //         id: 2,
  //         label: 'se (planeta) {',
  //       },
  //       {
  //         id: 3,
  //         label: '    escreva("De fato se trata de um planeta")',
  //       },
  //       {
  //         id: 4,
  //         label: '}',
  //       },
  //     ],
  //   },
//   {
//     stem: 'Complete o código para que ele esteja correto',
//     type: 'drag-and-drop-click',
//     lines: [
//       {
//         id: 1,
//         texts: ['se (meteoros > 10) {'],
//         indentLevel: 0,
//       },
//       {
//         id: 2,
//         texts: ['dropZone', '(escudoAtivo) {'],
//         indentLevel: 1,
//       },
//       {
//         id: 3,
//         texts: ['escreva("Seguro")'],
//         indentLevel: 2,
//       },
//       {
//         id: 4,
//         texts: ['}', 'dropZone', '(resistencia > 10) {'],
//         indentLevel: 1,
//       },
//       {
//         id: 5,
//         texts: ['escreva("Mais ou menos seguro") {'],
//         indentLevel: 2,
//       },
//       {
//         id: 6,
//         texts: ['} senao {'],
//         indentLevel: 1,
//       },
//       {
//         id: 7,
//         texts: ['escreva("Não seguro")'],
//         indentLevel: 2,
//       },
//       {
//         id: 8,
//         texts: ['}', 'dropZone', ' {'],
//         indentLevel: 0,
//       },
//       {
//         id: 9,
//         texts: ['escreva("Totalmente seguro")'],
//         indentLevel: 1,
//       },
//       {
//         id: 10,
//         texts: ['}'],
//         indentLevel: 0,
//       },
//     ],
//     starId: 13,
//     dropItems: [
//       {
//         id: 1,
//         label: 'se',
//       },
//       {
//         id: 2,
//         label: 'senao',
//       },
//       {
//         id: 3,
//         label: 'senao se',
//       },
//       {
//         id: 4,
//         label: 'seguro',
//       },
//     ],
//     correctItemsIdsSequence: [1, 3, 2],
//   },
];

const initialState = {
  currentStage: stages[1],
  questions: [],
  currentQuestion: 0,
  wrongsCount: 0,
  livesCount: 5,
  secondsCount: 0,
  verifyAnswer: () => {},
  isAnswerWrong: false,
  isAnswerVerified: false,
  isAnswered: false,
};

const LessonReducer = (state, action) => {
  switch (action.type) {
    case 'showQuiz':
      return {
        ...state,
        currentStage: stages[1],
      };
    case 'changeQuestion':
      const nextQuestion = state.currentQuestion + 1;
      let isEnd = false;
      if (!state.questions[nextQuestion]) {
        isEnd = true;
      }
      return {
        ...state,
        currentQuestion: nextQuestion,
        currentStage: isEnd ? stages[2] : state.currentStage,
        isAnswered: false,
      };
    case 'setQuestions':
      const questions = action.payload;
      const reorderedQuestions = questions.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        questions: reorderedQuestions,
      };
    case 'incrementWrongsCount':
      return {
        ...state,
        wrongsCount: state.wrongsCount + 1,
      };
    case 'decrementLivesCount':
      return {
        ...state,
        livesCount: state.livesCount === 0 ? state.livesCount : state.livesCount - 1,
      };
    case 'incrementSecondsCount':
      return {
        ...state,
        secondsCount: state.secondsCount + 1,
      };
    case 'setTime':
      return {
        ...state,
        time: action.payload,
      };
    case 'setState':
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };
    case 'resetState':
      return initialState;
    default:
      return state;
  }
};

export const LessonProvider = ({ children }) => {
  const value = useReducer(LessonReducer, initialState);

  return <LessonContext.Provider value={value}>{children}</LessonContext.Provider>;
};
