import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamgmtmenuComponent } from './datamgmtmenu.component';

describe('DatamgmtmenuComponent', () => {
  let component: DatamgmtmenuComponent;
  let fixture: ComponentFixture<DatamgmtmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamgmtmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamgmtmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
