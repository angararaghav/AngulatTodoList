import { Injectable } from '@angular/core';
import { HttpClientModule,HttpHeaders, HttpClient } from '@angular/common/http';
import { TodoEntity } from '../models/TodoEntity';

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}



@Injectable({
  providedIn: 'root'
})
export class TodoService {

todosUrl:string =  'https://jsonplaceholder.typicode.com/todos';
todosLimit:string = '?_limit=10';

  constructor(private http:HttpClient) { }



    getTodoItems():Observable<TodoEntity[]>{

    return this.http.get<TodoEntity[]>(`${this.todosUrl}${this.todosLimit}`);

    }

    togggleCompleted(todoItem: TodoEntity):Observable<any> {

      const url = `${this.todosUrl}/${todoItem.id}`;

      return this.http.put(url, todoItem,httpOptions);

    }

    deleteTodo(todo:TodoEntity):Observable<TodoEntity> {
      const url = `${this.todosUrl}/${todo.id}`;
      return this.http.delete<TodoEntity>(url, httpOptions);
    }

      // Add Todo
    addTodo(todo:TodoEntity):Observable<TodoEntity> {
     return this.http.post<TodoEntity>(this.todosUrl, todo, httpOptions);
    }

}

