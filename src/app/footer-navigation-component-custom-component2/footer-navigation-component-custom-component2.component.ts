import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-footer-navigation-component-custom-component2',
  templateUrl: './footer-navigation-component-custom-component2.component.html',
  styleUrls: ['./footer-navigation-component-custom-component2.component.scss']
})
export class FooterNavigationComponentCustomComponent2Component implements OnInit {

  @Input('data') data$;
  @Input('node') node$;

  constructor() { }

  ngOnInit() {
  }

}
