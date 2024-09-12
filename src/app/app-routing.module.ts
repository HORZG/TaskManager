import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './taskManagement/add-task/add-task.component';
import { MyTasksComponent } from './tasks/my-tasks/my-tasks.component';

const routes: Routes = [
  {path : "", component:TasksComponent},
  {path:"addtask", component: AddTaskComponent},
  {
    path:"mytasks",component:MyTasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
