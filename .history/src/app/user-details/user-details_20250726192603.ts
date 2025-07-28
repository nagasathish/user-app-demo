import { Component, Input, Output,EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails {
  @Input() firstName!: string;
  @Input() selectedUser: any;

  @Output() lnameEvent = new EventEmitter<string>();
  @Output() toParent = new EventEmitter<string>();

  sendLname() {
    this.lnameEvent.emit('teja');
  }

  sendToParent() {
    this.toParent.emit('From Child Component');
  }

  @Input() someNum:number | undefined;

}

