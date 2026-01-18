import { Injectable } from '@angular/core';
import { UserEntity } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly USER_ID_KEY = 'user_kolekt_user_id';

  constructor() {}

  getUserId(): string {
    let userId = localStorage.getItem(this.USER_ID_KEY);
    if (!userId) {
      userId = this.generateUUID();
      localStorage.setItem(this.USER_ID_KEY, userId);
    }
    return userId;
  }
  
  private generateUUID(): string {
    return 'user-' + Math.random().toString(36).substring(2, 15) + '-' + Date.now();
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
  constructor(private http: HttpClient){}

  loginUser(email: string, password: string) : Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/auth/login`, {email, password});
  }

  register(user: UserEntity) : Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/auth/register`, {user});
  }
}