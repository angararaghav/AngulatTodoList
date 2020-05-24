import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
name:string = 'Todo List';

constructor(){
  console.log(123);
  this.name = "Ted's";
  this.changeName ("Jhon wick");
}

changeName(name:string):void
{
  this.name = name;
}

}
