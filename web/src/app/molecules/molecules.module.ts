import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AtomsModule } from '../atoms/atoms.module';
import { TemplatesModule } from '../templates/templates.module';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppMenuComponent } from './app-menu/app-menu.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AtomsModule,
    TemplatesModule
  ],
  declarations: [
    AppBarComponent,
    AppMenuComponent

  ],
  exports: [
    AppBarComponent,
    AppMenuComponent

  ],
  entryComponents: [

  ]
})
export class MoleculesModule { }
