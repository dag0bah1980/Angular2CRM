import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritydropdownwidgetComponent } from './prioritydropdownwidget.component';

describe('PrioritydropdownwidgetComponent', () => {
  let component: PrioritydropdownwidgetComponent;
  let fixture: ComponentFixture<PrioritydropdownwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrioritydropdownwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioritydropdownwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
