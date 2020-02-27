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

  @Input() bgColor : String = "pink";
  @Input() cl : String = "blue";

  class1 : boolean = true;
  class2 : boolean = false;
  class3 : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  Send() {
    this.sendMsg.emit('Msg send by child : '+this.colorChild);
  }

  changeStyle() {
    if(this.class1) {
      this.class1 = false;
      this.class2 = true;
    } 
    else if(this.class2) {
      this.class2 = false;
      this.class3 = true;
    }
    else {
      this.class3 = false;
      this.class1 = true;
    }

  }

}
