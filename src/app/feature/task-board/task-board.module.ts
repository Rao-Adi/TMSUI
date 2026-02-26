import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { TaskBoardComponent } from './components/task-board-component/task-board-component';
import { TaskColumnComponent } from './components/task-column-component/task-column-component';
import { TaskCardComponent } from './components/task-card-component/task-card-component';
import { CreateTaskModalComponent } from './components/create-task-modal-component/create-task-modal-component';
import { TaskBoardRoutingModule } from './task-baord-routing.module';
// import { TaskBoardRoutingModule } from './task-baord-routing.module';
 
@NgModule({
  declarations: [ 
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    TaskBoardRoutingModule, 

    TaskBoardComponent,
    TaskColumnComponent,
    TaskCardComponent,
    CreateTaskModalComponent
  ]
})
export class TaskBoardModule { }