import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { RxjsCacheService } from 'src/app/rxjs.cache.service';
import { getSuccessPerson, IPerson, loadPerson } from '../actions';

@Injectable()
export class PersonEffect {
  constructor(
    private rxjsCacheService: RxjsCacheService,
    private actions$: Actions
  ) {}

  loadPerson$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadPerson),
        mergeMap(() =>
          // 请求数据接口
          this.rxjsCacheService.users.pipe(
            // 处理请 成功返回的数据
            map((person: IPerson[]) => getSuccessPerson({ person })),
            catchError(() => EMPTY)
          )
        )
      )
    // { dispatch: false }
  );
}
