import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstatusComponent } from './editstatus.component';

describe('EditstatusComponent', () => {
  let component: EditstatusComponent;
  let fixture: ComponentFixture<EditstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
