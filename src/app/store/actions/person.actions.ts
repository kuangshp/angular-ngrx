import { createAction, props } from '@ngrx/store';

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

// 定义获取数据的action
export const loadPerson = createAction('开始获取人物数据');
export const getSuccessPerson = createAction(
  '成功获取人物数据',
  props<{ person: IPerson[] }>()
);
