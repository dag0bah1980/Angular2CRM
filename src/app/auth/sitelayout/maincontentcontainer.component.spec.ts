import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincontentcontainerComponent } from './maincontentcontainer.component';

describe('MaincontentcontainerComponent', () => {
  let component: MaincontentcontainerComponent;
  let fixture: ComponentFixture<MaincontentcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaincontentcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincontentcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
