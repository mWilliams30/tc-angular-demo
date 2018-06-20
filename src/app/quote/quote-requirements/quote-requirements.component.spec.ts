import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteRequirementsComponent } from './quote-requirements.component';

describe('QuoteRequirementsComponent', () => {
  let component: QuoteRequirementsComponent;
  let fixture: ComponentFixture<QuoteRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
