import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismsModule } from '../organisms/organisms.module';
import { TemplatesModule } from '../templates/templates.module';
import { ServicesModule } from '../services/services.module';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ],
  entryComponents: [
    DashboardComponent
  ]
})
export class PagesModule { }
