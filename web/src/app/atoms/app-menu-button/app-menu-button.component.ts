import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './app-menu-button.component.html',
  styleUrls: ['./app-menu-button.component.css']
})
export class AppMenuButtonComponent implements OnInit, AfterViewInit {

  private _toggled: boolean;

  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this._toggled = false;
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.toggled.emit(this._toggled);
  }

  buttonClick() {
    this._toggled = !this._toggled;
    this.toggled.emit(this._toggled);
  }
}
