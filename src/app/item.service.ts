import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { LIST } from './todo-list';

@Injectable()
export class ItemService {

    getItems(): Promise<Todo[]> {
        return Promise.resolve(LIST);
    }

}