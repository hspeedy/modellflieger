import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { TemplatesModule } from '../templates/templates.module';
import { AppFrameComponent } from './app-frame/app-frame.component';
import { ServicesModule } from '../services/services.module';
import { PageHostComponent } from './page-host/page-host.component';
import { PageHostDirective } from './page-host/page-host.directive';

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
    AppFrameComponent,
    PageHostComponent,
    PageHostDirective
  ],
  exports: [
    AppFrameComponent,
    PageHostComponent,
    PageHostDirective
  ],
  entryComponents: [

  ]
})
export class OrganismsModule { }
