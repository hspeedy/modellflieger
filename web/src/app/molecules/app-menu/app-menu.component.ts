import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

  private _menuItems: IMenuItem[];

  constructor() {

  }

  ngOnInit() {

  }

  @Input() set menuItems(value: IMenuItem[]) {
    this._menuItems = value;
  }

  get menuItems():  IMenuItem[] {
    return this._menuItems;
  }

}
