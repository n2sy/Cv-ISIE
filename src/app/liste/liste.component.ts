import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() listePersonne : Personne[];
  constructor() { }

  ngOnInit() {
    console.log(this.listePersonne);
  }

}
