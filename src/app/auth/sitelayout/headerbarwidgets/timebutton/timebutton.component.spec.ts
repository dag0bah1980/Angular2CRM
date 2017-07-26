import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimebuttonComponent } from './timebutton.component';

describe('TimebuttonComponent', () => {
  let component: TimebuttonComponent;
  let fixture: ComponentFixture<TimebuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimebuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
