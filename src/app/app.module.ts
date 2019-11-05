/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 12:37:19
 * @LastEditTime: 2019-11-05 08:12:59
 * @LastEditors: Devin Shi
 */
import { MessagesService } from './services/messages/messages-service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NZ_I18N, zh_CN, NZ_NOTIFICATION_CONFIG, NgZorroAntdModule } from "ng-zorro-antd";

import { registerLocaleData } from "@angular/common";
import { SharedModule } from "./shared.module";
import { AppRoutingModule } from "./app-routing.module";

import { NgProgressModule } from "@ngx-progressbar/core";
import { NgProgressRouterModule } from "@ngx-progressbar/router";
import { NgProgressHttpModule } from "@ngx-progressbar/http";

import { DdmpHttpModule } from "./http/ddmp-http.module";
import { environment } from "src/environments/environment";
import { UtilsModule } from './util/util.module';
import zh from '@angular/common/locales/zh';
import { PagesModule } from './page/home/pages.module';
import { DdmpLayoutModule } from './layout/ddmp-layout.module';
import { DdmpAuthModule } from './auth/ddmp-auth.module';
import { DdmpNetworkModule } from './network/network.module';

import { RouteReuseStrategy } from '@angular/router';
import { GlobalLoadingService } from './services/global-loading/global-loading.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    UtilsModule,
    DdmpLayoutModule,
    DdmpAuthModule,
    DdmpHttpModule.forRoot({
      baseDomain: environment.baseDomain
    }),
    DdmpNetworkModule.forRoot(),
    NgProgressModule.withConfig({
      trickleSpeed: 200,
      min: 20,
      meteor: false
    }),
    NgProgressRouterModule.withConfig({
      delay: 300
    }),
    NgProgressHttpModule.withConfig({
      silentApis: []
    }),
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_NOTIFICATION_CONFIG, useValue: { nzDuration: 2500, nzMaxStack: 3, nzPlacement: "topRight", nzTop: "120px" } },
    MessagesService,
    GlobalLoadingService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
