import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }

  @Input() name: string
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>()
  message: string;

  ngOnInit() {
  }

  onClick(): void{
    this.buttonClicked.emit(this.message);
   }
}
