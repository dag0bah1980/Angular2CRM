import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofilelabeldialogComponent } from './userprofilelabeldialog.component';

describe('UserprofilelabeldialogComponent', () => {
  let component: UserprofilelabeldialogComponent;
  let fixture: ComponentFixture<UserprofilelabeldialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofilelabeldialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofilelabeldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
