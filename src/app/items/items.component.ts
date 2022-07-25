import { Component, OnInit } from '@angular/core';
import { ItemInfo } from '../models/Info-item';
import { ServiceItemsService } from '../service-items.service';
import { CertserviceService } from '../certservice.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemComponent implements OnInit {
  items:ItemInfo[] = [];
  constructor(private itemService: ServiceItemsService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(arr => {
      for (let index = 0; index < arr.length; index++){
        const product = arr[index];
        arr[index].Amount = 1;
      }
      this.items = arr;
      this.itemService.Arr = this.items;
    });
  }

  dateChanged(data: any) {

    const { id, date } = data;
    this.items[id - 1].Amount = date;
  }
}



