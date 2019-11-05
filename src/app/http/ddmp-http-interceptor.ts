/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 13:42:17
 * @LastEditTime: 2019-10-14 12:35:17
 * @LastEditors: Please set LastEditors
 */
import { Injectable, Injector } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler,
  HttpParams,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { timeout, catchError, map } from "rxjs/operators";
import { DdmpHttpConfig } from "./ddmp-http-config";
import { MessagesService } from '../services/messages/messages-service';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../cache/localStorage/local-storage.service';
import { NetworkApi } from '../network/network-api';
import { NetworkService } from '../network/network.service';
import { DdmpAuthService } from '../auth/ddmp-auth.service';
import { environment } from 'src/environments/environment';
import { GlobalLoadingService } from '../services/global-loading/global-loading.service';


/**
 * Ddmp 网络请求通用的拦截器，拦截相应的网络请求，并设置初始化信息, 设置网络请求的通用domain 和 timeout，也可以设置相关请求头，积累一段时间之后，转换为标准包
 */
@Injectable()
export class DdmpHttpInterceptor implements HttpInterceptor {

  private requestStack = [];

  constructor(
    private injector: Injector,
    private network: NetworkService,
    private ddmpAuthService: DdmpAuthService,
    private messagesService: MessagesService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private globalLoadingService: GlobalLoadingService) { }
  private handleError(error: HttpErrorResponse) {
    // 给全局Loading组件发送事件，为false
    // this.globalLoadingService.showError(error);
    this.popRequestStack();
    
    if (error.status === 401 || error.status === 0) {
      this.messagesService.showNotificationErrorMessage('用户错误', '当前登录过期，请重新登录！');
      this.localStorageService.clearStorage();
      
      if (environment.needSSO) {
        setTimeout(() => {
          location.href = environment.ssoDomain + "/uaa/logout";
        }, 1000);
      } else {
        this.router.navigate(['./login']);
      }

      return throwError(error['message']);
    } else {
      this.messagesService.showNotificationErrorMessage('请求出错', '当前网络不稳定，请刷新后重试');
      return throwError(error['message']);
    }
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const config = {
      withCredentials: false,
      timeout: 30000,
      ...this.injector.get(DdmpHttpConfig, null)
    };
    let reqUrl = req.url;
    if (reqUrl.startsWith("/")) {
      reqUrl = config.baseDomain + req.url;
    }
    let httpParams = req.params;
    if (req.method === 'GET') {
      const params = req.params;
      const tempParams: any = {};
      tempParams.timestamp = new Date().getTime() + '';
      if (params && params.keys) {
        params.keys().forEach(key => {
          tempParams[key + ''] = params.get(key);
        });
      }
      // 解决 IE GET 请求缓存 问题
      httpParams = new HttpParams({
        fromObject: tempParams
      });
    }
    const clonedRequest = req.clone({
      url: reqUrl,
      withCredentials:
        req.withCredentials === true ? true : config.withCredentials,
      params: httpParams
    });
    this.requestStack.push(clonedRequest);
    // 发送事件给全局Loading组件，为true
    this.globalLoadingService.showLoading(clonedRequest);
    return next.handle(clonedRequest).pipe(timeout(config.timeout), map((event) => {
      // this.globalLoadingService.showSuccess(event);
      this.popRequestStack();
      return event;
    }), catchError((err) => this.handleError(err)
    // 处理response，给全局Loading组件发送事件，为false
    ));
  }

  private popRequestStack() {
    setTimeout(() => {
      if (this.requestStack && this.requestStack.length > 0) {
        this.requestStack.pop();
        if (this.requestStack.length === 0) {
          this.globalLoadingService.showSuccess(event);
        }
      }
    }, 600);
  }
}
