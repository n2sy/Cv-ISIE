import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
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
      (p : Params) => {
        this.cvPersonne.getPersonneByIdAPI(p['id']).subscribe(
          (perso : Personne) => {
            this.pers = perso;
          },
          (error) => {
            console.log('error with getPersonne')
          }
        )
      },
      (error) => {
        console.log('Absence de Route Parameters');
        
      }
    );
  }

  updatePersonne() {
    //this.cvPersonne.updatePersonne(p);
    //console.log(p);
    this.cvPersonne.updatePersonneAPI(this.pers).subscribe(
      (response) => {
        this.router.navigate(['cv']);
      },
      (error) => {
        console.log('Error with PUT request !');
        
      }
    )
  }

}
