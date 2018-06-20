import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSelectButtonComponent } from './quote-select-button.component';

describe('QuoteSelectButtonComponent', () => {
  let component: QuoteSelectButtonComponent;
  let fixture: ComponentFixture<QuoteSelectButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteSelectButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteSelectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
