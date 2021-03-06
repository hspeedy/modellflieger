import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {

  @Output() toggled: EventEmitter<boolean> = new EventEmitter();
  @Output() settingsClicked: EventEmitter<void> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }

  toggledChanged(toggled: boolean) {
    this.toggled.emit(toggled);
  }

  settings() {
    this.settingsClicked.emit();
  }
}
