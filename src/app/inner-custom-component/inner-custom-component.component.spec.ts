import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerCustomComponentComponent } from './inner-custom-component.component';

describe('InnerCustomComponentComponent', () => {
  let component: InnerCustomComponentComponent;
  let fixture: ComponentFixture<InnerCustomComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerCustomComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerCustomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
