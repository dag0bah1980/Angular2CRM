import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestatusComponent } from './createstatus.component';

describe('CreatestatusComponent', () => {
  let component: CreatestatusComponent;
  let fixture: ComponentFixture<CreatestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatestatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
