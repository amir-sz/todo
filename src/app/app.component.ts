import { Component } from '@angular/core';
import {TodoComponent} from './todo-list.component';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  AppTitle = 'Todo List App';
  items: Todo[];
  selectedTodo: Todo;
 /* item: Todo = {
      id: 1,
      title: 'Learn Angular'
  }*/
  item = 'Learn Angular';
}
