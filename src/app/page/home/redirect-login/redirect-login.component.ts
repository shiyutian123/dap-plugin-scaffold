/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-04 08:35:32
 * @LastEditTime: 2019-11-04 15:14:07
 * @LastEditors: Devin Shi
 * @Description:
 */
import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/network/network.service';
import { SessionStorageService } from 'src/app/cache/sessionStorage/session-storage.service';
import { DdmpAuthService } from 'src/app/auth/ddmp-auth.service';
import { LocalStorageService } from 'src/app/cache/localStorage/local-storage.service';
import { TOKEN, USER_NAME, USER_ID, USER_TYPE } from 'src/app/cache/storage.namespace';
import { NetworkApi } from 'src/app/network/network-api';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-redirect-login',
  templateUrl: './redirect-login.component.html',
  styleUrls: ['./redirect-login.component.less']
})
export class RedirectLoginComponent implements OnInit {
  code: string;

  constructor(
    private http: HttpClient,
    private network: NetworkService,
    private session: SessionStorageService,
    private ddmpAuthService: DdmpAuthService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getToken();
  }

  /**
   * @author wucan
   * @date 2019年10月11日
   * @description 获取从外部跳转过来带过来的code
   */
  getToken() {
    this.code = location.hash.split('=')[1];
    // this.code = "N0MeKJeChNsPeK0LXdualzjkasMH6bj4BQopUO66SxA=";
    this.network.get("/fnd/user/externalAuth?code=" + this.code).subscribe(
      (res: any) => {
        if (res.code === 'ok') {
          this.session.set(TOKEN, res.data);
          this.localStorageService.set('TOKEN', res.data);
          this.ddmpAuthService.setToken({
            'accessToken': res.data.accessToken,
            'refreshToken': res.data.refreshToken,
            'authCode': '',
            'userCode': ''
          });
          setTimeout(() => {
            this.getUserInfo();
            this.localStorageService.set('currentToken', this.ddmpAuthService.currentToken);
            this.router.navigate(['./home/app-my-to-do']);
          }, 150);
        }
      }
    );
  }

  getUserInfo() {
    this.http.get(NetworkApi.GETUSERINFO.url, {
    }).subscribe((res: any) => {
      if (res.code === 'ok') {
        this.localStorageService.set(USER_NAME, res.data.attributes['userName'] || '');
        this.localStorageService.set(USER_ID, res.data.attributes['uid'] || '');
        this.localStorageService.set(USER_TYPE, res.data.attributes['type'] || '');
        this.ddmpAuthService.setUser({
          'id': res.data.attributes['uid'] || '',
          'code': res.data.attributes['uid'] || '',
          'authCode': res.data.attributes['uid'] || '',
          'name': res.data.attributes['userName'] || '',
          'extraInfo': res.data.attributes || {}
        });
        this.localStorageService.set('currentUser', this.ddmpAuthService.currentUser);
      } else {
      }
    });
  }
}
