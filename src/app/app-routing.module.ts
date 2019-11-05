/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 14:01:15
 * @LastEditTime: 2019-11-05 08:11:44
 * @LastEditors: Devin Shi
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from "src/environments/environment";
import { PageRoutes } from './page/home/pages.routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: environment.redirectTo,
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './page/login/login.module#LoginModule'
    // redirectTo: 'home',
  },
  // {
  //   path: 'home',
  //   component: SliderLayoutComponent
  // },
  ...PageRoutes
  // {
  //   path: '**',
  //   redirectTo: 'home/app-my-to-do'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      onSameUrlNavigation: environment.onSameUrlNavigation as 'reload' | 'ignore',
      scrollPositionRestoration: environment.onSameUrlNavigation as 'disabled' | 'enabled' | 'top',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
