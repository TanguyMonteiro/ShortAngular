import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ShopComponent} from "./shop/shop.component";
import {NewshortComponent} from "./newshort/newshort.component";
import {PanierComponent} from "./panier/panier.component";


const routes : Routes = [
  {path: 'shop' , component: ShopComponent},
  {path: 'create' , component: NewshortComponent},
  {path: 'panier' , component: PanierComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
