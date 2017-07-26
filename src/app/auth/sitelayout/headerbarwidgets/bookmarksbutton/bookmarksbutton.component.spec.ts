import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksbuttonComponent } from './bookmarksbutton.component';

describe('BookmarksbuttonComponent', () => {
  let component: BookmarksbuttonComponent;
  let fixture: ComponentFixture<BookmarksbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
