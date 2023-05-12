import React, { useContext } from 'react';
import QuizContext from '../QuizContext/QuizContext';

function Quiz() {
  const { questions, score, setScore, currentQuestion, setCurrentQuestion } =
    useContext(QuizContext);

  const handleAnswer = isCorrect => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
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
