import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedtocreatelinkComponent } from './needtocreatelink.component';

describe('NeedtocreatelinkComponent', () => {
  let component: NeedtocreatelinkComponent;
  let fixture: ComponentFixture<NeedtocreatelinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedtocreatelinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedtocreatelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
