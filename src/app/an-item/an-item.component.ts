import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { ItemInfo } from '../models/Info-item';
import { ServiceItemsService } from '../service-items.service';
import { ActivatedRoute } from '@angular/router';
import { CertserviceService } from '../certservice.service';
@Component({
  selector: 'app-an-item',
  templateUrl: './an-item.component.html',
  styleUrls: ['./an-item.component.css']
})
export class AnItemComponent implements OnInit {
  @Output('selectionChanged') eventEmitter: EventEmitter<any> =
    new EventEmitter<any>();
  id: number=0;
  AnItem: any;
  list: ItemInfo[] = []
  constructor(private router: ActivatedRoute, private item: ServiceItemsService,
    private cartItems: CertserviceService) { }

  ngOnInit(): void {
    
        this.AnItem = this.router.params.subscribe(params => {
      this.id = +params['id'];
    });
        this.AnItem = this.item.Arr.find(E =>E.id === this.id)
      }
  addToCart(item: ItemInfo) {
      this.cartItems.addToCart(item);
    }
}
