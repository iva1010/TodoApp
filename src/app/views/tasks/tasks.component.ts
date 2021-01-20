import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Task} from '../../model/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor(private dataHndler: DataHandlerService) { }

  ngOnInit(): void {
    this.dataHndler.taskSubject.subscribe(tasks => this.tasks = tasks);
  }

}
