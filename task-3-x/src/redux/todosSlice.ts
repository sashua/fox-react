import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import initialTodos from 'data/todos.json';
import shuffle from 'lodash.shuffle';
import { State } from './types';

const todosSlice = createSlice({
  name: 'todos',
  initialState: shuffle(initialTodos),
  reducers: {
    toggleTodo(state, action: PayloadAction<string>) {
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
    deleteTodo(state, action: PayloadAction<string>) {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const selectTodos = (state: State) => state.todos;
export const { toggleTodo, deleteTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
