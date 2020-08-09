import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCreateSearchPage } from './quiz-create-search.page';

describe('QuizCreateSearchPage', () => {
  let component: QuizCreateSearchPage;
  let fixture: ComponentFixture<QuizCreateSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizCreateSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCreateSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
