import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScratchpageComponent } from './scratchpage.component';

describe('ScratchpageComponent', () => {
  let component: ScratchpageComponent;
  let fixture: ComponentFixture<ScratchpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScratchpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScratchpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
