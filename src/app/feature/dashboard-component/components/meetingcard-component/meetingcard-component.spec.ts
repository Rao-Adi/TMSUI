import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingcardComponent } from './meetingcard-component';

describe('MeetingcardComponent', () => {
  let component: MeetingcardComponent;
  let fixture: ComponentFixture<MeetingcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingcardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
