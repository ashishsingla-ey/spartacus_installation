import { Component } from '@angular/core';
import { CmsStructureConfigService, CmsComponentAdapter, CmsService } from '@spartacus/core';
import { switchMap } from 'rxjs/operators';
import { of, observable } from 'rxjs';
import { NavigationService } from '@spartacus/storefront';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spartacusWithHybris';
  
  constructor(private cmsStructureConfigService: CmsStructureConfigService,
    protected adapter: CmsComponentAdapter, private cmsService: CmsService, protected service: NavigationService) {

  }

  getComponentsFromConfig(data, type) {
    let d:any = this.cmsService.getComponentData(data['uid']);
    switch(type) {
      case 'node': 
      d = this.service.getNavigationNode(
        this.cmsService.getComponentData(data['uid'])
      );
      ;break;
    }
    return d;
    // return this.cmsService.getComponentData(data['uid'])
    // .subscribe(items=>{
    //   console.log("items*****",items);
    // })
  }
}
