import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-detaildrawer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-detaildrawer.html',
  styleUrls: ['./task-detaildrawer.css'], 
  encapsulation: ViewEncapsulation.Emulated,
})
export class TaskDetaildrawer {
  @Input() task: any;
  @Output() close = new EventEmitter<void>();

  comment = '';
  comments: string[] = [];

  addComment() {
    if (this.comment) {
      this.comments.push(this.comment);
      this.comment = '';
    }
  }
}
