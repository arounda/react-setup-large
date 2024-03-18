import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type HomeState = {
  counter: number;
};

const initialState: HomeState = {
  counter: 0,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCounter: (state, action: PayloadAction<number>) => {
      state.counter = action.payload;
    },
  },
});

export const homeActions = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
