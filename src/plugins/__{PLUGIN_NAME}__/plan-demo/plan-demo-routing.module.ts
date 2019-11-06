/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-05 11:42:51
 * @LastEditTime: 2019-11-06 17:10:08
 * @LastEditors: Devin Shi
 * @Description:
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanSetComponent } from './plan-demo.component';

const routes: Routes = [
  {
    path: '',
    component: PlanSetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanSetRoutingModule { }
