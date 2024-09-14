import { Component} from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
tasks : any=[];

constructor(private taskservice : TaskService){};

ngOnInit(){
  return this.taskservice.getTasks().subscribe(((data:any)=> 
    {this.tasks =data}
));

}

}
