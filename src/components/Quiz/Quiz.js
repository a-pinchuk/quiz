import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { answerQuestion } from '../Redux/quizSlice';

function Quiz() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.quiz.questions);
  const currentQuestion = useSelector(state => state.quiz.currentQuestion);

  const handleAnswer = isCorrect => {
    dispatch(answerQuestion(isCorrect));
  };

  return (
    <div>
      <h2>{questions[currentQuestion].question}</h2>
      {questions[currentQuestion].answers.map((answer, index) => (
        <button onClick={() => handleAnswer(answer.isCorrect)} key={index}>
          {answer.text}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
