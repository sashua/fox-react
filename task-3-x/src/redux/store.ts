import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './postsSlice';
import { todosReducer } from './todosSlice';
import { usersReducer } from './usersSlice';

export const store = configureStore({
  reducer: { posts: postsReducer, todos: todosReducer, users: usersReducer },
});
