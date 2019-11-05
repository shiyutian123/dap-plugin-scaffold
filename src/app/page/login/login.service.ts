import { TOKEN, USER_NAME, USER_ID, USER_TYPE, USER_GENDER, USER_PHONE, USER_EMAIL, USER_ICON } from './../../cache/storage.namespace';
import { SessionStorageService } from './../../cache/sessionStorage/session-storage.service';
import { LocalStorageService } from './../../cache/localStorage/local-storage.service';
import { NetworkService } from './../../network/network.service';
import { NetworkApi } from './../../network/network-api';
import { Injectable, EventEmitter } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { DdmpAuthService } from 'src/app/auth/ddmp-auth.service';
import { HttpClient } from '@angular/common/http';
import { DdmpLayoutMenuService } from 'src/app/layout/ddmp-menu.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // TODO: 临时的domain
  // domain = 'http://192.168.31.70:8089'

  password: string;
  empId: string;
  isDisabled: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private network: NetworkService,
    private http: HttpClient,
    private notifyService: NzNotificationService,
    private router: Router,
    private session: SessionStorageService,
    private localStorageService: LocalStorageService,
    private ddmpAuthService: DdmpAuthService,
    private ddmpLayoutMenuService: DdmpLayoutMenuService,
    private sessionStorage: SessionStorageService
  ) { }

  /**
   *  登陆请求
   */
  login() {
    if (!this.empId || this.empId === '' || !this.password || this.password === '') {
      this.notifyService.info('提醒', '请输入必填项');
      return;
    }
    const params = {
      empId: this.empId,
      password: this.password,
    };
    this.network.post(NetworkApi.NEW_LOGIN.url, params).subscribe((res: any) => {
      if (res.code === 'ok') {
        this.session.set(TOKEN, res.data);
        sessionStorage.setItem("token", res.data);
        this.localStorageService.set('TOKEN', res.data);
        // token 认证
        this.ddmpAuthService.setToken({
          'accessToken': res.data.accessToken,
          // TODO 后面要改
          'refreshToken': res.data.refreshToken,
          'authCode': params.empId,
          'userCode': params.empId
        });
        setTimeout(() => {
          this.getUserInfo();
          this.localStorageService.set('currentToken', this.ddmpAuthService.currentToken);
        }, 150);
        this.router.navigate(['/home/'], {
          queryParams: {
          }
        });
      } else {
        this.notifyService.error('失败', res.message);
      }
    });
  }

  getUserInfo() {
    this.http.get(NetworkApi.GETUSERINFO.url, {
    }).subscribe((res: any) => {
      if (res.code === 'ok') {
        this.session.clearSession();
        this.session.set(USER_NAME,res.data.attributes.userName);
        this.session.set(USER_GENDER,res.data.attributes.sex);
        this.session.set(USER_PHONE,res.data.attributes.phone);
        this.session.set(USER_EMAIL,res.data.attributes.email);
        this.session.set(USER_ICON,res.data.attributes.icon);

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

}
