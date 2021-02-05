import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
import * as faker from 'faker/locale/zh_TW';

interface UserData {
  name: string;
  age: number;
  address: string;
  email: string;
  birth: string;
}

@Injectable({
  providedIn: 'root',
})
export class RestHandlerService {
  // for rxjs to return mock data.
  userCard: UserData = {
    name: `${faker.name.lastName()} ${faker.name.firstName()}`,
    age: faker.random.number(),
    address:
      `${faker.address.cityPrefix()} ${faker.address.citySuffix()}` +
      `${faker.address.city()} ${faker.address.streetAddress()}`,
    email: faker.internet.email(),
    birth: `${faker.date.past()}`,
  };
  constructor(private http: HttpClient) {}

  /**
   * Trigger api to get user data.
   * @param id : user id only 1 or 2.
   */
  getMockApiData(id?: number): Observable<any> {
    return this.http.get(`/user?id=${id}`);
  }

  /**
   * Return user data if id exist.
   * @param id : user id.
   */
  mockRXJSAPI(id?: number): Observable<any> {
    if (id) {
      return of(this.userCard).pipe(delay(3000));
    } else {
      return of({ result: 'Failed', reason: 'Can not find the user' });
    }
  }
}
