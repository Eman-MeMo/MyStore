import { Component, OnInit } from '@angular/core';
import { CertserviceService } from '../certservice.service';
import { ItemInfo } from '../models/Info-item';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: ItemInfo[] = [];
  cost: number = 0;
  constructor(private cartservice: CertserviceService) { }

  ngOnInit(): void {
    this.cartList = this.cartservice.getCartItems();
    this.cost = this.cartservice.totalprice();
  }

  reCalculate(num: number) {
    if (num === 0) {
      alert("By Making Amount of this Product quals Zero, You remone it from the Cart")
      this.cost = this.cartservice.totalprice();
    }
    else {
      alert("You Change Amount of This Product to:"+num)
      this.cost = this.cartservice.totalprice();
    }

  }
  	RemoveItem(item:ItemInfo) {
    for (let index = 0; index < this.cartList.length; index++) {
      if (this.cartList[index].id === item.id)
      {
        this.cartList.splice(index, 1)
        alert("This Product Will be Remove!")
        this.cost = this.cartservice.totalprice();
      }
    }
  }

}
