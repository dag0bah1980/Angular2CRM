/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SalesheadertabComponent } from './salesheadertab.component';

describe('SalesheadertabComponent', () => {
  let component: SalesheadertabComponent;
  let fixture: ComponentFixture<SalesheadertabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesheadertabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesheadertabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
