import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFrameService } from './application/app-frame.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AppFrameService
  ]
})
export class ServicesModule { }
