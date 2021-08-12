import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UberService} from "../uber.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private http : HttpClient , private uberService: UberService) {

    this.totalprice()
    this.getPanier()
    this.rangePanier(this.getPanier())
  }

  panierEnBordel:any = []
  panierRange:any = []

getPanier(){
this.panierEnBordel = this.uberService.donne()
return this.panierEnBordel
}
rangePanier(panierEnBordel:any){


  panierEnBordel.forEach((short:any)=>{
    let indicepossible = this.panierRange.findIndex((shortRange:any)=>shortRange.id == short.id)
    if(this.panierRange.findIndex((element:any)=> element.id == short.id) != -1){

      this.panierRange[indicepossible].quantite++


    } else {

      let newShort = {
        id:short.id,
        name:short.name,
        color:short.color,
        size:short.size,
        price:short.price,
        quantite:1
      }

      this.panierRange.push(newShort)
    }
  })

return this.panierRange
}


deleteShortFromPanier(ceShort:any){

    let indexDuShort = this.panierRange.indexOf(ceShort)
  this.panierRange.splice(indexDuShort,1)

  /*while(this.panierEnBordel.findIndex((element:any)=>element.id == ceShort.id) != -1){

      this.panierEnBordel.splice(this.panierEnBordel.findIndex((element:any)=>element.id == ceShort.id),1)
  } */

  this.panierEnBordel = this.panierEnBordel.filter((unShort:any)=> unShort.id != ceShort.id)

  this.uberService.prend(this.panierEnBordel)

}
totalprice(){
  let total:any = 0
  this.panierRange.forEach((short:any)=>{
  total += short.price
  })
  return total
}
  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.uberService.prend(this.panierEnBordel)
  }

}
