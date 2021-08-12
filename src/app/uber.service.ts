import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UberService {

  constructor() { }

sac:any = [];

  prend(ca:any){
    this.sac = ca

  }

  donne(){

    return this.sac
  }

donneTaille(){
    return this.sac.length
}

}
