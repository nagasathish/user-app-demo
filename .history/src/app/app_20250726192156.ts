import { Component } from '@angular/core';
import { HeaderComponent } from './header/Header.Component';
import { User } from './user/user';
import { UserDetails } from './user-details/user-details';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, User, UserDetails],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  fromParent = 'Test Value from Parent';
  myFirstName = 'Venkatesh';
  selectedUser: any = null;
  printTeja:any=null;


  receiveUser(user: any) {
    this.selectedUser = user; 
  }

  receiveData(data: string) {
    console.log("Received from child:", data);
    this.printTeja=data;
  }
 


}



