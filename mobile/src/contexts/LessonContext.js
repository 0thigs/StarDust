import { createContext, useReducer } from 'react';

export const LessonContext = createContext();

const stages = ['theory', 'quiz', 'end'];

const _questions = [
//   {
//     starId: 2,
//     type: 'selection',
//     stem: 'Como fazer que um programa escreva "que horas são?"',
//     options: [
//       'escreva(que horas são)',
//       'imprima("que horas são")',
//       'escreva("que horas são")',
//       'escreva("14:52am")',
//     ],
//     answer: 'escreva("que horas são")',
//   },
//   {
//     starId: 3,
//     type: 'checkbox',
//     stem: 'quais dos itens abaixo pode ser um nome válido de variável?',
//     options: ['_idade', '4mor', 'altura_em_cm', 'peso em kg'],
//     correctOptions: ['_idade', 'altura_em_cm'],
//   },
//   {
//     starId: 2,
//     type: 'open',
//     stem: 'O nome do comando para um programa receber informações é',
//     answer: 'leia',
//   },
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
//     starId: 2,
//     type: 'drag-and-drop-click',
//     stem: 'Clique nos elementos abaixo para completar o programa',
//     lines: [
//       {
//         id: 1,
//         texts: ['var nomeDoFoguete = ', 'dropZone'],
//         indentLevel: 0,
//       },
//       {
//         id: 2,
//         texts: ['dropZone', '(nomeDoFoguete)'],
//         indentLevel: 0,
//       },
//     ],
//     dropItems: [
//       {
//         id: 1,
//         label: 'receba',
//       },
//       {
//         id: 2,
//         label: 'escreva',
//       },
//       {
//         id: 3,
//         label: 'leia( )',
//       },
//       {
//         id: 4,
//         label: 'leia',
//       },
//     ],
//     correctItemsIdsSequence: [3, 2],
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
