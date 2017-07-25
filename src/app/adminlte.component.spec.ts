import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlteComponent } from './adminlte.component';

describe('AdminlteComponent', () => {
  let component: AdminlteComponent;
  let fixture: ComponentFixture<AdminlteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
