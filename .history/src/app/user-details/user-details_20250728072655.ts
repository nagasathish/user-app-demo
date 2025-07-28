import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { User } from '../services/user';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails {
  @Input() firstName!: string;
  @Input() selectedUser: any;

  @Output() lnameEvent = new EventEmitter<string>();
  @Output() toParent = new EventEmitter<string>();
  IMAGE_URL = 'https://media.istockphoto.com/id/1973365581/vector/sample-ink-rubber-stamp.jpg?s=612x612&w=0&k=20&c=_m6hNbFtLdulg3LK5LRjJiH6boCb_gcxPvRLytIz0Ws=';

  sendLname() {
    this.lnameEvent.emit('teja');
  }

  sendToParent() {
    this.toParent.emit('From Child Component');
  }

  @Input() someNum:number | undefined;

  countryCode: string = 'US';


  constructor(private userService: User) {

  }
 
}

