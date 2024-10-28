import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import usersReducer from './usersSlide'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    users: usersReducer
  }
});