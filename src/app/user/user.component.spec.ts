/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { UserComponent } from './user.component';

describe('Component: User', () => {
  it('should create an instance', () => {
    let component = new UserComponent();
    expect(component).toBeTruthy();
  });
});
