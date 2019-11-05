import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanAllComponent } from './plan-all.component';

const routes: Routes = [
  {
    path: '',
    component: PlanAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PlanAllRoutingModule { }
