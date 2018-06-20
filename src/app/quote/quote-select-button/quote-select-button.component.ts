import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-select-button',
  templateUrl: './quote-select-button.component.html',
  styleUrls: ['./quote-select-button.component.css']
})
export class QuoteSelectButtonComponent implements OnInit {

  constructor() { }

  @Input() premium: any;
  ngOnInit() {
  }

}
