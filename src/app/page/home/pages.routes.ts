/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-04 08:35:32
 * @LastEditTime: 2019-11-05 08:30:44
 * @LastEditors: Devin Shi
 * @Description:
 */
import { RedirectLoginComponent } from './redirect-login/redirect-login.component';
import { Route, Routes, ChildActivationEnd } from '@angular/router';
import { SliderLayoutComponent } from 'src/app/layout/slider-layout/slider-layout.component';
import { DdmpAuthNavGuard, DdmpConfirmDeactivateGuard } from 'src/app/auth/ddmp-auth.guard';
// import { PLUGIN_ROUTER } from '../../../plugins/index';

const defaultRoute: Route = {
  path: '',
  pathMatch: 'full',
  canActivate: [DdmpAuthNavGuard],
  redirectTo: ''
};

  // __START_PLUGIN_ROUTER__ //
    let PLUGIN_ROUTER = [
  {
    "path": "app-plan-set",
    "loadChildren": "src/plugins/sdmp/plan-set/plan-set.module#PlanSetModule",
    "data": {
      "name": "计划设置"
    }
  },
  {
    "path": "app-plan-all",
    "loadChildren": "src/plugins/sdmp/plan-all/plan-all.module#PlanAllModule",
    "data": {
      "name": "计划管理"
    }
  }
]
    // __END_PLUGIN_ROUTER__ //

const PageRoutes: Routes = [
    {
        path: 'home',
        component: SliderLayoutComponent,
        children: (PLUGIN_ROUTER as Array<Route>)
    },
    {
        path: 'redirect-login',
        component: RedirectLoginComponent
    },
];

PageRoutes.forEach(homeRoute => {
  // PageRoutes[0].children.unshift(defaultRoute);
  (PLUGIN_ROUTER as Array<Route>).forEach((pluginRoute, index) => {
    pluginRoute.canActivate = [DdmpAuthNavGuard];
    if (index === 0) {
      defaultRoute.redirectTo = pluginRoute.path;
    }
  });
});

export {
  PageRoutes
};

