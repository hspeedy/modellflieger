import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TemplatesModule } from './templates/templates.module';
import { AtomsModule } from './atoms/atoms.module';
import { MoleculesModule } from './molecules/molecules.module';
import { OrganismsModule } from './organisms/organisms.module';
import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    PagesModule,
    ServicesModule,
    TemplatesModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
