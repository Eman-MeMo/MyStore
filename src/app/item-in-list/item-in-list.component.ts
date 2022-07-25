import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ItemInfo } from '../models/Info-item';
import { CertserviceService } from '../certservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item-in-list',
  templateUrl: './item-in-list.component.html',
  styleUrls: ['./item-in-list.component.css']
})
export class ItemInListComponent implements OnInit {
@Input() data: any;
  @Output('selectionChanged') eventEmitter: EventEmitter<any> =
    new EventEmitter<any>();
  constructor(private cartservice : CertserviceService,private router:Router) {}
  ngOnInit(){}
  updatedata(event: any) :void{
    const dateStr = event.target.value;
    this.eventEmitter.emit({ id: this.data.id, data : dateStr });
  }
  addToCart(item: ItemInfo) {
      this.cartservice.addToCart(item);
  }
   MoveToProduct(newValue:ItemInfo):void
   {
     this.router.navigate(["/AnItem", newValue.id])
   }
}
