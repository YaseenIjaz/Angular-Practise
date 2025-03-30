import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { userData } from './user/user-data';
import {TasksComponent} from './tasks/tasks.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskManagementApp';
  users = userData;

  SelectedUserName:string = '';
  SelectedUserId: string = '';

  updateSelectedUser(name : string, id :string){
    this.SelectedUserName = name;
    this.SelectedUserId = id;
  }

}
