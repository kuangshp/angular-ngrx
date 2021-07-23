import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { PersonEffect } from './effects/person.effect';
import { reducers, metaReducers } from './store';

@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forRoot([PersonEffect]),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production,
      features: {
        persist: true,
      },
    }),
  ],
})
export class AppStoreModule {}
