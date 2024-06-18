import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../app/interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/users';  

  constructor(private http: HttpClient) {}

  signIn(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
