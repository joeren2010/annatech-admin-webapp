import { AuthComponent } from './components/auth/auth.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './components/clients/client-create/client-create.component';
import { ClientProfileComponent } from './components/clients/client-profile/client-profile.component';
import { ClientsListComponent } from './components/clients/clients-list/clients-list.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { MeetingsCalenComponent } from './components/meetings/meetings-calen/meetings-calen.component';
import { MeetingsListComponent } from './components/meetings/meetings-list/meetings-list.component';


const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"auth", children: [
    {path:"", component: AuthComponent},
    {path:"change-password", component: ChangePasswordComponent},
    {path:"login", component: LoginComponent},
    {path:"register", component: RegisterComponent},
  ]},  
  {path:"home", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"projects", children: [
    {path:"", component: ProjectsComponent},
    {path:"categories", component: CategoriesComponent},
  ]},
  {path:"orders", component: OrdersComponent},
  {path:"calendar", component: CalendarComponent},
  {path:"meetings", children: [
    {path:"", component: MeetingsComponent},
    {path:"meetings-calen", redirectTo:"/meetings", pathMatch:"full"},
    {path:"meetings-list", redirectTo:"/meetings", pathMatch:"full"},
    //{path:"meetings-calen", component: MeetingsCalenComponent},
    //{path:"meetings-list", component: MeetingsListComponent},
  ]},
  {path:"clients", children: [
    {path:"", redirectTo:"clients-list", pathMatch:"full"},
    {path:"client-create", redirectTo:"clients-list", pathMatch:"full"},
    // {path:"", component: ClientsComponent},
    {path:"clients-list", component: ClientsListComponent},
    //{path:"client-create", component: ClientCreateComponent},
    {path:"client-profile", component: ClientProfileComponent},
  ]},  
  {path:"**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
