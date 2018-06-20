import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VountaryExcessComponent } from './vountary-excess.component';

describe('VountaryExcessComponent', () => {
  let component: VountaryExcessComponent;
  let fixture: ComponentFixture<VountaryExcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VountaryExcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VountaryExcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
