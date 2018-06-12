import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }

  toggledChanged(toggled: boolean) {
    this.toggled.emit(toggled);
  }
}
