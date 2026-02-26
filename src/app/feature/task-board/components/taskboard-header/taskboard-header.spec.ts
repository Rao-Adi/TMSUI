import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskboardHeader } from './taskboard-header';

describe('TaskboardHeader', () => {
  let component: TaskboardHeader;
  let fixture: ComponentFixture<TaskboardHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskboardHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskboardHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
