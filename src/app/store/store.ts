import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { bookReducer, BookState, counterReducer } from './reducers';
import { localStorageSync } from 'ngrx-store-localstorage';
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

export function localStorageSyncReducer(
  reducer: ActionReducer<State>
): ActionReducer<State> {
  return localStorageSync({
    keys: ['count', 'book'], // Object.keys(reducers)
    // 重新给本地存储的自定义key
    storageKeySerializer: (key) => `cool_${key}`,
    // 刷新页面同步到页面中
    rehydrate: true,
  })(reducer);
}
export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];
