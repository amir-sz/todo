import { Component, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'item-detail',
    template: `
    <div *ngIf="item">
    <h2>{{item.title}}!</h2>
    <div><label>Id: </label>{{item.id}}</div>
    <div>
        <label>Description: </label>
        {{item.title}}
    </div>
    </div>
    `
})

export class TodoDetailComponent {
    @Input() item: Todo;
}