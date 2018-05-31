import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { TemplatesModule } from '../templates/templates.module';
import { AppFrameComponent } from './app-frame/app-frame.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AtomsModule,
    MoleculesModule,
    TemplatesModule
  ],
  declarations: [
    AppFrameComponent
  ],
  exports: [
    AppFrameComponent
  ],
  entryComponents: [

  ]
})
export class OrganismsModule { }
