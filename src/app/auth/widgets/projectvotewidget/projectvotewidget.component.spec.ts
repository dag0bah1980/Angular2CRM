import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectvotewidgetComponent } from './projectvotewidget.component';

describe('ProjectvotewidgetComponent', () => {
  let component: ProjectvotewidgetComponent;
  let fixture: ComponentFixture<ProjectvotewidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectvotewidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectvotewidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
