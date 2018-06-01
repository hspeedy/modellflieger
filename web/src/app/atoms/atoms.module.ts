import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppMenuButtonComponent } from './app-menu-button/app-menu-button.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    AppMenuButtonComponent
  ],
  exports: [
    AppMenuButtonComponent
  ],
  entryComponents: [

  ]
})
export class AtomsModule { }
