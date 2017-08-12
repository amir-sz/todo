import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoDetailComponent } from './todo-detail.component';
import { ItemService } from './item.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemService]
})
export class AppComponent implements OnInit {
  AppTitle = 'Todo List App';
  items: Todo[];
  selectedItem: Todo;

  onSelect(item: Todo): void {
    this.selectedItem = item;
  }

  constructor(private itemService: ItemService) { }

  getItems(): void {
    this.items = this.itemService.getItems();
  }

  ngOnInit(): void {
    this.getItems();
  }
  
}