import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const List: Todo[] = [
        { id: 1, title: 'Learn Angular' },
        { id: 2, title: 'Do tasks' },
      
      ];
    return {list};
  }
}