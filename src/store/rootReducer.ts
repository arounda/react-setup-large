import { Reducer } from '@reduxjs/toolkit';

import { api } from '@/apis/api';

import { homeReducer } from './home/homeSlice';

export interface Reducers {
  [key: string]: Reducer;
  home: typeof homeReducer;
}

export const staticReducers: Reducers = {
  [api.reducerPath]: api.reducer,
  home: homeReducer,
};
