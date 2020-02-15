import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() colorChild : String;
  @Output() sendMsg = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  Send() {
    this.sendMsg.emit('Msg send by child : '+this.colorChild);
  }

}
