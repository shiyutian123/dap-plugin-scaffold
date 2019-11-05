/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 12:22:54
 * @LastEditTime: 2019-08-20 16:58:57
 * @LastEditors: Please set LastEditors
 */
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { DdmpAuthService } from './ddmp-auth.service';
import { DdmpAuthNavGuard, DdmpConfirmDeactivateGuard } from './ddmp-auth.guard';

@NgModule({
  imports: [
      SharedModule,
  ],
  providers: [ DdmpAuthService, DdmpAuthNavGuard, DdmpConfirmDeactivateGuard ]
})
export class DdmpAuthModule { }
