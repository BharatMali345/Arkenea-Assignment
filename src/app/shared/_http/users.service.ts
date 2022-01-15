import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //Variables
  baseUrl: string = '../../../assets/json';

  constructor(private httpClient: HttpClient) {}

  //get the list of users

  getUsers(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/users.json`);
  }
}
