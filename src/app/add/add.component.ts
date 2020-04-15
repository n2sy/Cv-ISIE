import { Component, OnInit } from '@angular/core';
import { CvpersonneService } from '../cvpersonne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private cvService : CvpersonneService,
    private router : Router) { }

  ngOnInit() {
  }

  addPersonne(p) {
    //console.log(p);
    this.cvService.addPersonne(p);
    this.router.navigate(['cv']);
  }

}
