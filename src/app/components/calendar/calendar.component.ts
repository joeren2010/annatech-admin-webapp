import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Calendar, CalendarOptions } from '@fullcalendar/angular';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
//import { CalendarService } from 'src/app/services/calendar.service';
//import { Observable } from 'rxjs';
// declare var swal: any;
// import Swal from 'sweetalert2/src/sweetalert2.js';
declare let $: any;


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  /* Add Event Form */
  eventdate!: string;
  successdata:any;
  addEventForm: FormGroup = new FormGroup({});
  submitted: any = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  //Add user form actions
  get f() { return this.addEventForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid and reset the validations
    this.addEventForm.get('title')?.setValidators([Validators.required]);
    this.addEventForm.get('title')?.updateValueAndValidity();
    if (this.addEventForm.invalid) {
      return;
    }
    
    //Form Submittion and send data via API
    if(this.submitted){
      // Initialize Params Object
      var myFormData = new FormData();
    
      // Begin assigning parameters
      myFormData.append('title', this.addEventForm.value.title);
      myFormData.append('startdate', this.eventdate);
    
      //post request
      //return this.http.post('http://localhost/save.php/', myFormData).subscribe((res: Response) => {
      return this.http.post('http://localhost/calen.php/', myFormData).subscribe(res => {
        $("#myModal").modal("hide");
        this.successdata = res;
        
        if(this.successdata['data'] = "success"){
          //sweetalert message popup
          Swal.fire({
            title: 'Hurray!!',
            text:   this.addEventForm.value.title+" event has been added successfully",
            icon: 'success'
          });
        }
        else{
          //sweetalert error message popup
          Swal.fire({
            title: 'OPPSS!!',
            text:   this.successdata['data'],
            //icon: 'alert'
            icon: 'warning'
          });
        }
      });
    }
    return;
  }

  title = 'angularadmintemplates';

  calendarOptions: CalendarOptions | undefined;
  ngOnInit(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      dateClick: this.handleDateClick.bind(this),
      events: [
        { title: 'event 1', date: '2020-11-05' },
        { title: 'event 2', date: '2020-06-30' }
      ]
    };

    //Add User form validations
    this.addEventForm = this.formBuilder.group({
      title: ['', [Validators.required]]
    });
  }

  //Show Modal with Forn on dayClick Event
  handleDateClick(arg: { dateStr: string; }) {
    $("#myModal").modal("show");
    $(".modal-title, .eventstarttitle").text("");
    $(".modal-title").text("Add Event at : "+arg.dateStr);
    $(".eventstarttitle").text(arg.dateStr);    
  }

  //Hide Modal PopUp and clear the form validations
  hideForm(){
    this.addEventForm.patchValue({ title : ""});
    this.addEventForm.get('title')?.clearValidators();
    this.addEventForm.get('title')?.updateValueAndValidity();
  }
  




  /*
  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: true, // initial value
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2022-04-01' },
      { title: 'event 2', date: '2022-04-02' }
    ]
  };

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }
  */
}
