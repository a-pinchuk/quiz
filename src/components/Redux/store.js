import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../Redux/quizSlice';

export default configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
