import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksbuttonComponent } from './tasksbutton.component';

describe('TasksbuttonComponent', () => {
  let component: TasksbuttonComponent;
  let fixture: ComponentFixture<TasksbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
