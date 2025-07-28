import { Component } from "@angular/core";
import { HeaderComponent } from "./header/Header.Component";
import { User } from "./user/user";
import { UserDetails } from "./user-details/user-details";
import { FormsModule } from '@angular/forms';
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, User, UserDetails, FormsModule],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
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
