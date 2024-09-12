import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './taskManagement/add-task/add-task.component';
import { MyTasksComponent } from './tasks/my-tasks/my-tasks.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { provideHttpClient, withFetch } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent,
    AddTaskComponent,
    MyTasksComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule,
  
 
   
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
