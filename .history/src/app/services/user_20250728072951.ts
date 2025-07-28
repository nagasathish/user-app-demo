import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {

  getUserName() {
    return "Test User"
  }
}
