import { Component, OnInit, Input } from '@angular/core';
import { IQuote } from '../quote';

@Component({
  selector: 'app-quote-requirements',
  templateUrl: './quote-requirements.component.html',
  styleUrls: ['./quote-requirements.component.css']
})
export class QuoteRequirementsComponent implements OnInit {

  constructor() { }

  @Input() quote: IQuote;
  
  ngOnInit() {
  }

}
