import { Injectable } from '@angular/core';
import { AppMenuItem } from './app-menu-item';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class AppFrameService {

  private _menuItems: IMenuItem[];

  public toggleCallback: ToggleCallback;

  constructor() {
    this._menuItems = [];
    this._menuItems.push(new AppMenuItem('Dashboard', undefined, DashboardComponent));
  }

  get menuItems(): IMenuItem[] {
    return this._menuItems;
  }
}
