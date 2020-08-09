import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTopPage } from './quiz-top.page';

describe('QuizTopPage', () => {
  let component: QuizTopPage;
  let fixture: ComponentFixture<QuizTopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizTopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizTopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
