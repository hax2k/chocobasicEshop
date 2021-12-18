import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { University } from 'src/models/products';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  COUNTRY: string;


  constructor(private http: HttpClient) { }

  setCountry(country:string){
    this.COUNTRY = country;
  }

  getAllUniversity(country:string): Observable<University[]> {
    let URL = "http://universities.hipolabs.com/search?country="+country;
    return this.http.get<University[]>(URL)
  }

}
