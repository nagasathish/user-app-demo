import { Component, Output, EventEmitter, Input } from '@angular/core';
import { USERS } from './USERS';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  users = USERS;
  @Input() childValue: string | undefined;

  @Output() userSelected = new EventEmitter<any>();

  onUserClick(user: any) {
    this.userSelected.emit(user);  // Send to App
  }
}

