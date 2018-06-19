import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';

import { AppFrameService } from '../../services/application/app-frame.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        height: '*',
        overflow: 'hidden'
      })),
      state('out', style({
        height: '0px',
        overflow: 'hidden'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
    trigger('rotateInOut', [
      state('in', style({
        transform: 'rotateZ(90deg)'
      })),
      state('out', style({
        transform: 'rotateZ(0deg)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  private _menuItem: IMenuItem;

  menuState = 'out';

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

  toggle(toggle: boolean) {
    if (toggle !== undefined) {
      if (!toggle) {
        this.menuState = 'out';
      } else {
        this.menuState = 'in';
      }
    } else {
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }
  }
}
