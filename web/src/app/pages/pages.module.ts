import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismsModule } from '../organisms/organisms.module';
import { TemplatesModule } from '../templates/templates.module';
import { ServicesModule } from '../services/services.module';

@NgModule({
  imports: [
    CommonModule,
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
