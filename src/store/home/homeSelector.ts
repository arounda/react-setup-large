import { RootState } from '../store';

export const selectHomeCounter = (state: RootState) => state.home.counter;
