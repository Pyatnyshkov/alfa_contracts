import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contractsApi } from '../services/contracts';
import app from './reducers/app';

const reducer = combineReducers({
  [contractsApi.reducerPath]: contractsApi.reducer,
  app,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contractsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
