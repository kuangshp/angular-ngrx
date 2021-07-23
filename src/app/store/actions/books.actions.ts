import { createAction, props } from '@ngrx/store';

export interface IBook {
  bookName: string;
  author: string;
  price: number;
  createAt: string;
}

export const addBook = createAction('添加书籍', props<{ book: IBook }>());
export const delBook = createAction('删除书籍', props<{ book: IBook }>());
