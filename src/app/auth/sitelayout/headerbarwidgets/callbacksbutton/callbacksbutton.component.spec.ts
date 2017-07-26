import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbacksbuttonComponent } from './callbacksbutton.component';

describe('CallbacksbuttonComponent', () => {
  let component: CallbacksbuttonComponent;
  let fixture: ComponentFixture<CallbacksbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallbacksbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbacksbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
