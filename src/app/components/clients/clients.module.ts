import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClientsComponent, 
    ClientsListComponent,   
    ClientCreateComponent,
    ClientProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule    
  ]
})
export class ClientsModule { }
