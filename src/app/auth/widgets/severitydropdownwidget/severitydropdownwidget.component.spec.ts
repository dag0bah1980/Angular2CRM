import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeveritydropdownwidgetComponent } from './severitydropdownwidget.component';

describe('SeveritydropdownwidgetComponent', () => {
  let component: SeveritydropdownwidgetComponent;
  let fixture: ComponentFixture<SeveritydropdownwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeveritydropdownwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeveritydropdownwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
