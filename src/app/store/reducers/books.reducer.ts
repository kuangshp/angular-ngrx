import { createReducer, on, Action } from '@ngrx/store';
import { addBook, delBook, IBook } from '../actions';

export interface BookState {
  bookList: IBook[];
}

export const initBookState: BookState = {
  bookList: [
    {
      bookName: '三国演义',
      author: '吴承恩',
      price: 20,
      createAt: '2021-10-10',
    },
  ],
};

const _reducer = createReducer(
  initBookState,
  on(addBook, (state: BookState, { book }: { book: IBook }) => {
    // 合并到旧的上面
    return { bookList: [...state.bookList, book] };
  }),
  on(delBook, (state: BookState, { book }: { book: IBook }) => {
    return { bookList: state.bookList.filter((item: IBook) => item !== book) };
  })
);

export const bookReducer = (
  state: BookState = initBookState,
  action: Action
) => {
  return _reducer(state, action);
};
