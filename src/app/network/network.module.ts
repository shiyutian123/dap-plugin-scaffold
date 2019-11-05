/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-08-06 20:45:46
 * @LastEditTime: 2019-11-04 15:12:13
 * @LastEditors: Devin Shi
 * @Description:
 */
import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./token-interceptor";

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: []
})
export class DdmpNetworkModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DdmpNetworkModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
      ]
    };
  }
}
