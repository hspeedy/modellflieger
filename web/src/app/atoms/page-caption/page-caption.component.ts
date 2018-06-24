import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-caption',
  templateUrl: './page-caption.component.html',
  styleUrls: ['./page-caption.component.scss']
})
export class PageCaptionComponent implements OnInit {

  private _text: string;

  constructor() { }

  ngOnInit() {
  }

  @Input() set text(value: string) {
    this._text = value;
  }

  get text(): string {
    return this._text;
  }

}
