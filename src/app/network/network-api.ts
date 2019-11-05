/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-04 08:35:32
 * @LastEditTime: 2019-11-04 20:23:50
 * @LastEditors: Devin Shi
 * @Description:
 */
import { environment } from 'src/environments/environment';

export class NetworkUrl {
  url: string;
  method?: "POST" | "GET" | "DELETE" | "PUT" = "GET";
}

export const NetworkApi = {
  LOGIN: {
    url: '/fnd/user/login',
    method: "POST"
  },
  NEW_LOGIN: {
    url: '/fnd/user/login',
    method: 'POST'
  },
  // 更新token接口|
  REFRESH_TOKEN: {
    url: '/fnd/user/refreshToken',
    method: 'GET'
  },
  GETUSERINFO: {
    url: '/fnd/user/loginInfo',
    method: 'GET'
  }
};

