import { createContext, useReducer } from 'react';
import { questions } from '../utils/questions';

export const LessonContext = createContext();

const stages = ['theory', 'quiz', 'end'];

const initialState = {
  currentStage: stages[1],
  questions,
  currentQuestion: 1,
  wrongsCount: 0,
};

const LessonReducer = (state, action) => {
  switch (action.type) {
    case 'changeStage':
      return {
        ...state,
        currentStage: stages[1],
      };
    case 'reorderQuestions':
      const reorderedQuestions = questions.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        questions: reorderedQuestions,
      };
    case 'changeQuestion':
      const nextQuestion = state.currentQuestion + 1;
      let isEnd = false;
      if (!questions[nextQuestion]) {
        isEnd = true;
      }
      return {
        ...state,
        currentQuestion: nextQuestion,
        currentStage: isEnd ? stages[2] : state.currentStage,
      };
    case 'setWrongsCount':
      return {
        ...state,
        wrongsCount: state.wrongsCount + 1,
      };
    default:
      return state;
  }
};

export const LessonProvider = ({ children }) => {
  const value = useReducer(LessonReducer, initialState);

  return <LessonContext.Provider value={value}>{children}</LessonContext.Provider>;
};
