import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPage } from './books.page';

describe('BooksPage', () => {
  let component: BooksPage;
  let fixture: ComponentFixture<BooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
