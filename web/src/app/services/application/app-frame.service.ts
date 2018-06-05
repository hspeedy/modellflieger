import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppFrameService {

  public toggleCallback: ToggleCallback;

  constructor() { }
}
