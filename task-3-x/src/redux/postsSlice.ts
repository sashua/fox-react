import { createSlice } from '@reduxjs/toolkit';
import initialPosts from 'data/posts.json';
import shuffle from 'lodash.shuffle';
import { State } from './types';

const postsSlice = createSlice({
  name: 'posts',
  initialState: shuffle(initialPosts),
  reducers: {},
});

export const selectPosts = (state: State) => state.posts;
export const postsReducer = postsSlice.reducer;
