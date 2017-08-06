import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofilelabelComponent } from './userprofilelabel.component';

describe('UserprofilelabelComponent', () => {
  let component: UserprofilelabelComponent;
  let fixture: ComponentFixture<UserprofilelabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofilelabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofilelabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
