import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsbuttonComponent } from './appointmentsbutton.component';

describe('AppointmentsbuttonComponent', () => {
  let component: AppointmentsbuttonComponent;
  let fixture: ComponentFixture<AppointmentsbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
