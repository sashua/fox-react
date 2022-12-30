import { createSlice } from '@reduxjs/toolkit';
import initialUsers from 'data/users.json';
import shuffle from 'lodash.shuffle';
import { State } from './types';

const usersSlice = createSlice({
  name: 'users',
  initialState: shuffle(initialUsers),
  reducers: {},
});

export const selectUsers = (state: State) => state.users;
export const usersReducer = usersSlice.reducer;
