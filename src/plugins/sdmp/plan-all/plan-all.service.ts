import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PlanAllService {
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
  queryPlan(params) {
    return this.httpClient.request(this.NetworkApi.NETWORK_API_PLAN_ALL.method,
      this.NetworkApi.NETWORK_API_PLAN_ALL.url, {body: params}) ;
  }
  deriveAllPlan(params) {
      return this.httpClient.request(this.NetworkApi.NETWORK_API_PLAN_ALL_DERIVE.method,
        this.NetworkApi.NETWORK_API_PLAN_ALL_DERIVE.url, {body: params});
  }

    /**
     * 导出excel post请求方式
     * @param url 接口地址
     * @param params 请求参数
     * @param fileName 文件名
     */
    exportExcelPost(url, params, fileName) {
        this.httpClient.post(url, params, {responseType: 'arraybuffer'}).subscribe((data: any) => {
            const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
            if ('msSaveOrOpenBlob' in navigator) {
                // Microsoft Edge and Microsoft Internet Explorer 10-11
                window.navigator.msSaveOrOpenBlob(blob, fileName + '.xlsx');
            } else {
                // standard code for Google Chrome, Mozilla Firefox etc
                const objectUrl = window.URL.createObjectURL(blob);

                // 方式1 适用于chrome,不适用firefox
                let link = document.createElement('a');
                link.setAttribute('href', objectUrl);
                link.setAttribute('download', fileName + '.xlsx');
                link.click();

                // 方式2 适用于chrome和firefox
                // 需要在html文件中先定义a标签
                // const link: any = document.getElementById('excelLink');
                // link.href = objectUrl;
                // link.download = fileName + '.xlsx';
                // link.click();
                setTimeout(() => {
                    URL.revokeObjectURL(link.href);
                }, 100);
            }
        }, (error) => {
        });
    }


}
