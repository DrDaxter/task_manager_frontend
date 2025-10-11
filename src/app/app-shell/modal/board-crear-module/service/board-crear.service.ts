import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Project {
  id?: number;
  projectName: string;
  description: string;
  userId?: number; // opcional, si lo manejas desde el backend
}
@Injectable({
  providedIn: 'root'
})
export class BoardCrearService {
private apiUrl = 'https://task-manager-backend-akjw.onrender.com/api/Project';
constructor(private http: HttpClient) { }
  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }
}
