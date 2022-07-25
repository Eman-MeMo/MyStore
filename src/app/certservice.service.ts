import { Injectable } from '@angular/core';
import { ItemInfo } from './models/Info-item';

@Injectable({
  providedIn: 'root'
})

export class CertserviceService {
username: string = '';
Address: string = '';
cartNumber: number = 0;
TotalCost: number= 0;
itemCart:ItemInfo[] = [];
  constructor() { }

  getCartItems() {
    return this.itemCart;
  }
  addToCart(item: ItemInfo) {
    let x=false;
    for (let index = 0; index < this.itemCart.length; index++) {
      if (this.itemCart[index].id === item.id) {
        alert("This product is Already exists in The Cart!");
        x = true;
        break;
      }
    }
      if (x === false) {
        this.itemCart.push(item);
        alert("Added to cart");
      }
  }
  totalprice() {
  this.TotalCost = 0;
    for (let i = 0; i < this.itemCart.length; i++){
      console.log(this.itemCart[i].Amount)
      this.TotalCost += this.itemCart[i].price * this.itemCart[i].Amount;
      console.log(this.TotalCost);
      }
    return this.TotalCost;
}
  }
