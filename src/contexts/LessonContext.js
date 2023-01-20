import { createContext, useReducer } from 'react';
import { useAuth } from '../hooks/useAuth';
import { questions } from '../utils/questions';

export const LessonContext = createContext();

const stages = ['theory', 'quiz', 'end'];

const initialState = {
  currentStage: stages[0],
  questions: [],
  currentQuestion: 0,
  wrongsCount: 0,
  livesCount: 0,
  secondsCount: 0,
  time: '',
};

const LessonReducer = (state, action) => {
  switch (action.type) {
    case 'changeStage':
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
      };
    case 'reorderQuestions':
      const reorderedQuestions = state.questions.sort(() => {
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
        livesCount: state.livesCount - 1,
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
    case 'resetState':
      return initialState;
    default:
      return state;
  }
};

export const LessonProvider = ({ children }) => {
  const { user } = useAuth();
  const currentQuestions = questions.filter(question => question.starId === user.starId);

  initialState.livesCount = user.lives;
  initialState.questions = currentQuestions;

  const value = useReducer(LessonReducer, initialState);

  return <LessonContext.Provider value={value}>{children}</LessonContext.Provider>;
};
