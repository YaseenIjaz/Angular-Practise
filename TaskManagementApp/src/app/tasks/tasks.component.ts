import { Component , EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';

interface uniqueTasks {
  id : string;
  userId : string;
  title : string ;
  summary : string;
  dueDate : string;
}

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})



export class TasksComponent {
  
  @Input({required:true} ) userName !: string;
  @Input() userId !: string;
  @Input() task !: uniqueTasks;


  tasks = [ 
    {
      "id": "t1", 
      "userId": "u2", 
      "title": "Haster Angular", 
      "summary": "Learn all the basic and advanced features of Angular & how to apply them.", 
      "dueDate": "2025-12-31"
    },

    {
      "id": "t2", 
      "userId": "u3", 
      "title": "Build first prototype", 
      "summary": "Build a first prototype of the online shop website.", 
      "dueDate": "2025-05-31"
    },

    {
      "id": "t3", 
      "userId": "u3", 
      "title": "Prepare issue template", 
      "summary": "Prepare and describe an issue template which will help with project management.", 
      "dueDate": "2025-06-15"
    },

    {
      "id": "t4", 
      "userId": "u1", 
      "title": "Research UI Trends", 
      "summary": "Analyze and report on the latest UI/UX design trends.", 
      "dueDate": "2025-07-10"
    },

    {
      "id": "t5", 
      "userId": "u4", 
      "title": "Optimize Database Queries", 
      "summary": "Improve the performance of database queries for the backend service.", 
      "dueDate": "2025-09-01"
    },

    {
      "id": "t6", 
      "userId": "u5", 
      "title": "Create Marketing Strategy", 
      "summary": "Develop a comprehensive marketing strategy for the new product launch.", 
      "dueDate": "2025-08-15"
    },

    {
      "id": "t7", 
      "userId": "u6", 
      "title": "Implement Authentication", 
      "summary": "Set up user authentication and authorization in the application.", 
      "dueDate": "2025-10-20"
    },

    {
      "id": "t8", 
      "userId": "u1", 
      "title": "Test Mobile App", 
      "summary": "Perform thorough testing on the mobile application and report issues.", 
      "dueDate": "2025-11-05"
    },

    {
      "id": "t9", 
      "userId": "u4", 
      "title": "Refactor API Code", 
      "summary": "Clean up and optimize API code for better maintainability.", 
      "dueDate": "2025-09-30"
    },

    {
      "id": "t10", 
      "userId": "u5", 
      "title": "Conduct User Interviews", 
      "summary": "Interview potential users to gather insights on usability.", 
      "dueDate": "2025-08-25"
    },

    {
      "id": "t11", 
      "userId": "u6", 
      "title": "Deploy Staging Server", 
      "summary": "Set up and deploy a staging environment for testing new features.", 
      "dueDate": "2025-07-20"
  },

  {
      "id": "t12", 
      "userId": "u2", 
      "title": "Write Documentation", 
      "summary": "Document all API endpoints and integration details.", 
      "dueDate": "2025-08-30"
  },

  {
      "id": "t13", 
      "userId": "u3", 
      "title": "Design Homepage Layout", 
      "summary": "Create wireframes and a design for the new homepage.", 
      "dueDate": "2025-06-25"
  },

  {
      "id": "t14", 
      "userId": "u1", 
      "title": "Develop Dashboard Analytics", 
      "summary": "Implement an analytics dashboard for user insights.", 
      "dueDate": "2025-10-10"
  },

  {
      "id": "t15", 
      "userId": "u5", 
      "title": "Improve SEO Ranking", 
      "summary": "Optimize website content and structure to improve SEO.", 
      "dueDate": "2025-09-15"
  }
]
 
 get selectedUserTasks(){
  return this.tasks.filter((task) => task.userId === this.userId);
 }
  
 

  handleComplete(event : string){
    console.log("Task Complete:", event);}
}
