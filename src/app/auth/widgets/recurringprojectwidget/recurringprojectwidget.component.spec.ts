import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringprojectwidgetComponent } from './recurringprojectwidget.component';

describe('RecurringprojectwidgetComponent', () => {
  let component: RecurringprojectwidgetComponent;
  let fixture: ComponentFixture<RecurringprojectwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurringprojectwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringprojectwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
