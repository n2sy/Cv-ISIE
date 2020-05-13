import { Injectable } from '@angular/core';
import { Personne } from './model/personne';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvpersonneService {
  link = "http://localhost:3000/api/personnes";
  // listePersonne = [
  //   new Personne(1, "nidhal", "jelassi", 35, "enseignant", "nidhal.jpg"),
  //   new Personne(2, "bart", "simpson", 12, "directeur", "bart.jpeg"),
  //   new Personne(3, "homer", "simpson", 50, "clown")
  // ]

  listePersonne = [];

  constructor(private http : HttpClient) { }

  getListePersonneAPI() : Observable<Personne[]> {
    return this.http.get<Personne[]>(this.link);
  }

  getListePersonne() {
    return this.listePersonne;
  }

  addPersonneAPI(p) : Observable<any> {
    // const myToken = localStorage.getItem('token');
    // if(myToken) {
    //   const params = new HttpParams().set('access_token', myToken);
    //   return this.http.post(this.link, p, {params});
    // }
    return this.http.post(this.link, p);
  }

  addPersonne(p) {
    p.id = this.listePersonne.length + 1;
    this.listePersonne.push(p);
    console.log(this.listePersonne);
  }

  getListPersonsByName(chaine) : Observable<Personne[]> {
    const filterValue = `{"where":{"nom":{"like":"%${chaine}%"}}}`;
    console.log('....' + filterValue);
    
    const p = new HttpParams().set('filter', filterValue);
    return this.http.get<Personne[]>(this.link, {params : p})

  }

  getPersonneByIdAPI(id) : Observable<Personne> {
    return this.http.get<Personne>(`${this.link}/${id}`);  
  }


  getPersonneById(id) {
    return this.listePersonne.find((p)=>(p.id==id));
  }

  updatePersonneAPI(p) : Observable<any> {
    // const myToken = localStorage.getItem('token');
    // if(myToken) {
    //   const params = new HttpParams().set('access_token', myToken);
    //   return this.http.put(this.link, p, {params});
    // }
    return this.http.put(this.link, p)
  }

  updatePersonne(p) {
    let i = this.listePersonne.indexOf(p);
    this.listePersonne[i] = p;
  }

  deletePersonneAPI(id) : Observable<any> {
    // const myToken = localStorage.getItem('token');
    // if(myToken) {
    //   const params = new HttpParams().set('access_token', myToken);
    //   return this.http.delete(`${this.link}/${id}`, {params});
    // }
    return this.http.delete(`${this.link}/${id}`);
  }

  deletePersonne(p) {
    let i = this.listePersonne.indexOf(p);
    this.listePersonne.splice(i, 1);
  }



}
