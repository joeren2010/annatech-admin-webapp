import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  url ='this.http.post<any>("./../../assets/data/calen.json");'


  constructor(private http: HttpClient) { }

  //post request method
  meeting(mtgData: any){
    //return this.http.post<any[]>('./../../assets/data/calen.json', mtgData);
    return this.http.post<any>(this.url, mtgData);
  }

}

