
import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {
  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Еда'},
    {id: 7, title: 'Финансы'},
    {id: 8, title: 'Гаджеты'},
    {id: 9, title: 'Здоровье'},
    {id: 10, title: 'Автомобиль'},
    {id: 11, title: 'Ремонт'},
  ];
  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 2, title: 'Средний', color: '#85D1B2'},
    {id: 3, title: 'Высокий', color: '#F1828D'},
    {id: 4, title: 'Очень высокий', color: '#F1128D'},
  ];
  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залить бензин полный бак',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2019-04-10'),
    },
    {
      id: 2,
      title: 'Передать отчеты',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2019-04-11'),
    },
    {
      id: 3,
      title: 'Убраться в комнате',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1],
    },
  ];




}
