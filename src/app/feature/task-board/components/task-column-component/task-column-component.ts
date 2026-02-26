import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column } from '../../../../shared/Interfaces/interface';
import { TaskCardComponent } from '../task-card-component/task-card-component';

@Component({
  selector: 'app-task-column-component',
  imports: [CommonModule, DragDropModule, TaskCardComponent],
  templateUrl: './task-column-component.html',
  styleUrl: './task-column-component.css',
})
export class TaskColumnComponent {
  @Input() column!: Column;

  @Output() taskDropped = new EventEmitter<any>();
  @Output() createTask = new EventEmitter<number>();
  @Output() viewTask = new EventEmitter<any>();

  task:any;
  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer !== event.container) {
      const task = event.previousContainer.data[event.previousIndex];

      this.taskDropped.emit({
        taskId: task.id,
        newStatusId: this.column.id,
      });

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  createNewTask() {
    this.createTask.emit(this.column.id);
  }
}
