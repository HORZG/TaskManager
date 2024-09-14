import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}tasks`);
  }

  addTask(newTask: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}addtask`, newTask);
  }
}
