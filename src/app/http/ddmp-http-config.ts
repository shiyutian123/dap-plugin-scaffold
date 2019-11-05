export class DdmpHttpConfig {
  /** 域名 */
  baseDomain: string;
  /** 请求延迟，单位：毫秒，默认：`30000` */
  timeout? = 30000;
  /** 是否需要安全认证 */
  withCredentials? = false;
}
