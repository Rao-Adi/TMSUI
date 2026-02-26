import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../../shared/Interfaces/interface';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-task-card-component',
  imports: [CommonModule],
  templateUrl: './task-card-component.html',
  styleUrl: './task-card-component.css',
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() viewTask = new EventEmitter<any>();

  openTask() {
    this.viewTask.emit(this.task);
  }
}
