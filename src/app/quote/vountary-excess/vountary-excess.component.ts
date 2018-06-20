import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IQuote } from '../quote';

@Component({
  selector: 'app-vountary-excess',
  templateUrl: './vountary-excess.component.html',
  styleUrls: ['./vountary-excess.component.css']
})
export class VountaryExcessComponent implements OnInit {

  constructor() { }  

  @Input() quote: IQuote;

  selectedOption: any;
  
  options = [
    {
      value: '0',
      display: '£0'
    },
    {
      value: '250',
      display: '£250'
    },
    {
      value: '500',
      display: '£500'
    }
  ];
  ngOnInit() {
  } 

}
