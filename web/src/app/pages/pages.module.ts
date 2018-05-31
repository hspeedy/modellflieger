import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismsModule } from '../organisms/organisms.module';
import { TemplatesModule } from '../templates/templates.module';
import { ServicesModule } from '../services/services.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule,
    ServicesModule
  ],
  declarations: [

  ],
  exports: [

  ],
  entryComponents: [

  ]
})
export class PagesModule { }
