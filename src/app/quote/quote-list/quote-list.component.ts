import { Component, OnInit, Input } from '@angular/core';
import { IQuote } from '../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  constructor() { }

  selectedQuote: IQuote;
  
  @Input() quotes: IQuote[];

  ngOnInit() {
  }

  onQuoteSelected(quoteSelected: IQuote): void{
    this.selectedQuote = quoteSelected
    alert(this.selectedQuote.UnderwriterName + " - " +  this.selectedQuote.Premium + " \nVoluntary Excess - " +  this.selectedQuote.SelectedVoluntaryExcess);
  }

}
