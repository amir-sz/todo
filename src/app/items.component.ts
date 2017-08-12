import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoDetailComponent } from './todo-detail.component';
import { ItemService } from './item.service';


@Component({
  selector: 'my-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items: Todo[];
  selectedItem: Todo;

  onSelect(item: Todo): void {
    this.selectedItem = item;
  }

  constructor(private itemService: ItemService) { }

  getItems(): void {
    this.itemService.getItems().then(items => this.items = items);
  }

  ngOnInit(): void {
    this.getItems();
  }
  
}