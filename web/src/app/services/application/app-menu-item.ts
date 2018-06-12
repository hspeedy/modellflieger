export class AppMenuItem implements IMenuItem {

  constructor(private _caption: string,
              private _icon: string,
              private _component?: any,
              private _menuItems?: IMenuItem[]) {

  }

  get menuItems(): IMenuItem[] {
    return this._menuItems;
  }

  get caption(): string {
    return this._caption;
  }

  get icon(): string {
    return this._icon;
  }

  get component(): any {
    return this._component;
  }
}
