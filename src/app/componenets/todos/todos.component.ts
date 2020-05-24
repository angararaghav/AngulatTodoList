import { Component, OnInit } from '@angular/core';
import {TodoService } from '../../service/Todo-Service.Service';
import { TodoEntity } from '../../models/TodoEntity';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:TodoEntity[];

  constructor( private todoService:TodoService) { }

  ngOnInit(): void {

     this.todoService.getTodoItems().subscribe(todos => { this.todos = todos;});

  }

deleteTodo(todo:TodoEntity)
{
  // Remove From UI
  this.todos = this.todos.filter(t => t.id !== todo.id);
  // Remove from server
  this.todoService.deleteTodo(todo).subscribe();
}

addTodo(todo:TodoEntity) {
  this.todoService.addTodo(todo).subscribe(todo => {   this.todos.push(todo);  });
}
}
