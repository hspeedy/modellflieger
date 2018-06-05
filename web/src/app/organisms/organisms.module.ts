import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { TemplatesModule } from '../templates/templates.module';
import { AppFrameComponent } from './app-frame/app-frame.component';
import { ServicesModule } from '../services/services.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AtomsModule,
    MoleculesModule,
    TemplatesModule,
    ServicesModule
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
