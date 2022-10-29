import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {
  Save(arg0: any) {
    throw new Error('Method not implemented.');
  }
  
  private urlApi: string = 'https://fakestoreapi.com/projects';
  private urlLoc: string = 'http://localhost:3000/meetings';
  private urlDel: string = 'http://localhost:3000/meetings/';
  private urlPut: string = 'http://localhost:3000/meetings/';
  private urlCal: string = 'http://localhost:3000/calen.php/';
  private urlCom: string = './../../assets/data/meetingsCom.json';

  constructor(private http: HttpClient) { }

  getMeetings(): Observable<any>{
    //asking http to retrieve data from api server
    //return this.http.get<any[]>(this.urlApi)

    //asking http to retrieve data from local server
    return this.http.get<any[]>(this.urlLoc)

    //asking http to retrieve data from my computer
    //return this.http.get<any[]>(this.urlCom)
  }


  delMeetings(meeting: any): Observable<any>{
    //asking http to delete data from api server
    //return this.http.delete<any[]>(this.urlDel+meeting)

    //asking http to delete data from local server
    return this.http.delete<any[]>(this.urlDel+meeting)

    //asking http to delete data from my computer
    //return this.http.delete<any[]>(this.urlDel+meeting)
  }   



  postMeetings(postData: any): Observable<any>{
    //console.log(postData);
    //asking http to retrieve data from api server
    //return this.http.post<any>(this.urlApi, postData);
    
    //asking http to retrieve data from local server
    return this.http.post<any[]>(this.urlLoc, postData);
    
    //asking http to retrieve data from my computer
    //return this.http.post<any>(this.urlCom, postData);
  }


  patchMeetings(meeting: any, patchData: any): Observable<any>{
    //asking http to retrieve data from api server
    //return this.http.patch<any[]>(this.urlApi + meetingId, data)

    //asking http to retrieve data from local server
    return this.http.patch<any[]>(this.urlLoc+meeting, patchData)

    //asking http to retrieve data from my computer
    //return this.http.patch<any[]>(this.urlCom + meetingId, data)
  }


  // putMeetings(putData: any): Observable<any>{
  //   //asking http to retrieve data from api server
  //   //return this.http.put<any[]>(this.urlApi + meetingId, data)

  //   //asking http to retrieve data from local server
  //   return this.http.put<any[]>(this.urlLoc, putData)

  //   //asking http to retrieve data from my computer
  //   //return this.http.put<any[]>(this.urlCom + meetingId, data)
  // }


  postCalen(calData: any): Observable<any>{
    //console.log(calData);
    //asking http to retrieve data from api server
    //return this.http.post<any>(this.urlCal, calData);
    
    //asking http to retrieve data from local server
    return this.http.post<any[]>(this.urlCal, calData);
    
    //asking http to retrieve data from my computer
    //return this.http.post<any>(this.urlCal, calData);
  }  

}

