import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtpayloadtestComponent } from './jwtpayloadtest.component';

describe('JwtpayloadtestComponent', () => {
  let component: JwtpayloadtestComponent;
  let fixture: ComponentFixture<JwtpayloadtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JwtpayloadtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JwtpayloadtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
