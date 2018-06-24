import { Component, OnInit } from '@angular/core';
import { AppFrameService } from '../../services/application/app-frame.service';

@Component({
  selector: 'app-frame',
  templateUrl: './app-frame.component.html',
  styleUrls: ['./app-frame.component.scss']
})
export class AppFrameComponent implements OnInit {

  constructor(private _appFrameService: AppFrameService) {

  }

  ngOnInit() {

  }

  get menuItems(): IMenuItem[] {
    return this._appFrameService.menuItems;
  }

  toggledChanged(toggled: boolean) {
    this._appFrameService.toggleMenu(toggled);
  }

  settings() {
    const i = 0;
  }

}
