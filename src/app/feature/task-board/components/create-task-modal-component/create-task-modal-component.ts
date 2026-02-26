import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../../shared/Interfaces/interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-task-modal-component',
  imports: [FormsModule],
  templateUrl: './create-task-modal-component.html',
  styleUrl: './create-task-modal-component.css',
})
export class CreateTaskModalComponent {
  @Input() statusId!: number;
  @Output() close = new EventEmitter<void>();
  @Output() taskCreated = new EventEmitter<Task>();

  task: Task = {
    id: Math.floor(Math.random() * 10000),
    title: '',
    priority: 'Low',
    storyPoints: 0,
    dueDate: new Date(),
    assignees: [],
    statusId: 0,
  };

  create() {
    const newTask: Task = {
      ...this.task,
      id: Math.floor(Math.random() * 10000),
      statusId: this.statusId,
      dueDate: this.task.dueDate ? new Date(this.task.dueDate) : new Date(),
    };

    this.taskCreated.emit(newTask);
  }
}
