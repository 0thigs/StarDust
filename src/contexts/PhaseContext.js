import { createContext, useReducer } from 'react';
import { questions } from '../utils/questions';

export const PhaseContext = createContext();

const stages = ['theory', 'quiz', 'end'];

const initialState = {
  currentStage: stages[1],
  questions,
  currentQuestion: 0,
  wrongs: 0,
};

const PhaseReducer = (state, action) => {
  switch (action.type) {
    case 'changeState':
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
      let isEndQuiz = false;
      if (!questions[nextQuestion]) {
        isEndQuiz = true;
      }
      return {
        ...state,
        currentQuestion: nextQuestion,
        currentStage: isEndQuiz ? stages[2] : state.currentStage,
      };
    default:
      return state;
  }
};

export const PhaseProvider = ({ children }) => {
  const value = useReducer(PhaseReducer, initialState);

  return <PhaseContext.Provider value={value}>{children}</PhaseContext.Provider>;
};
