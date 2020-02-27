import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() pers : Personne;
  @Output() sendP = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendPers() {
    this.sendP.emit(this.pers);
  }

}
