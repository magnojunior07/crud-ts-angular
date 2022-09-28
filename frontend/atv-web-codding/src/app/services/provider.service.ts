import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Provider } from '../models/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  BASE_URL = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }


  constructor(private http: HttpClient) { };

   getProvider(): Observable<Provider[]> {
      const response = this.http.get<Provider[]>(`${this.BASE_URL}/api/providers/`).pipe(
        retry(2),
        catchError(this.handleError))

      return response
  }

  getProviderById(id: number): Observable<Provider> {
    const response = this.http.get<Provider>(`${this.BASE_URL}/api/providers/${id}`).pipe(
      retry(2),
      catchError(this.handleError))

    return response
}

  createProvider(provider: Provider): Observable<Provider> {
    const created_provider = this.http.post<Provider>(`${this.BASE_URL}/api/providers`, JSON.stringify(provider), this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    )

    return created_provider
  }

  deleteProvider(provider:  Provider) {
    const deleted_provider = this.http.delete(`${this.BASE_URL}/api/providers/${provider.id}`, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )

    return deleted_provider
  }

  editProvider(provider: Provider): Observable<Provider>{
    const updated_provider = this.http.put<Provider>(`${this.BASE_URL}/api/providers/${provider.id}`, JSON.stringify(provider), this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )

    return updated_provider
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(() => new Error());
}

}
