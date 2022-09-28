import { NgForm } from '@angular/forms';
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

  deleteClient(client:  Client) {
    const deleted_client = this.http.delete(`${this.BASE_URL}/api/clients/${client.id}`, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )

    return deleted_client
  }

  editClient(client: Client): Observable<Client>{
    const updated_client = this.http.put<Client>(`${this.BASE_URL}/api/clients/${client.id}`, JSON.stringify(client), this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )

    return updated_client
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(() => new Error());
}

}
