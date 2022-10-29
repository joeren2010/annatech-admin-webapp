import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }

  getCategories(){
    //asking httpClient to retrieve the data from categories.json
    return this.httpClient.get<any[]>("./../../assets/data/categories.json")
  }
}
