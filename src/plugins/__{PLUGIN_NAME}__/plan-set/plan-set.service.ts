import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
// import { NetworkApi } from './network-api';

@Injectable({
  providedIn: 'root'
})

export class PlanSetService {
  NetworkApi = {
    // 计划制定获取用户信息
  NETWORK_API_PLAN_USER_INFO: {
    url: '/event/trigger/1557734583533',
    method: 'POST'
  },
  // 计划制定查询
  NETWORK_API_PLAN_QUERY: {
    url: '/event/trigger/1557734626010',
    method: 'POST'
  },
  // 计划制定保存
  NETWORK_API_PLAN_SAVE: {
    url: '/event/trigger/1557734604119',
    method: 'POST'
  },
  NETWORK_API_PLAN_RATE: {
    url: '/event/trigger/1557821820940',
    method: 'POST'
  },
  // 全部计划分页查询
  NETWORK_API_PLAN_ALL: {
    url: '/event/trigger/1557884750892',
    method: 'POST'
  },
  // 全部计划导出
  NETWORK_API_PLAN_ALL_DERIVE: {
    url: '/event/trigger/1557885699536',
    method: 'POST'
  },
  // 表单发起 1558070934588
  NETWORK_API_LA_START: {
    url: '/event/trigger/1558070934588',
    method: 'POST'
  },
  // 工位分页查询
  NETWORK_API_LA_WORK: {
    url: '/event/trigger/1561345081054',
    // url: '/lov/queryModelDatas',
    method: 'POST'
  }
};
  constructor(private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute) { }
  queryParamsObersver(): Observable<Params> {
    return this.activatedRoute.queryParams ;
  }
  queryPlanInfo(params) {
    return this.httpClient.request(this.NetworkApi.NETWORK_API_PLAN_USER_INFO.method,
      this.NetworkApi.NETWORK_API_PLAN_USER_INFO.url, {body: params}) ;
  }
  queryYearPlan(params) {
    return this.httpClient.request(this.NetworkApi.NETWORK_API_PLAN_QUERY.method,
      this.NetworkApi.NETWORK_API_PLAN_QUERY.url, {body: params}) ;
  }
  planSave(params) {
      return this.httpClient.request(this.NetworkApi.NETWORK_API_PLAN_SAVE.method,
        this.NetworkApi.NETWORK_API_PLAN_SAVE.url, {body: params});
  }
  queryRate(params) {
      return this.httpClient.request(this.NetworkApi.NETWORK_API_PLAN_RATE.method,
        this.NetworkApi.NETWORK_API_PLAN_RATE.url, {body: params});
  }
  queryWorkPage(params) {
    return this.httpClient.request(this.NetworkApi.NETWORK_API_LA_WORK.method,
      this.NetworkApi.NETWORK_API_LA_WORK.url, {body: params});
  }
}
