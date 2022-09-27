import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  BASE_URL = "http://localhost:3000";

  constructor(private http: HttpClient) { };

   getClient(): Observable<Client[]> {
      const response = this.http.get<Client[]>(`${this.BASE_URL}/api/clients`).pipe(
        retry(2),
        catchError(this.handleError))

      return response
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(() => new Error());
}

}
