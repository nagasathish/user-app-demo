import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {

  getUserDetails() {
    return {
      userName: "Test User"
    }
  }
}
