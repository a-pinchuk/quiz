import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    questions: [
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
    ],
    score: 0,
    currentQuestion: 0,
  },
  reducers: {
    answerQuestion: (state, action) => {
      if (action.payload) {
        state.score += 1;
      }
      state.currentQuestion += 1;
    },
  },
});

export const { answerQuestion } = quizSlice.actions;

export default quizSlice.reducer;
