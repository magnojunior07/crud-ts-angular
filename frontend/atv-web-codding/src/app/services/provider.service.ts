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

  constructor(private http: HttpClient) { };

   getProvider(): Observable<Provider[]> {
      const response = this.http.get<Provider[]>(`${this.BASE_URL}/api/providers/`).pipe(
        retry(2),
        catchError(this.handleError))

      return response
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(() => new Error());
}

}
