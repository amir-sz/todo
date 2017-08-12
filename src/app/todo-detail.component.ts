import { Component, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'item-detail',
    template: `
    <div *ngIf="item">
    <h2>{{item.title}}!</h2>
    <div><label>id: </label>{{item.id}}</div>
    <div>
        <label>title: </label>
        <input [(ngModel)]="item.title" placeholder="Title"/>
    </div>
    </div>
    `
})

export class TodoDetailComponent {
    @Input() item: Todo;
}