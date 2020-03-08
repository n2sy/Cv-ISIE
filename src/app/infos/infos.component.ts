import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne } from '../model/personne';
import { CvpersonneService } from '../cvpersonne.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  pers : Personne;
  constructor(private activatedRoute : ActivatedRoute,
    private cvpersonne: CvpersonneService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param) => {
        this.pers = this.cvpersonne.getPersonneById(param['id'])
      }
    )
  }

}
