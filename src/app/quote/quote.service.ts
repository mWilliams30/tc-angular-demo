import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { IQuote } from './quote';


@Injectable()
export class QuoteService {

  private _quotesUrl = './assets/quotes.json';

  constructor(private _http: HttpClient) { }

  getQuotes(): Observable<IQuote[]>{
    return this._http.get<IQuote[]>(this._quotesUrl)
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
