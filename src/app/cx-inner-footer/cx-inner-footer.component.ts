import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-cx-inner-footer',
  templateUrl: './cx-inner-footer.component.html',
  styleUrls: ['./cx-inner-footer.component.scss']
})
export class CxInnerFooterComponent implements OnInit, OnChanges {

  @Input('node') cxData;
  
  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges() {
    console.log("cx-data",this.cxData)
  }

}
