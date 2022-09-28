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

  httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }

  constructor(private http: HttpClient) { };

   getClient(): Observable<Client[]> {
      const response = this.http.get<Client[]>(`${this.BASE_URL}/api/clients`).pipe(
        retry(2),
        catchError(this.handleError))

      return response
  }
   getClientById(id: number): Observable<Client> {
      const response = this.http.get<Client>(`${this.BASE_URL}/api/clients/${id}`).pipe(
        retry(2),
        catchError(this.handleError))

      return response
  }

  createClient(client: Client): Observable<Client> {
      const created_client = this.http.post<Client>(`${this.BASE_URL}/api/clients`, JSON.stringify(client), this.httpOptions).pipe(
        retry(2),
        catchError(this.handleError)
      )

      return created_client
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(() => new Error());
}

}
