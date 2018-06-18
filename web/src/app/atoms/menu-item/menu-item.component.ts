import { Component, OnInit, Input } from '@angular/core';
import { AppFrameService } from '../../services/application/app-frame.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  private _menuItem: IMenuItem;

  constructor(private _appFrameService: AppFrameService) {

  }

  ngOnInit() {

  }

  @Input() set menuItem(value: IMenuItem) {
    this._menuItem = value;
    if (this._menuItem.menuItems !== undefined && this._menuItem.menuItems.length > 0) {
      this._menuItem.toggleCallback = this.toggle.bind(this);
    }
  }

  get menuItem(): IMenuItem {
    return this._menuItem;
  }

  itemClick() {
    this._appFrameService.menuItemClick(this._menuItem);
  }

  toggle() {

  }
}
