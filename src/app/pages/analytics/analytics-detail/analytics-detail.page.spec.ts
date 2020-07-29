import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsDetailPage } from './analytics-detail.page';

describe('AnalyticsDetailPage', () => {
  let component: AnalyticsDetailPage;
  let fixture: ComponentFixture<AnalyticsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
