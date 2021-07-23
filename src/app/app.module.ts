import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsCacheService } from './rxjs.cache.service';
import { BooksComponent } from './books/books.component';
import { AppStoreModule } from './store/store.module';
import { PersonComponent } from './person/person.component';
import { EffectsModule } from '@ngrx/effects';
import { PersonEffect } from './store/effects/person.effect';
@NgModule({
  declarations: [AppComponent, BooksComponent, PersonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppStoreModule,
    // 在使用的时候注入
    EffectsModule.forFeature([PersonEffect]),
  ],
  providers: [RxjsCacheService],
  bootstrap: [AppComponent],
})
export class AppModule {}
