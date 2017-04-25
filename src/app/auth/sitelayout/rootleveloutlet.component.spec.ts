/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RootleveloutletComponent } from './rootleveloutlet.component';

describe('RootleveloutletComponent', () => {
  let component: RootleveloutletComponent;
  let fixture: ComponentFixture<RootleveloutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootleveloutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootleveloutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
