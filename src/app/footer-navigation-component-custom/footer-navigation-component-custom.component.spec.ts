import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNavigationComponentCustomComponent } from './footer-navigation-component-custom.component';

describe('FooterNavigationComponentCustomComponent', () => {
  let component: FooterNavigationComponentCustomComponent;
  let fixture: ComponentFixture<FooterNavigationComponentCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterNavigationComponentCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterNavigationComponentCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
