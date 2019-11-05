/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-04 08:35:32
 * @LastEditTime: 2019-11-04 22:21:06
 * @LastEditors: Devin Shi
 * @Description:
 */
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
// import PLUGIN_MODULE from '../../../plugins/index';
import { RedirectLoginComponent } from './redirect-login/redirect-login.component';
import { EmptyComponent } from './empty.component';

@NgModule({
    declarations: [
      RedirectLoginComponent,
      EmptyComponent
    ],
    entryComponents: [
      RedirectLoginComponent,
      EmptyComponent
    ],
    imports: [
  SharedModule,
      // PLUGIN_MODULE
    ],
    providers: [
    ]
})

export class PagesModule { }
