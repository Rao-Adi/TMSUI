import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTimelineGanttcomponent } from './project-timeline-ganttcomponent';

describe('ProjectTimelineGanttcomponent', () => {
  let component: ProjectTimelineGanttcomponent;
  let fixture: ComponentFixture<ProjectTimelineGanttcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTimelineGanttcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTimelineGanttcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
