import { createContext, useReducer } from 'react';
import { useAuth } from '../hooks/useAuth';
import { usePlanet } from '../hooks/usePlanet';
import { questions } from '../utils/questions';

export const LessonContext = createContext();

const stages = ['theory', 'quiz', 'end'];

const initialState = {
  currentStage: stages[2],
  questions: [],
  currentQuestion: 0,
  wrongsCount: 0,
  livesCount: 5,
  secondsCount: 0,
  time: '',
  verifyAnswer: () => {},
  isAnswerWrong: false,
  isAnswerVerified: false,
  isAnswered: false,
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
