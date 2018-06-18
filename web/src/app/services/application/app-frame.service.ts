import { Injectable } from '@angular/core';
import { AppMenuItem } from './app-menu-item';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { MemberListComponent } from '../../pages/member-list/member-list.component';
import { WorkingHoursListComponent } from '../../pages/working-hours-list/working-hours-list.component';
import { FlightControllerListComponent } from '../../pages/flight-controller-list/flight-controller-list.component';
import { MembersPageComponent } from '../../pages/members-page/members-page.component';
import { ClubPageComponent } from '../../pages/club-page/club-page.component';

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
    this._menuItems.push(new AppMenuItem('Verwaltung', undefined, undefined, [
      new AppMenuItem('Mitglieder', undefined, MembersPageComponent),
      new AppMenuItem('Verein', undefined, ClubPageComponent)
    ]));
    this._menuItems.push(new AppMenuItem('Listen', undefined, undefined, [
      new AppMenuItem('Mitglieder', undefined, MemberListComponent),
      new AppMenuItem('Flugleiter', undefined, FlightControllerListComponent),
      new AppMenuItem('Arbeitsstunden', undefined, WorkingHoursListComponent)
    ]));
  }

  get menuItems(): IMenuItem[] {
    return this._menuItems;
  }

  menuItemClick(menuItem: IMenuItem) {
    if (menuItem === undefined) {
      return;
    }
    if (menuItem.menuItems !== undefined &&
        menuItem.menuItems.length > 0) {
      menuItem.toggle(undefined);
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
