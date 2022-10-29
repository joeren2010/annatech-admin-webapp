import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersModule } from './components/orders/orders.module';
import { ClientsModule } from './components/clients/clients.module';
import { ProjectsModule } from './components/projects/projects.module';
import { AuthModule } from './components/auth/auth.module';
import { CalendarModule } from './components/calendar/calendar.module';
import { CalendarService } from './services/calendar.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { MeetingsModule } from './components/meetings/meetings.module';
import { MeetingsService } from './services/meetings.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,    
    HeaderComponent,
    HomeComponent,    
    NavbarComponent,
    NotFoundComponent,
    AboutComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    ProjectsModule,
    OrdersModule,
    ClientsModule,    
    HttpClientModule,
    ReactiveFormsModule,
    CalendarModule,
    MeetingsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      countDuplicates: true
    }),       
  ],
  providers: [MeetingsService, CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
