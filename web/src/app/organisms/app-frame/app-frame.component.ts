import { Component, OnInit } from '@angular/core';
import { AppFrameService } from '../../services/application/app-frame.service';

@Component({
  selector: 'app-frame',
  templateUrl: './app-frame.component.html',
  styleUrls: ['./app-frame.component.css']
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
    if (this._appFrameService.toggleCallback !== undefined) {
      this._appFrameService.toggleCallback(toggled);
    }
  }

}
