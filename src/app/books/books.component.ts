import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addBook, delBook, IBook, IPerson, loadPerson } from '../store/actions';
import { BookState } from '../store/reducers/books.reducer';
import { PersonState } from '../store/reducers/person.reducer';
import { getBookList } from '../store/slectors/books.selector';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  bookList: Observable<IBook[]>;
  personList: Observable<IPerson[]>;
  constructor(
    private readonly store: Store<{ book: BookState; person: PersonState }>
  ) {
    this.bookList = store.pipe(select('book'), select('bookList'));
    this.personList = store.pipe(select('person'), select('personList'));
    console.log(this.bookList, '查询的数据');
    // 或者使用下面这种方式
    store
      .pipe(select('book'), select(getBookList))
      .subscribe((state: IBook[]) => {
        console.log(state, '当前的值11111');
      });
  }

  ngOnInit(): void {
    this.store.dispatch(loadPerson({ name: '你好' }));
  }

  delBook(item: IBook): void {
    console.log(item, '删除数据');
    this.store.dispatch(delBook({ book: item }));
  }
  addBook(): void {
    this.store.dispatch(
      addBook({
        book: {
          bookName: '哈哈',
          author: '哈哈1',
          price: 20,
          createAt: '2021',
        },
      })
    );
  }
}
