import { Injectable } from '@angular/core';
import { ItemInfo } from './models/Info-item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceItemsService {

  constructor(private http: HttpClient) { }
  Arr: ItemInfo[] = [];
  getItems() : Observable<ItemInfo[]>{
    return this.http.get<ItemInfo[]>("https://raw.githubusercontent.com/udacity/nd-0067-c3-angular-fundamentals-project-starter/main/src/assets/data.json");
  }
}
