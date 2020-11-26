import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestHandlerService {
  constructor(private http: HttpClient) {}

  getMockApiData(): Observable<any> {
    return this.http.get('/user');
  }
}
