import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstatusesComponent } from './liststatuses.component';

describe('ListstatusesComponent', () => {
  let component: ListstatusesComponent;
  let fixture: ComponentFixture<ListstatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListstatusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListstatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
