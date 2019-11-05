/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-04 08:35:32
 * @LastEditTime: 2019-11-04 20:19:44
 * @LastEditors: Devin Shi
 * @Description:
 */
import { Injectable } from '@angular/core';
import { SliderMenuItem } from './slider-menu.model';
import { Subject, Observable } from 'rxjs';
import { DdmpAppInfo } from './ddmp-appinfo.model';
import { HttpClient } from '@angular/common/http';
import { NetworkApi } from '../network/network-api';

@Injectable()
export class DdmpAppInfoService {

  private appInfoObservable$ = new Subject<DdmpAppInfo>();

  private currentAppInfo: DdmpAppInfo;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  get appInfoObservable(): Observable<DdmpAppInfo> {
    return this.appInfoObservable$.asObservable();
  }

  get appInfo(): DdmpAppInfo {
    return this.currentAppInfo;
  }

  /**
   * 改变 App 应用信息
   * @param appInfo 版本信息选项
   */
  setAppInfo(appInfo: DdmpAppInfo) {
    this.currentAppInfo = appInfo;
    this.appInfoObservable$.next(this.currentAppInfo);
  }
}
