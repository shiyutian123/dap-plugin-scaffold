/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-05 11:42:51
 * @LastEditTime: 2019-11-06 21:07:46
 * @LastEditors: Devin Shi
 * @Description:
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NetworkService } from 'src/app/network/network.service';
import { DdmpAuthService } from 'src/app/auth/ddmp-auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class PlanSetService {
  constructor(
    private network: NetworkService,
    private ddmpAuthService: DdmpAuthService,
    private http: HttpClient
  ) {
  }

  getPlanDemo() {
    // 如果是调用系统内接口，可以使用 environment.baseDomain
    return this.network.get(environment.baseDomain + '/process/authProxy/getAuthorizations');
  }
}
