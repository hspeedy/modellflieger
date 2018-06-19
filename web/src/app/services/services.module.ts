import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFrameService } from './application/app-frame.service';
import { MemberService } from './member/member.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AppFrameService,
    MemberService
  ]
})
export class ServicesModule { }
