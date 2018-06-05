import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<Todo[]>('/api/todos');
  }

  getTodo(id: number) {
    return this.http.get<Todo>(`/api/todos/${id}`);
  }
}
