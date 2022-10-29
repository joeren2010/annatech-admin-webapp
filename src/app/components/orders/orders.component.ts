import { OrdersService } from './../../services/orders.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  ordersObservable = new Observable<any[]>();

  orderStatusIdx: number = 0;
  orderStatus: {name: string; value: number }[] = [
    { name: 'Placed', value: 0 },
    { name: 'Accepted', value: 1 },
    { name: 'Delivered', value: 2 },
    { name: 'Canceled', value: 3 },
  ];

  viewOrderBool: boolean = false;
  viewOrderIdx: number | undefined;
  orderModel: any;
  
  constructor(private ordersService : OrdersService) { }

  ngOnInit(): void {
    this.ordersObservable = this.ordersService.getOrders();
  }
  
  changeOrderStatus(orderStatusIdx: number){
    //this.orderStatusIdx = orderStatusIdx;
  }

  openViewModal(orderModel: any, viewOrderIdx: number) {
    this.viewOrderBool =true;
    this.viewOrderIdx = viewOrderIdx;
    this.orderModel = orderModel;
  }

  closeViewModal() {
    delete this.viewOrderIdx;
    delete this.orderModel;
    this.viewOrderBool = false;
  }
}
