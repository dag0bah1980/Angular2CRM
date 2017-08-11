import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecttypedropdownwidgetComponent } from './projecttypedropdownwidget.component';

describe('ProjecttypedropdownwidgetComponent', () => {
  let component: ProjecttypedropdownwidgetComponent;
  let fixture: ComponentFixture<ProjecttypedropdownwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjecttypedropdownwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjecttypedropdownwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
