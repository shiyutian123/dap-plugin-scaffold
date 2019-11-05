import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans.component';
import { PlansRoutingModule } from './plans-routing.module';

@NgModule({
    declarations: [PlansComponent],
    imports: [
        CommonModule,
        PlansRoutingModule
    ]
  })
export class PlansModule { }
