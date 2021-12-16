import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { University } from 'src/models/products';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  COUNTRY: string = 'canada';
  URL: string = `http://universities.hipolabs.com/search?country=${this.COUNTRY}`;

  constructor(private http: HttpClient) { }

  getAllUniversity(): Observable<University[]> {
    return this.http.get<University[]>(this.URL)
  }

}
