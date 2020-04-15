import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  erreur : boolean = false;
  msg = "Email et/ou Mot de passe invalides";
  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  closeAlert() {
    this.erreur = false;
  }
  Connect(f) {
    if(f.value['email'] == "nidhal@gmail.com" && f.value['password'] == "azerty"){
        this.router.navigate(['cv']);
        
      } 
      else{
        this.erreur = true;
        f.reset();
      }
    
  }

}
