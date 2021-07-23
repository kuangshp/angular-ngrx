import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add, decrement, increment, reset } from './store/actions/counter.actions';
import { getCurrentCount } from './store/slectors/counter.selector';
import { RxjsCacheService, User } from './rxjs.cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users$: Observable<User[]> | undefined;
  count$: Observable<number>;

  constructor(
    private rxjsCacheService: RxjsCacheService,
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
    console.log(this.count$, '=====>>');
    // 使用另外一种方式取值
    store
      .pipe(select('count'), select(getCurrentCount))
      .subscribe((state: number) => {
        console.log(state, '当前的值');
      });
  }
  ngOnInit() {
    this.users$ = this.rxjsCacheService.users;
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
  add() {
    this.store.dispatch(add({ count: 10 }));
  }
}
