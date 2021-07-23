import { createSelector } from '@ngrx/store';
import { BookState } from '../reducers/books.reducer';
const selectBookStates = (state: BookState) => state;

export const getBookList = createSelector(
  selectBookStates,
  (state: BookState) => state.bookList
);
