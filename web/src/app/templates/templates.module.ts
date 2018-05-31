import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppFrameTemplateComponent } from './app-frame-template/app-frame-template.component';
import { AppBarTemplateComponent } from './app-bar-template/app-bar-template.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    AppFrameTemplateComponent,
    AppBarTemplateComponent
  ],
  exports: [
    AppFrameTemplateComponent,
    AppBarTemplateComponent
  ]
})
export class TemplatesModule { }
