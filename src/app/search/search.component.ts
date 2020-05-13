import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { CvpersonneService } from '../cvpersonne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  selectedPersons : Personne[];

  constructor(private cvService : CvpersonneService, private router : Router) { }

  ngOnInit() {
  }

  searchListPersons(input) {
    let name = input.value.trim();
    console.log(name);
    
    this.cvService.getListPersonsByName(name).subscribe(
      (response) => {
        console.log(response);
        
        this.selectedPersons = response;
      },
      (error) => {
        console.log('Error with GetListPersonsByName');
      }
    )
  }

  onSelectPerson(p) {
      this.selectedPersons = [];
      this.router.navigate(['cv',p.id ])

  }

}
