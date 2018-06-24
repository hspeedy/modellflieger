import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppFrameTemplateComponent } from './app-frame-template/app-frame-template.component';
import { AppBarTemplateComponent } from './app-bar-template/app-bar-template.component';
import { ServicesModule } from '../services/services.module';
import { PageTemplateComponent } from './page-template/page-template.component';
import { AppMenuTemplateComponent } from './app-menu-template/app-menu-template.component';
import { ContentTileTemplateComponent } from './content-tile-template/content-tile-template.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    NgbModule
  ],
  declarations: [
    AppFrameTemplateComponent,
    AppBarTemplateComponent,
    PageTemplateComponent,
    AppMenuTemplateComponent,
    ContentTileTemplateComponent
  ],
  exports: [
    AppFrameTemplateComponent,
    AppBarTemplateComponent,
    PageTemplateComponent,
    AppMenuTemplateComponent,
    ContentTileTemplateComponent
  ]
})
export class TemplatesModule { }
