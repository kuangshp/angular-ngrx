import { Action, createAction, props } from '@ngrx/store';

export interface IPerson {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface IPerson {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

// 以下是另外一种写法
export enum PersonActionTypes {
  LOAD_PERSON_START = '开始获取人物数据',
  LOAD_PERSON_SUCCESS = '成功获取人物数据',
}
// 定义获取数据的action
export const loadPerson = createAction(PersonActionTypes.LOAD_PERSON_START);
export const getSuccessPerson = createAction(
  PersonActionTypes.LOAD_PERSON_SUCCESS,
  props<{ person: IPerson[] }>()
);

export class LoadPerson implements Action {
  readonly type = PersonActionTypes.LOAD_PERSON_START;
  constructor(public name: string) {}
}

export class GetSuccessPerson implements Action {
  readonly type = PersonActionTypes.LOAD_PERSON_SUCCESS;
  constructor(public payload: IPerson[]) {}
}
