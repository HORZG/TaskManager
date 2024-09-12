import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
apiUrl = "http://localhost:3000/tasks";


  constructor(private http: HttpClient) { 
    
  }



  getTasks(){
    return this.http.get(this.apiUrl);
  
  }

 

  addTask(newTask:any) {
    console.log(newTask)
    return this.http.post<any[]>(`${this.apiUrl}addtask`, newTask);
  }


}
