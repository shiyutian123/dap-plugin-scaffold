import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { DdmpHttpConfig } from "./ddmp-http-config";
import { DdmpHttpInterceptor } from "./ddmp-http-interceptor";

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: []
})
export class DdmpHttpModule {
  static forRoot(config: DdmpHttpConfig): ModuleWithProviders {
    return {
      ngModule: DdmpHttpModule,
      providers: [
        { provide: DdmpHttpConfig, useValue: config },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: DdmpHttpInterceptor,
          multi: true
        }
      ]
    };
  }
}
