import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusesdashboardComponent } from './statusesdashboard.component';

describe('StatusesdashboardComponent', () => {
  let component: StatusesdashboardComponent;
  let fixture: ComponentFixture<StatusesdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusesdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusesdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
