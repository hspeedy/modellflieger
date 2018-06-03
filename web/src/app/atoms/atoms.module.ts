import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppMenuButtonComponent } from './app-menu-button/app-menu-button.component';
import { AppCaptionComponent } from './app-caption/app-caption.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    AppMenuButtonComponent,
    AppCaptionComponent
  ],
  exports: [
    AppMenuButtonComponent,
    AppCaptionComponent
  ],
  entryComponents: [

  ]
})
export class AtomsModule { }
