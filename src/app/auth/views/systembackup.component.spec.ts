/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SystembackupComponent } from './systembackup.component';

describe('SystembackupComponent', () => {
  let component: SystembackupComponent;
  let fixture: ComponentFixture<SystembackupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystembackupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystembackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
