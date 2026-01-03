import { Injectable } from '@angular/core';

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
