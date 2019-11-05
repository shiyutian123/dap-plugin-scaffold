import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { PlanSetComponent } from './plan-set.component';
import { PlanSetRoutingModule } from './plan-set-routing.module';
// import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    declarations: [PlanSetComponent],
    imports: [
        SharedModule,
        CommonModule,
        // NgZorroAntdModule.forRoot(),
        PlanSetRoutingModule
    ]
  })
export class PlanSetModule { }
