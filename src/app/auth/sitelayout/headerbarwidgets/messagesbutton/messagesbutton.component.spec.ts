import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesbuttonComponent } from './messagesbutton.component';

describe('MessagesbuttonComponent', () => {
  let component: MessagesbuttonComponent;
  let fixture: ComponentFixture<MessagesbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
