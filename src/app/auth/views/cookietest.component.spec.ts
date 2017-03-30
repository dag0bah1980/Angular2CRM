import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookietestComponent } from './cookietest.component';

describe('CookietestComponent', () => {
  let component: CookietestComponent;
  let fixture: ComponentFixture<CookietestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookietestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookietestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
