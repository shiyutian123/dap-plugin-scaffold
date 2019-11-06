/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-04 08:35:32
 * @LastEditTime: 2019-11-06 17:28:56
 * @LastEditors: Devin Shi
 * @Description:
 */
import { Injectable } from '@angular/core';
import { SliderMenuItem } from './slider-menu.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { isArray } from 'util';

@Injectable()
export class DdmpLayoutMenuService {

    private menuItemObservable$ = new Subject<Array<SliderMenuItem>>();

    private currentMenuItem: Array<SliderMenuItem> = [];

    constructor() {
    }

    get menuItemObservable(): Observable<Array<SliderMenuItem>> {
      return this.menuItemObservable$.asObservable();
    }

    get menuItems(): Array<SliderMenuItem> {
        return this.currentMenuItem;
    }


    /**
     * 菜单改变的通知
     * @param menuItems 菜单选项
     */
    setMenuItem(defaultMenus: Array<string>, menuItems: Array<SliderMenuItem>) {
    // __START_PLUGIN_ROUTER__ //
    let PLUGIN_ROUTER = []
    // __END_PLUGIN_ROUTER__ //
      if (!isArray(PLUGIN_ROUTER)) {
        PLUGIN_ROUTER = [];
      }
      PLUGIN_ROUTER.forEach((pluginRoute) => {
        menuItems.unshift({
          functionType: "DefaultMenu",
          haveChild: false,
          icon: 'profile',
          iconType: 'profile',
          isGroup: false,
          isHidden: false,
          isSubmenu: false,
          itemText: pluginRoute.data.name,
          name: pluginRoute.data.name,
          navigateLink: pluginRoute.path,
          path: "home/" + pluginRoute.path,
        });
      })

      this.currentMenuItem = menuItems ? menuItems : [];
      this.menuItemObservable$.next(this.currentMenuItem);
    }
}
