import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetaskComponent } from './createtask.component';

describe('CreatetaskComponent', () => {
  let component: CreatetaskComponent;
  let fixture: ComponentFixture<CreatetaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
