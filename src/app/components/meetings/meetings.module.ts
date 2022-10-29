import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsComponent } from './meetings.component';
import { RouterModule, Routes } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxDaterangepickerMd } from 'ngx-datepicker-material';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { MeetingsCalenComponent } from './meetings-calen/meetings-calen.component';
import { MeetingsListComponent } from './meetings-list/meetings-list.component';




FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    MeetingsComponent,
    MeetingsCalenComponent,
    MeetingsListComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FullCalendarModule, // register FullCalendar with you app        
    ReactiveFormsModule, 
    HttpClientModule,
    FormsModule,
    NgxDaterangepickerMd,
    NgxMaterialTimepickerModule,   
    ModalModule.forRoot(),    
  ]
})
export class MeetingsModule { }
