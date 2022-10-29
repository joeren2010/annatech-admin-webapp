import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  getProjects(){
    //asking httpClient to retrieve the data from projects.json
    return this.httpClient.get<any[]>("./../../assets/data/projects.json")
  }
}
