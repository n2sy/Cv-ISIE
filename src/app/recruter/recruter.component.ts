import { Component, OnInit } from '@angular/core';
import { RecruesService } from '../recrues.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrls: ['./recruter.component.css']
})
export class RecruterComponent implements OnInit {
  listeRecrues : Personne[];
  constructor(private recrueService : RecruesService) { }

  ngOnInit() {
    this.listeRecrues = this.recrueService.getListeRecrues();
  }

}
