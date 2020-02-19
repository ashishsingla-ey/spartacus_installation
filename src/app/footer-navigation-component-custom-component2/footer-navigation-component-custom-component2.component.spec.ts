import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNavigationComponentCustomComponent2Component } from './footer-navigation-component-custom-component2.component';

describe('FooterNavigationComponentCustomComponent2Component', () => {
  let component: FooterNavigationComponentCustomComponent2Component;
  let fixture: ComponentFixture<FooterNavigationComponentCustomComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterNavigationComponentCustomComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterNavigationComponentCustomComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
