import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppFrameService } from '../../services/application/app-frame.service';

@Component({
  selector: 'app-frame-template',
  templateUrl: './app-frame-template.component.html',
  styleUrls: ['./app-frame-template.component.css']
})
export class AppFrameTemplateComponent implements OnInit, AfterViewInit {

  constructor(private _appFrameService: AppFrameService) {

  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this._appFrameService.toggleCallback = this.toggle;
  }

  toggle(toggle: boolean) {
    const i = 0;
  }
}
