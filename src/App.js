import React from 'react';
import { Provider } from 'react-redux';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';
import store from './components/Redux/store';
import { useSelector } from 'react-redux';

function QuizComponent() {
  const currentQuestion = useSelector(state => state.quiz.currentQuestion);
  const questions = useSelector(state => state.quiz.questions);

  return currentQuestion < questions.length ? <Quiz /> : <Result />;
}

function App() {
  return (
    <Provider store={store}>
      <QuizComponent />
    </Provider>
  );
}

export default App;
