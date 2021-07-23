import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPerson, LoadPerson, loadPerson } from '../store/actions';
import { PersonState } from '../store/reducers/person.reducer';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  personList: Observable<IPerson[]>;
  constructor(private readonly store: Store<{ person: PersonState }>) {
    this.personList = store.pipe(select('person'), select('personList'));
  }

  ngOnInit(): void {
    // 派发请求数据
    this.store.dispatch(new LoadPerson('张三'));
  }
}
