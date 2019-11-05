/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 13:42:14
 * @LastEditTime: 2019-11-05 08:38:51
 * @LastEditors: Devin Shi
 */
import { Component, OnInit, OnDestroy } from "@angular/core";
import { DdmpLayoutMenuService } from './layout/ddmp-menu.service';
import { DdmpAuthService } from './auth/ddmp-auth.service';
import { DdmpAppInfoService } from './layout/ddmp-appinfo.service';
import { SessionStorageService } from './cache/sessionStorage/session-storage.service';
import { LocalStorageService } from 'src/app/cache/localStorage/local-storage.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { USER_NAME, USER_ID, USER_TYPE, TOKEN } from './cache/storage.namespace';
import { NetworkService } from './network/network.service';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {

  code: String = ""; // 从统一登录界面获取到code
  routeSubscription: Subscription;
  localRouteUrl: String = ""; // 当前路由
  appColor: String = "red";
  themeAddress :string = '../assets/theme/theme-red.less';
  safeUrl:any;

  constructor(private ddmpLayoutMenuService: DdmpLayoutMenuService,
    private ddmpAuthService: DdmpAuthService,
    private ddmpAppInfoService: DdmpAppInfoService,
    private session: SessionStorageService,
    private localStorageService: LocalStorageService,
    private network: NetworkService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    ) {
        this.routeSubscription = this.router.events.pipe(
          filter(event => event instanceof NavigationEnd),
          map(() => this.activatedRoute),
          map(route => {
            while (route.firstChild) {
              route = route.firstChild;
            }
            return route;
          }),
          filter(route => route.outlet === 'primary')
        ).subscribe((event) => {

        });
    }

  ngOnInit(): void {
    if (environment.needSSO) {
      debugger
      this.getToken();
    } else {
      debugger
      this.validLogin();
    }

    this.ddmpLayoutMenuService.setMenuItem([], []);

    setTimeout(() => {
      debugger
      const currentToken = this.localStorageService.get('currentToken');
      if (currentToken) {
        this.ddmpAuthService.setToken(currentToken);
      }
      const currentUser = this.localStorageService.get('currentUser');
      if (currentUser) {
        this.ddmpAuthService.setUser(currentUser);
      }
      if (environment.appInfo && environment.appInfo["appId"]) {
        this.ddmpAppInfoService.setAppInfo(environment.appInfo);
      }
    }, 500);
  }

  /**
   * @author wucan
   * @date 2019年9月27日
   * @description 监听页面打开状态
   */
  setSoket() {
    const user = this.localStorageService.get('currentUser');
    const sokit = environment.appInfo.appId + user.code;
    console.log(sokit);

  }
  /**
   * @author wucan
   * @date 2019年7月30日
   * @description 从登录界面获取code然后通过code来获取token
   */
  getToken() {
    this.code = location.search.slice(6);
    const url = environment.localUrl + "/view/index.html";
    const clientId = environment.clientId;
    if (!this.localStorageService.get('currentToken') && !this.code) {
      // TODO: 跳转至统一登录界面
      const loginPageMatches = window.location.href.match('login');
      if (!loginPageMatches) {
        location.href = environment.ssoDomain + "/uaa/oauth/authorize?response_type=code&client_id=" + clientId + "&redirect_uri=" + url;
        this.router.navigate(['/tologin']);
      }
    } else if (!this.localStorageService.get('currentToken')) {
      this.network.get("/userLogin/auth?code=" + this.code + "&clientId=" + clientId).subscribe(
        (res: any) => {
          if (res.code === 'ok') {
            this.session.set(TOKEN, res.data);
            this.localStorageService.set('TOKEN', res.data);
            this.ddmpAuthService.setToken({
              'accessToken': res.data.access_token,
              'refreshToken': res.data.refresh_token,
              'authCode': '',
              'userCode': ''
            });
            setTimeout(() => {
              this.getUserInfo();
              this.localStorageService.set('currentToken', this.ddmpAuthService.currentToken);
              debugger
              console.log('------------------ href ------------------');
              console.log(window.location.href);
            }, 150);
          } else {
          }
        }
      );
    } else if (!this.code) {
      // TODO: 获取token接口
      this.session.set(TOKEN, this.localStorageService.get('currentToken'));
      this.localStorageService.set('TOKEN', this.localStorageService.get('currentToken'));
      const currentToken = this.localStorageService.get('currentToken');
      if (currentToken) {
        this.ddmpAuthService.setToken(currentToken);
        // this.ddmpLayoutMenuService.getOnlineMenusOfAppCode(environment.appInfo["appCode"]).subscribe((menus) => {
        //   this.ddmpLayoutMenuService.setMenuItem(menus);
        // });
      }
    }

  }

  validLogin() {
    if (!this.localStorageService.get('currentToken')) {
      if (!window.location.href.match('home/redirect-my-to-do') && !window.location.href.match('redirect-login')) {
        this.router.navigate(['/login']);
      }
    } else if (!this.code) {
      // TODO: 获取token接口
      this.session.set(TOKEN, this.localStorageService.get('currentToken'));
      this.localStorageService.set('TOKEN', this.localStorageService.get('currentToken'));
      const currentToken = this.localStorageService.get('currentToken');
      if (currentToken) {
        this.ddmpAuthService.setToken(currentToken);
      }
    }

  }

  getUserInfo() {
    const token = this.localStorageService.get('TOKEN');
    this.network.get("/userLogin/getUser?access_token=" + token.access_token).subscribe((res: any) => {
      if (res.code === 'ok') {
        this.localStorageService.set(USER_NAME, res.data.attributes.userName);
        this.localStorageService.set(USER_ID, res.data.attributes.uid);
        this.localStorageService.set(USER_TYPE, res.data.attributes.type);
        this.ddmpAuthService.setUser({
          'id': res.data.attributes.uid,
          'code': res.data.attributes.uid,
          'authCode': res.data.attributes.uid,
          'name': res.data.attributes.userName,
          'extraInfo': res.data.attributes
        });
        this.localStorageService.set('currentUser', this.ddmpAuthService.currentUser);
      } else {
      }
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
