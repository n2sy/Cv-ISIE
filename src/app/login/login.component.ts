import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  erreur : boolean = false;
  msg = "Email et/ou Mot de passe invalides";
  
  constructor(private router: Router, 
    private auth : AuthService) { }

  ngOnInit() {
  }

  closeAlert() {
    this.erreur = false;
  }

  Connect(f) {
    this.auth.seConnecter(f.value).subscribe(
      (response) => {
        const myToken = response['id']; //récupération du token
        localStorage.setItem('token' ,myToken);
        this.router.navigate(['cv']);
      },
      (error) => {
        this.erreur = true;
        f.reset();
      }
    )
    // if(f.value['email'] == "nidhal@gmail.com" && f.value['password'] == "azerty"){
    //     this.router.navigate(['cv']);
    //   } 
    //   else{
    //     this.erreur = true;
    //     f.reset();
    //   }
    
  }

}
