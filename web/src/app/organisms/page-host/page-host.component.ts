import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { PageHostDirective } from './page-host.directive';

@Component({
  selector: 'app-page-host',
  templateUrl: './page-host.component.html',
  styleUrls: ['./page-host.component.css']
})
export class PageHostComponent implements OnInit {

  @ViewChild(PageHostDirective) pageHost;

  constructor(private _factoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
     const factory = this._factoryResolver.resolveComponentFactory(DashboardComponent);
     const viewContainerRef: ViewContainerRef = this.pageHost.viewContainerRef;

     viewContainerRef.clear();
     
     const componentRef = viewContainerRef.createComponent(factory);
  }

}
