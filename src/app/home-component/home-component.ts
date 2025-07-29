import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {
 fromParent = "Test Value from Parent";
  recievedValue: string = "";
  myFirstName = "Venkatesh";
  selectedUser: any = null;
  printTeja: any = null;
  userName: string = '';

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userName = this.userService.getUserName();
  }

  receiveUser(user: any) {
    this.selectedUser = user;
  }

  receiveData(data: string) {
    console.log("Received from child:", data);
    this.printTeja = data;
  }

  receiveChildData(data: string) {
    this.recievedValue = data;
  }
}
