import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanSetComponent } from './plan-set.component';

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
