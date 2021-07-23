import { createSelector } from '@ngrx/store';
const selectCountStates = (state: number) => state;

export const getCurrentCount = createSelector(
  selectCountStates,
  (state: number) => state
);
