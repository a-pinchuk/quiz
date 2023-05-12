import React, { useState } from 'react';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';
import QuizContext from './components/QuizContext/QuizContext';

function App() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      question: 'В якому році відбулися перші Літні Олімпійські ігри?',
      answers: [
        { text: '1900', isCorrect: false },
        { text: '1924', isCorrect: false },
        { text: '1896', isCorrect: true },
        { text: '1936', isCorrect: false },
      ],
    },
    {
      question: 'Який хімічний елемент має символ "Na" у періодичній системі?',
      answers: [
        { text: 'Натрій', isCorrect: true },
        { text: 'Нікель', isCorrect: false },
        { text: 'Неон', isCorrect: false },
        { text: 'Ніобій', isCorrect: false },
      ],
    },
    {
      question: 'Хто написав роман "Війна і мир"?',
      answers: [
        { text: 'Лев Толстой', isCorrect: true },
        { text: 'Федор Достоєвський', isCorrect: false },
        { text: 'Іван Тургенєв', isCorrect: false },
        { text: 'Олександр Дюма', isCorrect: false },
      ],
    },
    {
      question: 'Яке місто є столицею Австралії?',
      answers: [
        { text: 'Мельбурн', isCorrect: false },
        { text: 'Канберра', isCorrect: true },
        { text: 'Сідней', isCorrect: false },
        { text: 'Брісбен', isCorrect: false },
      ],
    },
  ];

  return (
    <QuizContext.Provider
      value={{ questions, score, setScore, currentQuestion, setCurrentQuestion }}
    >
      {currentQuestion < questions.length ? <Quiz /> : <Result />}
    </QuizContext.Provider>
  );
}

export default App;
