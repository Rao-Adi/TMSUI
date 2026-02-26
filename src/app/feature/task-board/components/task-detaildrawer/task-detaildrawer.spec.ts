import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetaildrawer } from './task-detaildrawer';

describe('TaskDetaildrawer', () => {
  let component: TaskDetaildrawer;
  let fixture: ComponentFixture<TaskDetaildrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDetaildrawer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDetaildrawer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
