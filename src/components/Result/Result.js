import React, { useContext } from 'react';
import QuizContext from '../QuizContext/QuizContext';

function Result() {
  const { score } = useContext(QuizContext);

  return (
    <div>
      <h2>Ваш результат: {score}</h2>
    </div>
  );
}

export default Result;
