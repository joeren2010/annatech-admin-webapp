import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    OrdersComponent,    
    OrderCreateComponent,
    OrderViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class OrdersModule { }
