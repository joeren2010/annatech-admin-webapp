import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private httpClient: HttpClient) { }

  getClients(){
    //asking httpClient to retrieve the data from clients.json
    return this.httpClient.get<any[]>("./../../assets/data/clients.json")
  }
}
