import React from 'react';
import { useSelector } from 'react-redux';

function Result() {
  const score = useSelector(state => state.quiz.score);

  return (
    <div>
      <h2>Ваш результат: {score}</h2>
    </div>
  );
}

export default Result;
