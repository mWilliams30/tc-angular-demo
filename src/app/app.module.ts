import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {QuotePageComponent} from './quote/quote-page/quote-page.component';
import { QuoteListComponent } from './quote/quote-list/quote-list.component';


@NgModule({
  declarations: [
    AppComponent,
    QuotePageComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
