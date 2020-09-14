import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  
  public getNews(){
    return this.httpClient.get('https://api.spacexdata.com/v4/crew');
  }

}