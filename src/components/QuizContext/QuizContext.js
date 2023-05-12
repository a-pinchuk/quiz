import React from 'react';

const QuizContext = React.createContext({
  questions: [],
  score: 0,
  setScore: () => {},
  currentQuestion: 0,
  setCurrentQuestion: () => {},
});

export default QuizContext;
