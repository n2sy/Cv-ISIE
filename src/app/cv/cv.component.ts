import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { CvpersonneService } from '../cvpersonne.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  listePersonne : Personne[];
  selectedPers : Personne;
 
  constructor(private cvservice : CvpersonneService) { }

  ngOnInit() {
    this.listePersonne = this.cvservice.getListePersonne();
  }

  ReceivedPers(p) {
    this.selectedPers = p;
  }
  addPerson() {
    let p = new Personne(4, "flen", "ben flen", 30, "Etudiant");
    this.cvservice.addPersonne(p);
  }

}
