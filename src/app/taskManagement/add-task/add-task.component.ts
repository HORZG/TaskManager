import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  
  newTask = {
    task: '',
    description: '',
    Affectto : '',
    Deadline: '',

   
  
  }


constructor(  private taskservice : TaskService) {}

ngOnInit(){

  console.log(this.newTask)
  
}

addTask() {
this.taskservice.addTask(this.newTask).subscribe((data)=> { console.log(data)});
}
}
