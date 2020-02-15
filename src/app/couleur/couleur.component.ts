import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-couleur',
  templateUrl: './couleur.component.html',
  styleUrls: ['./couleur.component.css']
})
export class CouleurComponent implements OnInit {
  color : string = "yellow";
  constructor() { }

  ngOnInit() {
  }

  changeColor(cl) {
    this.color = cl.value;
  }

  Traitement() {
    alert('Avertissement');
  }

  msgReceived(i) {
    alert(i);
  }

}
