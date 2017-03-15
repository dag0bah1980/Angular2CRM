/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JwttestComponent } from './jwttest.component';

describe('JwttestComponent', () => {
  let component: JwttestComponent;
  let fixture: ComponentFixture<JwttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JwttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JwttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
