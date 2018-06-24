import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './app-menu-button.component.html',
  styleUrls: ['./app-menu-button.component.scss']
})
export class AppMenuButtonComponent implements OnInit, AfterViewInit {

  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.toggled.emit(false);
  }

  buttonClick() {
    this.toggled.emit(undefined);
  }
}
