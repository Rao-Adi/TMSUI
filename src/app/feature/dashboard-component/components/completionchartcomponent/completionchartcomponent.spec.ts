import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Completionchartcomponent } from './completionchartcomponent';

describe('Completionchartcomponent', () => {
  let component: Completionchartcomponent;
  let fixture: ComponentFixture<Completionchartcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Completionchartcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Completionchartcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
