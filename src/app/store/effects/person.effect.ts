import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { RxjsCacheService } from 'src/app/rxjs.cache.service';
import {
  getSuccessPerson,
  IPerson,
  LoadPerson,
  loadPerson,
  PersonActionTypes,
} from '../actions';

@Injectable()
export class PersonEffect {
  constructor(
    private rxjsCacheService: RxjsCacheService,
    private actions$: Actions
  ) {}

  loadPerson$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<LoadPerson>(PersonActionTypes.LOAD_PERSON_START),
        // 可以传递参数
        mergeMap((action: LoadPerson) => {
          console.log(action.name, '传递的参数');
          // 请求数据接口,方法的时候可以传递参数
          return this.rxjsCacheService.users.pipe(
            // 处理请 成功返回的数据
            map((person: IPerson[]) => getSuccessPerson({ person })),
            catchError(() => EMPTY)
          );
        })
      )
    // { dispatch: false }
  );

  // loadPerson$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(loadPerson),
  //       // 可以传递参数
  //       mergeMap((action: Action) => {
  //         console.log(action, '传递的参数');
  //         // 请求数据接口,方法的时候可以传递参数
  //         return this.rxjsCacheService.users.pipe(
  //           // 处理请 成功返回的数据
  //           map((person: IPerson[]) => getSuccessPerson({ person })),
  //           catchError(() => EMPTY)
  //         );
  //       })
  //     )
  //   // { dispatch: false }
  // );
}
