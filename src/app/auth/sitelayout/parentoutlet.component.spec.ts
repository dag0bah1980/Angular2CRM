/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParentoutletComponent } from './parentoutlet.component';

describe('ParentoutletComponent', () => {
  let component: ParentoutletComponent;
  let fixture: ComponentFixture<ParentoutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentoutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentoutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
