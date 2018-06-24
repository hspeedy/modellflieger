import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './app-settings-button.component.html',
  styleUrls: ['./app-settings-button.component.scss']
})
export class AppSettingsButtonComponent implements OnInit {

  @Output() settingsClicked: EventEmitter<void> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

  buttonClick() {
    this.settingsClicked.emit();
  }
}
