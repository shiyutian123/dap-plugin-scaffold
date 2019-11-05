/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-08-06 22:06:25
 * @LastEditTime: 2019-11-04 11:19:50
 * @LastEditors: Devin Shi
 * @Description:
 */
import { NgModule } from '@angular/core';

import { PlansModule } from './plans/plans.module';
import { PlanSetModule } from './plan-set/plan-set.module';
import { PlanAllModule } from './plan-all/plan-all.module';


const CITEMODULE = [PlansModule, PlanSetModule, PlanAllModule];


@NgModule({
    imports: [...CITEMODULE],
    declarations: [],
    exports: [...CITEMODULE]
  })
export class PluginsIndex {
}

