import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvpersonneService } from '../cvpersonne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  pers : Personne;
  constructor(private activatedRoute : ActivatedRoute,
    private router : Router,
    private cvPersonne : CvpersonneService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.pers = this.cvPersonne.getPersonneById(params['id'])
      }
    )
  }

  updatePersonne(p) {
    this.cvPersonne.updatePersonne(p);
    this.router.navigate(['cv']);
  }

}
