import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, catchError, shareReplay } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

export interface User {
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
const CACHE_SIZE = 1;

@Injectable()
export class RxjsCacheService {
  // constructor(private http: HttpClient) {}

  // get users() {
  //   return this.requestUsers();
  // }

  // private requestUsers() {
  //   return this.http
  //     .get<Array<User>>('https://api.github.com/users?since=1')
  //     .pipe(
  //       map((response) => response),
  //       catchError((error) => {
  //         console.log('something went wrong ' + error);
  //         return of([]);
  //       })
  //     );
  // }

  private cacheUsers$: Observable<Array<User>> | undefined;

  constructor(private http: HttpClient) {}

  get users() {
    if (!this.cacheUsers$) {
      // 缓存最新一份数据
      this.cacheUsers$ = this.requestUsers().pipe(shareReplay(CACHE_SIZE));
    }
    return this.cacheUsers$;
  }

  private requestUsers() {
    return this.http
      .get<Array<User>>('https://api.github.com/users?since=1')
      .pipe(
        map((response) => response),
        catchError((error) => {
          console.log('something went wrong ' + error);
          return of([]);
        })
      );
  }
}
