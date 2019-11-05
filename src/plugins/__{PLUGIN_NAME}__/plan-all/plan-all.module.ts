import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { PlanAllComponent } from './plan-all.component';
import { PlanAllRoutingModule } from './plan-all-routing.module';
// import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    declarations: [PlanAllComponent],
    imports: [
        SharedModule,
        CommonModule,
        // NgZorroAntdModule.forRoot(),
        PlanAllRoutingModule
    ]
  })
export class PlanAllModule { }
