import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DueinwidgetComponent } from './dueinwidget.component';

describe('DueinwidgetComponent', () => {
  let component: DueinwidgetComponent;
  let fixture: ComponentFixture<DueinwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DueinwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DueinwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
