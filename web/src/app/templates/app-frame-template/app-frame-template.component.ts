import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';

import { AppFrameService } from '../../services/application/app-frame.service';

@Component({
  selector: 'app-frame-template',
  templateUrl: './app-frame-template.component.html',
  styleUrls: ['./app-frame-template.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppFrameTemplateComponent implements OnInit, AfterViewInit {

  menuState = 'out';

  constructor(private _appFrameService: AppFrameService) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this._appFrameService.toggleCallback = this.toggle.bind(this);
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
