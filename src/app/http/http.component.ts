import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  link = "https://jsonplaceholder.typicode.com/useeers";

  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
    this.callGet().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log('error isie ' + error);
      },
      () => {
        console.log("That's all !");
        
      }
    )

  }

  callGet() {
    return this.httpClient.get(this.link);
  }

}
