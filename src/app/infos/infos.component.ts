import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
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
      (p : Params) => {
        this.cvpersonne.getPersonneByIdAPI(p['id']).subscribe(
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
    )
  }

  goToUpdate() {
    this.router.navigate(['cv/edit', this.pers.id]);
  }

  deletePersonne() {
    //this.cvpersonne.deletePersonne(this.pers);
    if(confirm('Voulez-vous vraiment supprimer cette personne ?')) {
      this.cvpersonne.deletePersonneAPI(this.pers.id).subscribe(
        (response) => {
          this.router.navigate(['cv'])
        },
        (error) => {
          console.log('Error with Delete request');
        }
      )
    }
   
  }

}
