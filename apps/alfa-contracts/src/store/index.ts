import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import app from './reducers/app';

const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
  app,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
