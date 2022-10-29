import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

  getOrders(){
    //asking httpClient to retrieve the data from orders.json
    return this.httpClient.get<any[]>("./../../assets/data/orders.json")
  }
}
