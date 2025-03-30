import { Component,Input, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

@Input() task !: any;
@Output() complete = new EventEmitter<string>();
  

onComplete(){
  console.log("task complete");
  this.complete.emit(this.task.id);

}
  
}
