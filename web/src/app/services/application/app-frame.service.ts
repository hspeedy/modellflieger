import { Injectable } from '@angular/core';
import { AppMenuItem } from './app-menu-item';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class AppFrameService {

  private _menuItems: IMenuItem[];

  public toggleCallback: ToggleCallback;

  public menuItemClickedCallback: MenuItemClickedCallback;

  constructor() {
    this._menuItems = [];
    this._menuItems.push(new AppMenuItem('Dashboard', undefined, DashboardComponent));
    this._menuItems.push(new AppMenuItem('Listen', undefined, undefined, [
      new AppMenuItem('Telefonliste', undefined, DashboardComponent)
    ]));
  }

  get menuItems(): IMenuItem[] {
    return this._menuItems;
  }

  menuItemClick(menuItem: IMenuItem) {
    if (menuItem.menuItems !== undefined && 
        menuItem.menuItems.length > 0) {
      return;
    }
    if (this.menuItemClickedCallback !== undefined) {
      if (this.menuItemClickedCallback(menuItem)) {
        this.toggleMenu(false);
      }
    }
  }

  toggleMenu(toggled: boolean) {
    if (this.toggleCallback !== undefined) {
      this.toggleCallback(toggled);
    }
  }
}
