import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieContentsComponent } from './cookie-contents.component';

describe('CookieContentsComponent', () => {
  let component: CookieContentsComponent;
  let fixture: ComponentFixture<CookieContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookieContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
