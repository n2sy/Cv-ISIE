import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router : Router,
    private cvpersonne: CvpersonneService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param) => {
        this.pers = this.cvpersonne.getPersonneById(param['id'])
      }
    )
  }

  goToUpdate() {
    this.router.navigate(['cv/edit', this.pers.id]);
  }

  deletePersonne() {
    this.cvpersonne.deletePersonne(this.pers);
    this.router.navigate(['cv'])
  }

}
