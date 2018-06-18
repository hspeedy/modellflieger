declare interface IMenuItem {
  readonly menuItems: IMenuItem[];
  readonly caption: string;
  readonly icon: string;
  readonly component?: any;
  toggle();
  toggleCallback: ToggleCallback;
}