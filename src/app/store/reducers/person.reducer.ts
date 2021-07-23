import { createReducer, on, Action } from '@ngrx/store';
import { loadPerson, getSuccessPerson, IPerson } from '../actions';

export interface PersonState {
  personList: IPerson[];
}

export const initUserState: PersonState = {
  personList: [],
};

const _reducer = createReducer(
  initUserState,
  on(loadPerson, (state: PersonState) => {
    // 合并到旧的上面
    return { personList: [] };
  }),
  on(
    getSuccessPerson,
    (state: PersonState, { person }: { person: IPerson[] }) => {
      return { personList: [...state.personList, ...person] };
    }
  )
);

export const personReducer = (
  state: PersonState = initUserState,
  action: Action
) => {
  return _reducer(state, action);
};
