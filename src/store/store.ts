import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import { api } from '@/apis/api';

import { staticReducers } from './rootReducer';

const createReducer = () => combineReducers(staticReducers);

const logger = createLogger({
  collapsed: true,
});

const middleware: Middleware[] = import.meta.env.DEV
  ? [logger, api.middleware]
  : [api.middleware];

const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
