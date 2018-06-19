import { Component, OnInit, Input } from '@angular/core';
import { IQuote } from '../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  constructor() { }

  @Input() quotes: IQuote[];

  ngOnInit() {
  }

}
