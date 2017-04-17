/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewloginComponent } from './newlogin.component';

describe('NewloginComponent', () => {
  let component: NewloginComponent;
  let fixture: ComponentFixture<NewloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
