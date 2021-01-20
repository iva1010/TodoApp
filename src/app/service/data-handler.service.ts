import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {Task} from '../model/Task';
import {Subject} from 'rxjs';
import {combineAll} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  taskSubject = new Subject<Task[]>();

  constructor() {
  }

  getCategoties(): Category[] {
    return TestData.categories;
  }

  // tslint:disable-next-line:typedef
  fillTasks() {
    this.taskSubject.next(TestData.tasks);
  }

  // tslint:disable-next-line:typedef
  fillTaskByCategory(category: Category) {
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.taskSubject.next(tasks);
  }

}
