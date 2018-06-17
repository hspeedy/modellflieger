import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismsModule } from '../organisms/organisms.module';
import { TemplatesModule } from '../templates/templates.module';
import { ServicesModule } from '../services/services.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberListComponent } from './member-list/member-list.component';
import { WorkingHoursListComponent } from './working-hours-list/working-hours-list.component';
import { FlightControllerListComponent } from './flight-controller-list/flight-controller-list.component';

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
    DashboardComponent,
    MemberListComponent,
    WorkingHoursListComponent,
    FlightControllerListComponent
  ],
  exports: [
    DashboardComponent,
    MemberListComponent,
    WorkingHoursListComponent,
    FlightControllerListComponent
  ],
  entryComponents: [
    DashboardComponent,
    MemberListComponent,
    WorkingHoursListComponent,
    FlightControllerListComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PagesModule { }
