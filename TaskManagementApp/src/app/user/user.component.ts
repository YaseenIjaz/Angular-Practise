import { Component } from '@angular/core';
import { userData } from './user-data';

const randomIndex = Math.floor(Math.random()* userData.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   selectedUser = userData[randomIndex];

   get imagePath(){
    return `assets/users/`+this.selectedUser.avatar;
   }
}
