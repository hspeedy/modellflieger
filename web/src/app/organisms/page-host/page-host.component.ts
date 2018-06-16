import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, AfterViewInit } from '@angular/core';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { PageHostDirective } from './page-host.directive';
import { AppFrameService } from '../../services/application/app-frame.service';

@Component({
  selector: 'app-page-host',
  templateUrl: './page-host.component.html',
  styleUrls: ['./page-host.component.css']
})
export class PageHostComponent implements OnInit, AfterViewInit {

  private _lastComponent: any;

  @ViewChild(PageHostDirective) pageHost;

  constructor(private _factoryResolver: ComponentFactoryResolver,
              private _appFrameService: AppFrameService) {

  }

  ngOnInit() {
    this.changePage(DashboardComponent);
  }

  ngAfterViewInit() {
    this._appFrameService.menuItemClickedCallback = this.menuItemClicked.bind(this);
  }

  menuItemClicked(menuItem: IMenuItem): boolean {
    this.changePage(menuItem.component);
    return true;
  }

  private changePage(component: any) {
    if (component !== undefined &&  this._lastComponent !== component) {
      const viewContainerRef: ViewContainerRef = this.pageHost.viewContainerRef;

      viewContainerRef.clear();
      
      const factory = this._factoryResolver.resolveComponentFactory(component);
      const componentRef = viewContainerRef.createComponent(factory);

      this._lastComponent = component;
    }
  }

}
