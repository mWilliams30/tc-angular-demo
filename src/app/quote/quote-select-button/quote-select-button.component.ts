import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IQuote } from '../quote';

@Component({
  selector: 'app-quote-select-button',
  templateUrl: './quote-select-button.component.html',
  styleUrls: ['./quote-select-button.component.css']
})
export class QuoteSelectButtonComponent implements OnInit {

  constructor() { }
  
  @Input() quote: IQuote;    
  @Output() quoteSelected: EventEmitter<IQuote> = new EventEmitter<IQuote>()

  ngOnInit() {
  }

  onClick(): void{
   this.quoteSelected.emit(this.quote);
  }
}
