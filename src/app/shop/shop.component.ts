import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { UberService} from "../uber.service";


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private http : HttpClient , private uberService: UberService) {
    this.getAllShort()
  }
  uber: UberService[] = [];
stock:any = [];
panier:any = [];

getValue(quantite:any , short:object  ){

}

addPanier(short:object , quantite:any){

    for(let i = 0; i<quantite; i++){
      this.panier.push(short)
    }
  if(quantite==0){
    this.panier.push(short)
  }




  this.uberService.prend(this.panier)

}

  getAllShort(){
this.http.get('http://127.0.0.1:8000/short').subscribe(shorts=>{
this.stock = shorts
})
  };
  deleteShort(id:any){
    this.http.delete('http://127.0.0.1:8000/short/delete/'+id).subscribe(data=>{
      console.log(data)
      this.getAllShort()
    })
  }

  ngOnInit(): void {
    this.panier = this.uberService.donne()
  }

}
