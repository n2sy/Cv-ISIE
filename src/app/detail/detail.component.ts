import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../model/personne';
import { RecruesService } from '../recrues.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() pers : Personne;
  constructor(private recrueService : RecruesService,
    private routerService : Router) { }

  ngOnInit() {
  }

  AjouterRecrue() {
    this.recrueService.addRecrue(this.pers);
    console.log(this.recrueService.getListeRecrues())
  }

  AfficherPlusDetails() {
    this.routerService.navigate(['cv', this.pers.id]);
  }

}
