import { Component } from '@angular/core';
import { UberService } from "./uber.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private uberService: UberService) {


    this.getPanier()
  }
  title = 'shorterieAngu';


  getPanier(){
  let taille = 0
    taille = this.uberService.donneTaille()
   return taille
  }
}
