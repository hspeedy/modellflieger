import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  private _menuItem: IMenuItem;

  constructor() {

  }

  ngOnInit() {

  }

  @Input() set menuItem(value: IMenuItem) {
    this._menuItem = value;
  }

  get menuItem(): IMenuItem {
    return this._menuItem;
  }

}
