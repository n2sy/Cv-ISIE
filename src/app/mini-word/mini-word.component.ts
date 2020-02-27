import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {
  cl : String;
  bgColor : String;
  font : String;
  size : String;
  constructor() { }

  ngOnInit() {
  }

  changeSize(val) {
    this.size = val+'px';
  }

}
