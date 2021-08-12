import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-newshort',
  templateUrl: './newshort.component.html',
  styleUrls: ['./newshort.component.css']
})
export class NewshortComponent implements OnInit {

  constructor(private http : HttpClient , private router : Router) {

  }

  createShort(name: string , color: string , size: string){
this.http.post('http://127.0.0.1:8000/short/create', {
  "name": name ,
      "color": color ,
      "size": size
}).subscribe(data=>{
  console.log(data)
this.router.navigate(['shop'])
})
  }
  ngOnInit(): void {
  }

}
