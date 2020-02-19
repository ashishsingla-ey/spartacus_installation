import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inner-custom-component',
  templateUrl: './inner-custom-component.component.html',
  styleUrls: ['./inner-custom-component.component.scss']
})
export class InnerCustomComponentComponent implements OnInit, OnChanges {

  @Input('product') product;
  API_ENDPOINT = environment;
  url: string = '';
  altText: string = '';
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.product && this.product.media && this.product.media.desktop) {
      this.url = this.API_ENDPOINT.baseUrl + this.product.media.desktop.url;
      this.altText = this.product.media.desktop.altText;
    }
  }
}
