import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { LIST } from './todo-list';

@Injectable()
export class ItemService {

    getItems(): Todo[] {
        return LIST;
    }

}