import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slide } from '../carousel/carousel.interface';
import { HttpClient } from '@angular/common/http';
import mockData from '../mock/data.json';



@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  
  // Defined URL
  //private baseUrl:any = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getAll(): any {
    // this should call a proper REST end point
    //this.http.get<any[]>(this.baseUrl);
    return mockData;
  }

}
