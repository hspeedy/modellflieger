import { Directive, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[page-host]'
})
export class PageHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {

  }
}