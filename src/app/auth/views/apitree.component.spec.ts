/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApitreeComponent } from './apitree.component';

describe('ApitreeComponent', () => {
  let component: ApitreeComponent;
  let fixture: ComponentFixture<ApitreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApitreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApitreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
