import { Component, Input, Output, EventEmitter } from '@angular/core';
import { userData } from './user-data';


interface User{
  id : string;
  name : string;
  avatar : string;
}



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
}) 

export class UserComponent {
   
  @Input({required : true}) user !: User;

   get imagePath(){
    return `assets/users/`+this.user.avatar;
   }

   @Output() userSelect = new EventEmitter<{ name: string; id: string }>();
   
   onUserSelect(){
    this.userSelect.emit({ name: this.user.name, id: this.user.id });
   }
   
}
