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

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(() => new Error());
}

}
