import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-caption',
  templateUrl: './app-caption.component.html',
  styleUrls: ['./app-caption.component.scss']
})
export class AppCaptionComponent implements OnInit {

  private _text: string;

  constructor() {

  }

  ngOnInit() {

  }

  @Input() set text(value: string) {
    this._text = value;
  }

  get text(): string {
    return this._text;
  }
}
