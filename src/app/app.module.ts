import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsCacheService } from './rxjs.cache.service';
import { BooksComponent } from './books/books.component';
import { AppStoreModule } from './store/store.module';
@NgModule({
  declarations: [AppComponent, BooksComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // StoreModule.forRoot({ count: counterReducer }),
    AppStoreModule,
  ],
  providers: [RxjsCacheService],
  bootstrap: [AppComponent],
})
export class AppModule {}
