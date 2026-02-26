import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-taskboard-header',
  imports: [],
  templateUrl: './taskboard-header.html',
  styleUrl: './taskboard-header.css',
})
export class TaskboardHeader {
  @Output() openGantt = new EventEmitter<void>();

  openGanttChart() {
    this.openGantt.emit();
  }
}
