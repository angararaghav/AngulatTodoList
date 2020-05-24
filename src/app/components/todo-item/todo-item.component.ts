import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {TodoService } from '../../service/Todo-Service.Service';

import { TodoEntity } from '../../models/TodoEntity';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoitem:TodoEntity;
  @Output() deleteTodo: EventEmitter<TodoEntity> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }


  //set dynamic classes
  setClasses() {
    let classes = {
      todo:true,
      'is-complete':this.todoitem.completed
    }
    return classes;
  }

  onToggle(todoitem){
    console.log('toggle');
    console.log(todoitem)
    //Toggle in UI
    todoitem.completed = !todoitem.completed;
    //Toggle on server
    this.todoService.togggleCompleted(todoitem).subscribe(todoitem=>console.log(todoitem))
    console.log(todoitem)
  }
 onDelete(todoitem){
  console.log('delete');
  this.deleteTodo.emit(todoitem);
 }

}
