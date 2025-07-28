import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  getUserName() {
    return "Test User"
  }

  getUserPassword() {
    return "Test Password"
  }
}
