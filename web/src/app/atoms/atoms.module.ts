import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppMenuButtonComponent } from './app-menu-button/app-menu-button.component';
import { AppCaptionComponent } from './app-caption/app-caption.component';
import { PageCaptionComponent } from './page-caption/page-caption.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { AppSettingsButtonComponent } from './app-settings-button/app-settings-button.component';
import { ContentTileComponent } from './content-tile/content-tile.component';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    TemplatesModule
  ],
  declarations: [
    AppMenuButtonComponent,
    AppCaptionComponent,
    PageCaptionComponent,
    MenuItemComponent,
    AppSettingsButtonComponent,
    ContentTileComponent
  ],
  exports: [
    AppMenuButtonComponent,
    AppCaptionComponent,
    PageCaptionComponent,
    MenuItemComponent,
    AppSettingsButtonComponent,
    ContentTileComponent
  ],
  entryComponents: [

  ]
})
export class AtomsModule { }
