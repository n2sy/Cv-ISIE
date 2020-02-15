import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  listePersonne : Personne[];
  constructor() { }

  ngOnInit() {
    this.listePersonne = [
      new Personne(1, "nidhal", "jelassi", 35, "nidhal.jpg"),
      new Personne(1, "bart", "simpson", 12, "bart.jpeg"),
      new Personne(1, "homer", "simpson", 50, "homer.jpg"),
    ]
  }

}
