/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 23:00:03
 * @LastEditTime: 2019-11-05 08:34:30
 * @LastEditors: Devin Shi
 */
import { Injectable, Injector } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DdmpAuthService } from '../auth/ddmp-auth.service';
import { LocalStorageService } from '../cache/localStorage/local-storage.service';

/**
 * Ddmp 网络请求通用的拦截器，拦截相应的网络请求，并设置初始化信息
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private injector: Injector,
    private ddmpAuthService: DdmpAuthService,
    private localStorageService: LocalStorageService,
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const req_started = Date.now();

    this.ddmpAuthService.setUser(this.localStorageService.get('currentUser'));
    const accessToken = this.ddmpAuthService.currentToken;
    const authReq = req.clone({
      setHeaders: {
        AuthorizationToken: accessToken && accessToken['accessToken'] ? accessToken['accessToken'] : '',
        refreshToken: accessToken && accessToken['refreshToken'] ? accessToken['refreshToken'] : ''
      }
    });
    return next.handle(authReq).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          const authorizationToken = event.headers.get('authorizationtoken');
          const refreshToken = event.headers.get('refreshtoken');
          if (authorizationToken && refreshToken) {
            this.ddmpAuthService.setToken({
              accessToken: authorizationToken,
              refreshToken: refreshToken,
              authCode: '',
              userCode: ''
            });
            this.localStorageService.set('currentToken', this.ddmpAuthService.currentToken);
          }
        }
        return event;
      })
    );
  }
}
