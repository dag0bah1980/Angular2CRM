import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsbuttonComponent } from './notificationsbutton.component';

describe('NotificationsbuttonComponent', () => {
  let component: NotificationsbuttonComponent;
  let fixture: ComponentFixture<NotificationsbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
