/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-08-06 22:06:25
 * @LastEditTime: 2019-11-06 17:20:49
 * @LastEditors: Devin Shi
 * @Description:
 */
import { NgModule } from '@angular/core';

import { PlanSetModule } from './plan-demo/plan-demo.module';


const CITEMODULE = [PlanSetModule];


@NgModule({
    imports: [...CITEMODULE],
    declarations: [],
    exports: [...CITEMODULE]
  })
export class PluginsIndex {
}

