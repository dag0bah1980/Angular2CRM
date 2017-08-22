import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuswidgetComponent } from './statuswidget.component';

describe('StatuswidgetComponent', () => {
  let component: StatuswidgetComponent;
  let fixture: ComponentFixture<StatuswidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatuswidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuswidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
