import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxInnerFooterComponent } from './cx-inner-footer.component';

describe('CxInnerFooterComponent', () => {
  let component: CxInnerFooterComponent;
  let fixture: ComponentFixture<CxInnerFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxInnerFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxInnerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
