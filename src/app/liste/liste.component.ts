import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../model/personne';
import { CvpersonneService } from '../cvpersonne.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() listePersonne : Personne[];
  @Output() sendPr = new EventEmitter();
  constructor(private cvservice : CvpersonneService) { }

  ngOnInit() {
  
  }

  EnvoyerPers(p) {
    this.sendPr.emit(p);
  }

  showConsole() {
    console.log(this.listePersonne);
  }

}
