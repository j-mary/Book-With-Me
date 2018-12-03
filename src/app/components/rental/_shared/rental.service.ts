import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  readonly baseUrl = 'http://localhost:3000/api/v1/rentals';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Rental[]> {
    return this.http.get<Rental[]>(this.baseUrl)
  }

  getOne(id: string): Observable<Rental> {
    return this.http.get<Rental>(`${this.baseUrl}/${id}`)
  }

}
