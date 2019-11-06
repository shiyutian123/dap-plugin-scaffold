/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-05 11:42:51
 * @LastEditTime: 2019-11-06 17:11:01
 * @LastEditors: Devin Shi
 * @Description:
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { PlanSetComponent } from './plan-demo.component';
import { PlanSetRoutingModule } from './plan-demo-routing.module';
import { PlanSetService } from './plan-demo.service';

@NgModule({
    declarations: [PlanSetComponent],
    imports: [
    SharedModule,
        CommonModule,
        PlanSetRoutingModule,
    ],
    providers: [PlanSetService],

  })
export class PlanSetModule { }
