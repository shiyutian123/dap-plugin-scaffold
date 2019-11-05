/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 14:50:00
 * @LastEditTime: 2019-11-05 08:11:59
 * @LastEditors: Devin Shi
 */
import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  CanDeactivate
} from '@angular/router';
import { DdmpAuthService } from './ddmp-auth.service';

@Injectable()
export class DdmpAuthNavGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router ,
                private ddmpAuthService: DdmpAuthService) {}

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url = state.url;
        const data = route.data ;
        const queryParams = route.queryParams ;

        return true ;
    }

    canActivateChild( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
}

@Injectable()
export class DdmpConfirmDeactivateGuard implements CanDeactivate<CanDeactiveInterface> {
    constructor(
        // private confirmModalService: ConfirmModalService
    ) {
    }

    canDeactivate(component: CanDeactiveInterface) {
        // if (component.isDirty && component.isDirty()) {
        //     return this.confirmModalService.doConfirm();
        // } else {
        //     return true;
        // }
        return true;
    }
}

export interface CanDeactiveInterface {
    _isCanComponentEdit?: boolean;
    isDirty?: () => boolean; // 表单数据是否修改过
}
