import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    TemplatesModule
  ],
  declarations: [

  ],
  exports: [

  ],
  entryComponents: [
    
  ]
})
export class OrganismsModule { }
