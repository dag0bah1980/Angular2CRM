import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradenotesComponent } from './upgradenotes.component';

describe('UpgradenotesComponent', () => {
  let component: UpgradenotesComponent;
  let fixture: ComponentFixture<UpgradenotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradenotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
