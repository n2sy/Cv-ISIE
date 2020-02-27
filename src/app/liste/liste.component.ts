import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() listePersonne : Personne[];
  @Output() sendPr = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.listePersonne);
  }

  EnvoyerPers(p) {
    this.sendPr.emit(p);
  }

}
