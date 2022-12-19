import { configureStore } from '@reduxjs/toolkit';
import { reducer as counterReducer } from 'components/Counter';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
