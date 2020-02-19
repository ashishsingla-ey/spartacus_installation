import { Component, OnInit } from '@angular/core';
import { CmsComponentData, NavigationService, NavigationNode } from '@spartacus/storefront';
import { CmsNavigationComponent } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer-navigation-component-custom',
  templateUrl: './footer-navigation-component-custom.component.html',
  styleUrls: ['./footer-navigation-component-custom.component.scss']
})
export class FooterNavigationComponentCustomComponent implements OnInit {

  data$ = this.componentData.data$;

  node$: Observable<NavigationNode> = this.service.getNavigationNode(
    this.componentData.data$
  );

  constructor(protected componentData: CmsComponentData<CmsNavigationComponent>,
    protected service: NavigationService) { }

  ngOnInit() {

  }

}
