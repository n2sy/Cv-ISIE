import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvpersonneService {
  listePersonne = [
    new Personne(1, "nidhal", "jelassi", 35, "enseignant", "nidhal.jpg"),
    new Personne(2, "bart", "simpson", 12, "directeur", "bart.jpeg"),
    new Personne(3, "homer", "simpson", 50, "clown")
  ]
  constructor() { }

  getListePersonne() {
    return this.listePersonne;
  }

  addPersonne(p) {
    this.listePersonne.push(p);
    console.log(this.listePersonne);
  }

  getPersonneById(id) {
    return this.listePersonne.find((p)=>(p.id==id));
  }



}
