import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { bookReducer, BookState, counterReducer } from './reducers';

// 项目中全部的状态
export interface State {
  book: BookState;
  count: number;
}

// 全部的reducer函数
export const reducers: ActionReducerMap<State> = {
  book: bookReducer,
  count: counterReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
