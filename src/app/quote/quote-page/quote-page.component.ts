import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import { IQuote } from '../quote';

@Component({
  selector: 'app-quote-page',
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.css'],
  providers: [QuoteService]
})
export class QuotePageComponent implements OnInit {

  constructor(private _quoteService: QuoteService) { }

  quotes = null;

  ngOnInit() {
    this._quoteService.getQuotes()
      .subscribe(quotes => {
        this.quotes = quotes;
      })
  }

  onQuoteSelected(quoteSelected: IQuote): void{
    console.log(quoteSelected);
  }

}
