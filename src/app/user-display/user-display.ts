import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS } from '../user/USERS';

@Component({
  selector: 'app-user-display',
  imports: [],
  templateUrl: './user-display.html',
  styleUrl: './user-display.css'
})
export class UserDisplay implements OnInit{

  private route = inject(ActivatedRoute);
  private userId: string | null = null;
  private USERS_DATA = USERS;
  userData: any;

  ngOnInit() {
    console.log("UserDisplay component initialized");
    console.log("Activated Route:", this.route);
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log("User ID from route:", this.userId);

    if (this.userId) {
      const user = this.USERS_DATA.find(u => u.id === this.userId);
      console.log("User data:", user);
      this.userData = user || null;
    }
  }

}
