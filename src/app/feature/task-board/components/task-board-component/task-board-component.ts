import { Component } from '@angular/core';
import { Column, Task } from '../../../../shared/Interfaces/interface';
import { FormsModule } from '@angular/forms';
import { CreateTaskModalComponent } from '../create-task-modal-component/create-task-modal-component';
import { TaskColumnComponent } from '../task-column-component/task-column-component';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskboardHeader } from '../taskboard-header/taskboard-header';
import { GanttChart } from '../gantt-chart/gantt-chart';
import { TaskDetaildrawer } from '../task-detaildrawer/task-detaildrawer';

@Component({
  selector: 'app-task-board-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    TaskColumnComponent,
    CreateTaskModalComponent,
    TaskboardHeader,
    GanttChart,
    TaskDetaildrawer,
  ],
  templateUrl: './task-board-component.html',
  styleUrl: './task-board-component.css',
})
export class TaskBoardComponent {
  columns: Column[] = [];
  showModal = false;
  selectedStatusId!: number;
  showGantt = false;

  selectedTask: any;
  showDrawer = false;

  seedDummyTasks() {
    this.columns = [
      {
        id: 1,
        name: 'To Do',
        tasks: [
          {
            id: 1,
            title: 'Design Login UI',
            priority: 'High',
            storyPoints: 5,
            dueDate: new Date(2026, 1, 10),
            assignees: [],
            statusId: 1,
          },
          {
            id: 2,
            title: 'Setup Project Structure',
            priority: 'Medium',
            storyPoints: 3,
            dueDate: new Date(2026, 1, 6),
            assignees: [],
            statusId: 1,
          },
        ],
      },

      {
        id: 2,
        name: 'In Progress',
        tasks: [
          {
            id: 3,
            title: 'API Integration',
            priority: 'High',
            storyPoints: 8,
            dueDate: new Date(2026, 1, 18),
            assignees: [],
            statusId: 2,
          },
          {
            id: 4,
            title: 'Kanban Board UI',
            priority: 'Low',
            storyPoints: 4,
            dueDate: new Date(2026, 1, 14),
            assignees: [],
            statusId: 2,
          },
        ],
      },

      {
        id: 3,
        name: 'Done',
        tasks: [
          {
            id: 5,
            title: 'Database Schema',
            priority: 'Medium',
            storyPoints: 2,
            dueDate: new Date(2026, 1, 2),
            assignees: [],
            statusId: 3,
          },
        ],
      },

      {
        id: 4,
        name: 'Backlog',
        tasks: [
          {
            id: 6,
            title: 'User Role Management',
            priority: 'Low',
            storyPoints: 6,
            dueDate: new Date(2026, 1, 22),
            assignees: [],
            statusId: 4,
          },
        ],
      },
    ];
  }

  ngOnInit() {
    this.columns = [
      { id: 1, name: 'To Do', tasks: [] },
      { id: 2, name: 'In Progress', tasks: [] },
      { id: 3, name: 'Done', tasks: [] },
      { id: 4, name: 'Backlog', tasks: [] },
    ];
    this.seedDummyTasks();
  }

  onTaskDropped(data: any) {
    console.log('Status Changed', data);
  }

  openCreateTask(statusId: number) {
    this.selectedStatusId = statusId;
    this.showModal = true;
  }

  addTask(task: Task) {
    const col = this.columns.find((x) => x.id == task.statusId);
    col?.tasks.push(task);
    this.showModal = false;
  }

  openDrawer(task: any) {
    this.selectedTask = task;
    this.showDrawer = true;
  }

  getAllTasks() {
    return this.columns
      .flatMap((col) => col.tasks)
      .filter((task) => task.dueDate)
      .map((task: any) => {
        const end = new Date(task.dueDate);

        const start = new Date(end);
        start.setDate(start.getDate() - (task.storyPoints || 2));

        return {
          title: task.title,
          startDate: start,
          endDate: end,
        };
      });
  }
}
