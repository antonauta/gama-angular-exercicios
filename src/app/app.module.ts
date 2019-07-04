import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LanguageComponent } from './language/language.component';
import { ListLanguageComponent } from './list-language/list-language.component';
import { HttpClientModule } from '@angular/common/http';
import { Language } from 'src/typings/language';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'languages', component: ListLanguageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    ListLanguageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
