/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-05 11:42:51
 * @LastEditTime: 2019-11-06 19:47:16
 * @LastEditors: Devin Shi
 * @Description:
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NetworkService } from 'src/app/network/network.service';
import { DdmpAuthService } from 'src/app/auth/ddmp-auth.service';

@Injectable()
export class PlanSetService {
  constructor(
    private network: NetworkService,
    private ddmpAuthService: DdmpAuthService,
    private http: HttpClient
  ) {
  }

  getPlanDemo() {
    return this.network.get('http://k8s.definesys.com:30577/process/authProxy/getAuthorizations');
  }
}
