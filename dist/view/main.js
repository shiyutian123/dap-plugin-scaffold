(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./page/login/login.module": [
		"./src/app/page/login/login.module.ts",
		"page-login-login-module"
	],
	"src/plugins/sdmp/plan-all/plan-all.module": [
		"./src/plugins/sdmp/plan-all/plan-all.module.ts",
		"src-plugins-sdmp-plan-all-plan-all-module"
	],
	"src/plugins/sdmp/plan-set/plan-set.module": [
		"./src/plugins/sdmp/plan-set/plan-set.module.ts",
		"src-plugins-sdmp-plan-set-plan-set-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _page_home_pages_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/home/pages.routes */ "./src/app/page/home/pages.routes.ts");
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 14:01:15
 * @LastEditTime: 2019-11-05 08:11:44
 * @LastEditors: Devin Shi
 */





var routes = [
    {
        path: '',
        redirectTo: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].redirectTo,
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: './page/login/login.module#LoginModule'
        // redirectTo: 'home',
    }
].concat(_page_home_pages_routes__WEBPACK_IMPORTED_MODULE_4__["PageRoutes"]
// {
//   path: '**',
//   redirectTo: 'home/app-my-to-do'
// }
);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    useHash: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].useHash,
                    onSameUrlNavigation: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].onSameUrlNavigation,
                    scrollPositionRestoration: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].onSameUrlNavigation,
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Description: In User Settings Edit\n * @Author: your name\n * @Date: 2019-10-11 12:37:19\n * @LastEditTime: 2019-11-04 15:16:05\n * @LastEditors: Devin Shi\n -->\n<!-- <ng-progress></ng-progress> -->\n\n  <!-- <link rel=\"stylesheet\" href=\"../assets/theme/theme-base.less\" title=\"Default Style\"> -->\n\n\n<!-- <link rel=\" alternate\" href=\"../assets/theme/theme-red.less\" title=\"red\" id=\"redTheme\">\n<link rel=\" stylesheet\" href=\"../assets/theme/theme-blue.less\" title=\"blue\"> -->\n\n  <router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_ddmp_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/ddmp-menu.service */ "./src/app/layout/ddmp-menu.service.ts");
/* harmony import */ var _auth_ddmp_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/ddmp-auth.service */ "./src/app/auth/ddmp-auth.service.ts");
/* harmony import */ var _layout_ddmp_appinfo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/ddmp-appinfo.service */ "./src/app/layout/ddmp-appinfo.service.ts");
/* harmony import */ var _cache_sessionStorage_session_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cache/sessionStorage/session-storage.service */ "./src/app/cache/sessionStorage/session-storage.service.ts");
/* harmony import */ var src_app_cache_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/cache/localStorage/local-storage.service */ "./src/app/cache/localStorage/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _cache_storage_namespace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cache/storage.namespace */ "./src/app/cache/storage.namespace.ts");
/* harmony import */ var _network_network_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./network/network.service */ "./src/app/network/network.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 13:42:14
 * @LastEditTime: 2019-11-05 08:38:51
 * @LastEditors: Devin Shi
 */












var AppComponent = /** @class */ (function () {
    function AppComponent(ddmpLayoutMenuService, ddmpAuthService, ddmpAppInfoService, session, localStorageService, network, router, activatedRoute, sanitizer) {
        var _this = this;
        this.ddmpLayoutMenuService = ddmpLayoutMenuService;
        this.ddmpAuthService = ddmpAuthService;
        this.ddmpAppInfoService = ddmpAppInfoService;
        this.session = session;
        this.localStorageService = localStorageService;
        this.network = network;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.code = ""; // 从统一登录界面获取到code
        this.localRouteUrl = ""; // 当前路由
        this.appColor = "red";
        this.themeAddress = '../assets/theme/theme-red.less';
        this.routeSubscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (route) { return route.outlet === 'primary'; })).subscribe(function (event) {
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].needSSO) {
            debugger;
            this.getToken();
        }
        else {
            debugger;
            this.validLogin();
        }
        this.ddmpLayoutMenuService.setMenuItem([], []);
        setTimeout(function () {
            debugger;
            var currentToken = _this.localStorageService.get('currentToken');
            if (currentToken) {
                _this.ddmpAuthService.setToken(currentToken);
            }
            var currentUser = _this.localStorageService.get('currentUser');
            if (currentUser) {
                _this.ddmpAuthService.setUser(currentUser);
            }
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].appInfo && src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].appInfo["appId"]) {
                _this.ddmpAppInfoService.setAppInfo(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].appInfo);
            }
        }, 500);
    };
    /**
     * @author wucan
     * @date 2019年9月27日
     * @description 监听页面打开状态
     */
    AppComponent.prototype.setSoket = function () {
        var user = this.localStorageService.get('currentUser');
        var sokit = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].appInfo.appId + user.code;
        console.log(sokit);
    };
    /**
     * @author wucan
     * @date 2019年7月30日
     * @description 从登录界面获取code然后通过code来获取token
     */
    AppComponent.prototype.getToken = function () {
        var _this = this;
        this.code = location.search.slice(6);
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].localUrl + "/view/index.html";
        var clientId = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].clientId;
        if (!this.localStorageService.get('currentToken') && !this.code) {
            // TODO: 跳转至统一登录界面
            var loginPageMatches = window.location.href.match('login');
            if (!loginPageMatches) {
                location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].ssoDomain + "/uaa/oauth/authorize?response_type=code&client_id=" + clientId + "&redirect_uri=" + url;
                this.router.navigate(['/tologin']);
            }
        }
        else if (!this.localStorageService.get('currentToken')) {
            this.network.get("/userLogin/auth?code=" + this.code + "&clientId=" + clientId).subscribe(function (res) {
                if (res.code === 'ok') {
                    _this.session.set(_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_9__["TOKEN"], res.data);
                    _this.localStorageService.set('TOKEN', res.data);
                    _this.ddmpAuthService.setToken({
                        'accessToken': res.data.access_token,
                        'refreshToken': res.data.refresh_token,
                        'authCode': '',
                        'userCode': ''
                    });
                    setTimeout(function () {
                        _this.getUserInfo();
                        _this.localStorageService.set('currentToken', _this.ddmpAuthService.currentToken);
                        debugger;
                        console.log('------------------ href ------------------');
                        console.log(window.location.href);
                    }, 150);
                }
                else {
                }
            });
        }
        else if (!this.code) {
            // TODO: 获取token接口
            this.session.set(_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_9__["TOKEN"], this.localStorageService.get('currentToken'));
            this.localStorageService.set('TOKEN', this.localStorageService.get('currentToken'));
            var currentToken = this.localStorageService.get('currentToken');
            if (currentToken) {
                this.ddmpAuthService.setToken(currentToken);
                // this.ddmpLayoutMenuService.getOnlineMenusOfAppCode(environment.appInfo["appCode"]).subscribe((menus) => {
                //   this.ddmpLayoutMenuService.setMenuItem(menus);
                // });
            }
        }
    };
    AppComponent.prototype.validLogin = function () {
        if (!this.localStorageService.get('currentToken')) {
            if (!window.location.href.match('home/redirect-my-to-do') && !window.location.href.match('redirect-login')) {
                this.router.navigate(['/login']);
            }
        }
        else if (!this.code) {
            // TODO: 获取token接口
            this.session.set(_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_9__["TOKEN"], this.localStorageService.get('currentToken'));
            this.localStorageService.set('TOKEN', this.localStorageService.get('currentToken'));
            var currentToken = this.localStorageService.get('currentToken');
            if (currentToken) {
                this.ddmpAuthService.setToken(currentToken);
            }
        }
    };
    AppComponent.prototype.getUserInfo = function () {
        var _this = this;
        var token = this.localStorageService.get('TOKEN');
        this.network.get("/userLogin/getUser?access_token=" + token.access_token).subscribe(function (res) {
            if (res.code === 'ok') {
                _this.localStorageService.set(_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_9__["USER_NAME"], res.data.attributes.userName);
                _this.localStorageService.set(_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_9__["USER_ID"], res.data.attributes.uid);
                _this.localStorageService.set(_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_9__["USER_TYPE"], res.data.attributes.type);
                _this.ddmpAuthService.setUser({
                    'id': res.data.attributes.uid,
                    'code': res.data.attributes.uid,
                    'authCode': res.data.attributes.uid,
                    'name': res.data.attributes.userName,
                    'extraInfo': res.data.attributes
                });
                _this.localStorageService.set('currentUser', _this.ddmpAuthService.currentUser);
            }
            else {
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_layout_ddmp_menu_service__WEBPACK_IMPORTED_MODULE_2__["DdmpLayoutMenuService"],
            _auth_ddmp_auth_service__WEBPACK_IMPORTED_MODULE_3__["DdmpAuthService"],
            _layout_ddmp_appinfo_service__WEBPACK_IMPORTED_MODULE_4__["DdmpAppInfoService"],
            _cache_sessionStorage_session_storage_service__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"],
            src_app_cache_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"],
            _network_network_service__WEBPACK_IMPORTED_MODULE_10__["NetworkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/messages/messages-service */ "./src/app/services/messages/messages-service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-progressbar/router */ "./node_modules/@ngx-progressbar/router/fesm5/ngx-progressbar-router.js");
/* harmony import */ var _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-progressbar/http */ "./node_modules/@ngx-progressbar/http/fesm5/ngx-progressbar-http.js");
/* harmony import */ var _http_ddmp_http_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./http/ddmp-http.module */ "./src/app/http/ddmp-http.module.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _util_util_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./util/util.module */ "./src/app/util/util.module.ts");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _page_home_pages_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./page/home/pages.module */ "./src/app/page/home/pages.module.ts");
/* harmony import */ var _layout_ddmp_layout_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layout/ddmp-layout.module */ "./src/app/layout/ddmp-layout.module.ts");
/* harmony import */ var _auth_ddmp_auth_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/ddmp-auth.module */ "./src/app/auth/ddmp-auth.module.ts");
/* harmony import */ var _network_network_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./network/network.module */ "./src/app/network/network.module.ts");
/* harmony import */ var _services_global_loading_global_loading_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/global-loading/global-loading.service */ "./src/app/services/global-loading/global-loading.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 12:37:19
 * @LastEditTime: 2019-11-05 08:12:59
 * @LastEditors: Devin Shi
 */























Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_17___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _util_util_module__WEBPACK_IMPORTED_MODULE_16__["UtilsModule"],
                _layout_ddmp_layout_module__WEBPACK_IMPORTED_MODULE_19__["DdmpLayoutModule"],
                _auth_ddmp_auth_module__WEBPACK_IMPORTED_MODULE_20__["DdmpAuthModule"],
                _http_ddmp_http_module__WEBPACK_IMPORTED_MODULE_14__["DdmpHttpModule"].forRoot({
                    baseDomain: src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].baseDomain
                }),
                _network_network_module__WEBPACK_IMPORTED_MODULE_21__["DdmpNetworkModule"].forRoot(),
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_11__["NgProgressModule"].withConfig({
                    trickleSpeed: 200,
                    min: 20,
                    meteor: false
                }),
                _ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_12__["NgProgressRouterModule"].withConfig({
                    delay: 300
                }),
                _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_13__["NgProgressHttpModule"].withConfig({
                    silentApis: []
                }),
                _page_home_pages_module__WEBPACK_IMPORTED_MODULE_18__["PagesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
            ],
            providers: [
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["zh_CN"] },
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_NOTIFICATION_CONFIG"], useValue: { nzDuration: 2500, nzMaxStack: 3, nzPlacement: "topRight", nzTop: "120px" } },
                _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"],
                _services_global_loading_global_loading_service__WEBPACK_IMPORTED_MODULE_22__["GlobalLoadingService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/ddmp-auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/auth/ddmp-auth.guard.ts ***!
  \*****************************************/
/*! exports provided: DdmpAuthNavGuard, DdmpConfirmDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdmpAuthNavGuard", function() { return DdmpAuthNavGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdmpConfirmDeactivateGuard", function() { return DdmpConfirmDeactivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ddmp_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ddmp-auth.service */ "./src/app/auth/ddmp-auth.service.ts");

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 14:50:00
 * @LastEditTime: 2019-11-05 08:11:59
 * @LastEditors: Devin Shi
 */



var DdmpAuthNavGuard = /** @class */ (function () {
    function DdmpAuthNavGuard(router, ddmpAuthService) {
        this.router = router;
        this.ddmpAuthService = ddmpAuthService;
    }
    DdmpAuthNavGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        var data = route.data;
        var queryParams = route.queryParams;
        return true;
    };
    DdmpAuthNavGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    DdmpAuthNavGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ddmp_auth_service__WEBPACK_IMPORTED_MODULE_3__["DdmpAuthService"]])
    ], DdmpAuthNavGuard);
    return DdmpAuthNavGuard;
}());

var DdmpConfirmDeactivateGuard = /** @class */ (function () {
    function DdmpConfirmDeactivateGuard(
    // private confirmModalService: ConfirmModalService
    ) {
    }
    DdmpConfirmDeactivateGuard.prototype.canDeactivate = function (component) {
        // if (component.isDirty && component.isDirty()) {
        //     return this.confirmModalService.doConfirm();
        // } else {
        //     return true;
        // }
        return true;
    };
    DdmpConfirmDeactivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DdmpConfirmDeactivateGuard);
    return DdmpConfirmDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/auth/ddmp-auth.module.ts":
/*!******************************************!*\
  !*** ./src/app/auth/ddmp-auth.module.ts ***!
  \******************************************/
/*! exports provided: DdmpAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdmpAuthModule", function() { return DdmpAuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ddmp_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ddmp-auth.service */ "./src/app/auth/ddmp-auth.service.ts");
/* harmony import */ var _ddmp_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ddmp-auth.guard */ "./src/app/auth/ddmp-auth.guard.ts");

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 12:22:54
 * @LastEditTime: 2019-08-20 16:58:57
 * @LastEditors: Please set LastEditors
 */




var DdmpAuthModule = /** @class */ (function () {
    function DdmpAuthModule() {
    }
    DdmpAuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            ],
            providers: [_ddmp_auth_service__WEBPACK_IMPORTED_MODULE_3__["DdmpAuthService"], _ddmp_auth_guard__WEBPACK_IMPORTED_MODULE_4__["DdmpAuthNavGuard"], _ddmp_auth_guard__WEBPACK_IMPORTED_MODULE_4__["DdmpConfirmDeactivateGuard"]]
        })
    ], DdmpAuthModule);
    return DdmpAuthModule;
}());



/***/ }),

/***/ "./src/app/auth/ddmp-auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/ddmp-auth.service.ts ***!
  \*******************************************/
/*! exports provided: DdmpAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdmpAuthService", function() { return DdmpAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DdmpAuthService = /** @class */ (function () {
    function DdmpAuthService() {
        this.currentUserObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentTokenObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    Object.defineProperty(DdmpAuthService.prototype, "currentUser", {
        /**
         * 获取当前用户信息
         */
        get: function () {
            return this.user;
        },
        enumerable: true,
        configurable: true
    });
    DdmpAuthService.prototype.setUser = function (user) {
        this.user = user;
        this.currentUserObservable$.next(user);
    };
    Object.defineProperty(DdmpAuthService.prototype, "currentUserObservable", {
        /**
        * 获取当前用户信息的通知
        */
        get: function () {
            return this.currentUserObservable$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DdmpAuthService.prototype, "currentToken", {
        /**
         * 获取当前 Token
         */
        get: function () {
            return this.token;
        },
        enumerable: true,
        configurable: true
    });
    DdmpAuthService.prototype.setToken = function (token) {
        this.token = token;
        this.currentTokenObservable$.next(token);
    };
    Object.defineProperty(DdmpAuthService.prototype, "currentTokenObservable", {
        /**
         * 获取当前 Token 的通知
         */
        get: function () {
            return this.currentTokenObservable$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DdmpAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DdmpAuthService);
    return DdmpAuthService;
}());



/***/ }),

/***/ "./src/app/cache/localStorage/local-storage.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/cache/localStorage/local-storage.service.ts ***!
  \*************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 *  之后考虑添加一个过期功能
 *  Service多播要在其他服务中实现
 */


var ls = localStorage;
var LocalStorageService = /** @class */ (function () {
    // expiredTime: number = 1000 * 60 * 60 * 24 * 7; // 7天过期时间
    function LocalStorageService() {
    }
    /**
     * 获取key对应的value
     */
    LocalStorageService.prototype.get = function (key) {
        return JSON.parse(ls.getItem(key));
    };
    /**
     *  获取一个list
     */
    LocalStorageService.prototype.getList = function (key) {
        var before = ls.getItem(key);
        return before ? JSON.parse(before) : [];
    };
    /**
     *  设置对应key的值
     */
    LocalStorageService.prototype.set = function (key, value) {
        if (!value && value === undefined) {
            return;
        }
        var arr = JSON.stringify(value);
        ls.setItem(key, arr);
    };
    /**
     *  删除某一项
     * @param localStorage中的key
     */
    LocalStorageService.prototype.removeItem = function (key) {
        ls.removeItem(ls.getItem(key));
    };
    /**
     *  清理localStorage
     */
    LocalStorageService.prototype.clearStorage = function () {
        ls.clear();
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/cache/sessionStorage/session-storage.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/cache/sessionStorage/session-storage.service.ts ***!
  \*****************************************************************/
/*! exports provided: SessionStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorageService", function() { return SessionStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ss = sessionStorage;
var SessionStorageService = /** @class */ (function () {
    function SessionStorageService() {
    }
    /**
     * 获取key对应的value
     */
    SessionStorageService.prototype.get = function (key) {
        return JSON.parse(ss.getItem(key));
    };
    /**
     *  获取一个list
     */
    SessionStorageService.prototype.getList = function (key) {
        var before = ss.getItem(key);
        return before ? JSON.parse(before) : [];
    };
    /**
     *  设置对应key的值
     */
    SessionStorageService.prototype.set = function (key, value) {
        if (!value && value === undefined) {
            return;
        }
        var arr = JSON.stringify(value);
        ss.setItem(key, arr);
    };
    /**
     *  清理sessionStorge中信息
     */
    SessionStorageService.prototype.clearSession = function () {
        ss.clear();
    };
    SessionStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SessionStorageService);
    return SessionStorageService;
}());



/***/ }),

/***/ "./src/app/cache/storage.namespace.ts":
/*!********************************************!*\
  !*** ./src/app/cache/storage.namespace.ts ***!
  \********************************************/
/*! exports provided: GLOBAL_NAMESPACE, APP_INFO_NAMESPACE, INIT_FLAG, START_USING_DATE, USER_INFO_NAMESPACE, USER_NAME, USER_ID, USER_GENDER, USER_EMAIL, USER_PHONE, USER_ICON, TOKEN, USER_TYPE, BUSINESS_CENTERS_OWN_BY_USER, APP_LAYOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_NAMESPACE", function() { return GLOBAL_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_INFO_NAMESPACE", function() { return APP_INFO_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_FLAG", function() { return INIT_FLAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_USING_DATE", function() { return START_USING_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_INFO_NAMESPACE", function() { return USER_INFO_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_NAME", function() { return USER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ID", function() { return USER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_GENDER", function() { return USER_GENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_EMAIL", function() { return USER_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PHONE", function() { return USER_PHONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ICON", function() { return USER_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_TYPE", function() { return USER_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUSINESS_CENTERS_OWN_BY_USER", function() { return BUSINESS_CENTERS_OWN_BY_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LAYOUT", function() { return APP_LAYOUT; });
/**
 *  以app开始
 */
var GLOBAL_NAMESPACE = 'app.';
var APP_INFO_NAMESPACE = GLOBAL_NAMESPACE + 'appInfo.';
var INIT_FLAG = APP_INFO_NAMESPACE + 'initFlag';
var START_USING_DATE = APP_INFO_NAMESPACE + 'startUsingDate';
/**
 *  用户信息相关，存在SessionStorage比较合适，比如token
 */
var USER_INFO_NAMESPACE = GLOBAL_NAMESPACE + 'userInfo.';
var USER_NAME = USER_INFO_NAMESPACE + 'userName';
var USER_ID = USER_INFO_NAMESPACE + 'userId';
var USER_GENDER = USER_INFO_NAMESPACE + 'userGender';
var USER_EMAIL = USER_INFO_NAMESPACE + 'userEmail';
var USER_PHONE = USER_INFO_NAMESPACE + 'userPhone';
var USER_ICON = USER_INFO_NAMESPACE + 'userIcon';
var TOKEN = USER_INFO_NAMESPACE + 'token';
var USER_TYPE = USER_INFO_NAMESPACE + 'type';
var BUSINESS_CENTERS_OWN_BY_USER = USER_INFO_NAMESPACE + 'businessCentersList';
/**
 *  非敏感信息，存储在localStorage中，例如app布局信息，皮肤等等
 */
var APP_LAYOUT = GLOBAL_NAMESPACE + 'layout';


/***/ }),

/***/ "./src/app/http/ddmp-http-config.ts":
/*!******************************************!*\
  !*** ./src/app/http/ddmp-http-config.ts ***!
  \******************************************/
/*! exports provided: DdmpHttpConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdmpHttpConfig", function() { return DdmpHttpConfig; });
var DdmpHttpConfig = /** @class */ (function () {
    function DdmpHttpConfig() {
        /** 请求延迟，单位：毫秒，默认：`30000` */
        this.timeout = 30000;
        /** 是否需要安全认证 */
        this.withCredentials = false;
    }
    return DdmpHttpConfig;
}());



/***/ }),

/***/ "./src/app/http/ddmp-http-interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/http/ddmp-http-interceptor.ts ***!
  \***********************************************/
/*! exports provided: DdmpHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdmpHttpInterceptor", function() { return DdmpHttpInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ddmp_http_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ddmp-http-config */ "./src/app/http/ddmp-http-config.ts");
/* harmony import */ var _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/messages/messages-service */ "./src/app/services/messages/messages-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cache_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cache/localStorage/local-storage.service */ "./src/app/cache/localStorage/local-storage.service.ts");
/* harmony import */ var _network_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../network/network.service */ "./src/app/network/network.service.ts");
/* harmony import */ var _auth_ddmp_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth/ddmp-auth.service */ "./src/app/auth/ddmp-auth.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_global_loading_global_loading_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/global-loading/global-loading.service */ "./src/app/services/global-loading/global-loading.service.ts");

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 13:42:17
 * @LastEditTime: 2019-10-14 12:35:17
 * @LastEditors: Please set LastEditors
 */












/**
 * Ddmp 网络请求通用的拦截器，拦截相应的网络请求，并设置初始化信息, 设置网络请求的通用domain 和 timeout，也可以设置相关请求头，积累一段时间之后，转换为标准包
 */
var DdmpHttpInterceptor = /** @class */ (function () {
    function DdmpHttpInterceptor(injector, network, ddmpAuthService, messagesService, localStorageService, router, globalLoadingService) {
        this.injector = injector;
        this.network = network;
        this.ddmpAuthService = ddmpAuthService;
        this.messagesService = messagesService;
        this.localStorageService = localStorageService;
        this.router = router;
        this.globalLoadingService = globalLoadingService;
        this.requestStack = [];
    }
    DdmpHttpInterceptor.prototype.handleError = function (error) {
        // 给全局Loading组件发送事件，为false
        // this.globalLoadingService.showError(error);
        this.popRequestStack();
        if (error.status === 401 || error.status === 0) {
            this.messagesService.showNotificationErrorMessage('用户错误', '当前登录过期，请重新登录！');
            this.localStorageService.clearStorage();
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].needSSO) {
                setTimeout(function () {
                    location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].ssoDomain + "/uaa/logout";
                }, 1000);
            }
            else {
                this.router.navigate(['./login']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error['message']);
        }
        else {
            this.messagesService.showNotificationErrorMessage('请求出错', '当前网络不稳定，请刷新后重试');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error['message']);
        }
    };
    DdmpHttpInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var config = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ withCredentials: false, timeout: 30000 }, this.injector.get(_ddmp_http_config__WEBPACK_IMPORTED_MODULE_5__["DdmpHttpConfig"], null));
        var reqUrl = req.url;
        if (reqUrl.startsWith("/")) {
            reqUrl = config.baseDomain + req.url;
        }
        var httpParams = req.params;
        if (req.method === 'GET') {
            var params_1 = req.params;
            var tempParams_1 = {};
            tempParams_1.timestamp = new Date().getTime() + '';
            if (params_1 && params_1.keys) {
                params_1.keys().forEach(function (key) {
                    tempParams_1[key + ''] = params_1.get(key);
                });
            }
            // 解决 IE GET 请求缓存 问题
            httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: tempParams_1
            });
        }
        var clonedRequest = req.clone({
            url: reqUrl,
            withCredentials: req.withCredentials === true ? true : config.withCredentials,
            params: httpParams
        });
        this.requestStack.push(clonedRequest);
        // 发送事件给全局Loading组件，为true
        this.globalLoadingService.showLoading(clonedRequest);
        return next.handle(clonedRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(config.timeout), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            // this.globalLoadingService.showSuccess(event);
            _this.popRequestStack();
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return _this.handleError(err); }
        // 处理response，给全局Loading组件发送事件，为false
        ));
    };
    DdmpHttpInterceptor.prototype.popRequestStack = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.requestStack && _this.requestStack.length > 0) {
                _this.requestStack.pop();
                if (_this.requestStack.length === 0) {
                    _this.globalLoadingService.showSuccess(event);
                }
            }
        }, 600);
    };
    DdmpHttpInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _network_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"],
            _auth_ddmp_auth_service__WEBPACK_IMPORTED_MODULE_10__["DdmpAuthService"],
            _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"],
            _cache_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _services_global_loading_global_loading_service__WEBPACK_IMPORTED_MODULE_12__["GlobalLoadingService"]])
    ], DdmpHttpInterceptor);
    return DdmpHttpInterceptor;
}());



/***/ }),

/***/ "./src/app/http/ddmp-http.module.ts":
/*!******************************************!*\
  !*** ./src/app/http/ddmp-http.module.ts ***!
  \******************************************/
/*! exports provided: DdmpHttpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdmpHttpModule", function() { return DdmpHttpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ddmp_http_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ddmp-http-config */ "./src/app/http/ddmp-http-config.ts");
/* harmony import */ var _ddmp_http_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ddmp-http-interceptor */ "./src/app/http/ddmp-http-interceptor.ts");





var DdmpHttpModule = /** @class */ (function () {
    function DdmpHttpModule() {
    }
    DdmpHttpModule_1 = DdmpHttpModule;
    DdmpHttpModule.forRoot = function (config) {
        return {
            ngModule: DdmpHttpModule_1,
            providers: [
                { provide: _ddmp_http_config__WEBPACK_IMPORTED_MODULE_3__["DdmpHttpConfig"], useValue: config },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _ddmp_http_interceptor__WEBPACK_IMPORTED_MODULE_4__["DdmpHttpInterceptor"],
                    multi: true
                }
            ]
        };
    };
    var DdmpHttpModule_1;
    DdmpHttpModule = DdmpHttpModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            providers: []
        })
    ], DdmpHttpModule);
    return DdmpHttpModule;
}());



/***/ }),

/***/ "./src/app/layout/ddmp-appinfo.service.ts":
/*!************************************************!*\
  !*** ./src/app/layout/ddmp-appinfo.service.ts ***!
  \************************************************/
/*! exports provided: DdmpAppInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdmpAppInfoService", function() { return DdmpAppInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-04 08:35:32
 * @LastEditTime: 2019-11-04 20:19:44
 * @LastEditors: Devin Shi
 * @Description:
 */



var DdmpAppInfoService = /** @class */ (function () {
    function DdmpAppInfoService(httpClient) {
        this.httpClient = httpClient;
        this.appInfoObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    Object.defineProperty(DdmpAppInfoService.prototype, "appInfoObservable", {
        get: function () {
            return this.appInfoObservable$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DdmpAppInfoService.prototype, "appInfo", {
        get: function () {
            return this.currentAppInfo;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 改变 App 应用信息
     * @param appInfo 版本信息选项
     */
    DdmpAppInfoService.prototype.setAppInfo = function (appInfo) {
        this.currentAppInfo = appInfo;
        this.appInfoObservable$.next(this.currentAppInfo);
    };
    DdmpAppInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DdmpAppInfoService);
    return DdmpAppInfoService;
}());



/***/ }),

/***/ "./src/app/layout/ddmp-layout.module.ts":
/*!**********************************************!*\
  !*** ./src/app/layout/ddmp-layout.module.ts ***!
  \**********************************************/
/*! exports provided: DdmpLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdmpLayoutModule", function() { return DdmpLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _slider_layout_slider_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider-layout/slider-layout.module */ "./src/app/layout/slider-layout/slider-layout.module.ts");
/* harmony import */ var _ddmp_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ddmp-menu.service */ "./src/app/layout/ddmp-menu.service.ts");
/* harmony import */ var _ddmp_appinfo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ddmp-appinfo.service */ "./src/app/layout/ddmp-appinfo.service.ts");






var DdmpLayoutModule = /** @class */ (function () {
    function DdmpLayoutModule() {
    }
    DdmpLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _slider_layout_slider_layout_module__WEBPACK_IMPORTED_MODULE_3__["SliderLayoutModule"]
            ],
            providers: [_ddmp_menu_service__WEBPACK_IMPORTED_MODULE_4__["DdmpLayoutMenuService"], _ddmp_appinfo_service__WEBPACK_IMPORTED_MODULE_5__["DdmpAppInfoService"]]
        })
    ], DdmpLayoutModule);
    return DdmpLayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/ddmp-menu.service.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/ddmp-menu.service.ts ***!
  \*********************************************/
/*! exports provided: DdmpLayoutMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdmpLayoutMenuService", function() { return DdmpLayoutMenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);

/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-04 08:35:32
 * @LastEditTime: 2019-11-05 07:52:46
 * @LastEditors: Devin Shi
 * @Description:
 */



var DdmpLayoutMenuService = /** @class */ (function () {
    function DdmpLayoutMenuService() {
        this.menuItemObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentMenuItem = [];
    }
    Object.defineProperty(DdmpLayoutMenuService.prototype, "menuItemObservable", {
        get: function () {
            return this.menuItemObservable$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DdmpLayoutMenuService.prototype, "menuItems", {
        get: function () {
            return this.currentMenuItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 菜单改变的通知
     * @param menuItems 菜单选项
     */
    DdmpLayoutMenuService.prototype.setMenuItem = function (defaultMenus, menuItems) {
        // __START_PLUGIN_ROUTER__ //
        var PLUGIN_ROUTER = [
            {
                "path": "app-plan-set",
                "loadChildren": "src/plugins/sdmp/plan-set/plan-set.module#PlanSetModule",
                "data": {
                    "name": "计划设置"
                }
            },
            {
                "path": "app-plan-all",
                "loadChildren": "src/plugins/sdmp/plan-all/plan-all.module#PlanAllModule",
                "data": {
                    "name": "计划管理"
                }
            }
        ];
        // __END_PLUGIN_ROUTER__ //
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(PLUGIN_ROUTER)) {
            PLUGIN_ROUTER = [];
        }
        PLUGIN_ROUTER.forEach(function (pluginRoute) {
            menuItems.unshift({
                functionType: "DefaultMenu",
                haveChild: false,
                icon: 'profile',
                iconType: 'profile',
                isGroup: false,
                isHidden: false,
                isSubmenu: false,
                itemText: pluginRoute.data.name,
                name: pluginRoute.data.name,
                navigateLink: pluginRoute.path,
                path: "home/" + pluginRoute.path,
            });
        });
        this.currentMenuItem = menuItems ? menuItems : [];
        this.menuItemObservable$.next(this.currentMenuItem);
    };
    DdmpLayoutMenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DdmpLayoutMenuService);
    return DdmpLayoutMenuService;
}());



/***/ }),

/***/ "./src/app/layout/slider-layout/slider-layout.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/slider-layout/slider-layout.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Description: In User Settings Edit\n * @Author: your name\n * @Date: 2019-08-17 15:23:29\n * @LastEditTime: 2019-11-04 22:28:40\n * @LastEditors: Devin Shi\n -->\n<div [attr.data-theme-style]=\"themeColor\">\n  <nz-layout>\n    <!-- 头部代码 BEGIN -->\n    <nz-header class=\"side-header\" [ngStyle]=\"{'background': isDark ? 'white' : ''}\">\n      <div style=\"cursor: pointer\" (click)=\"returnToHome()\" class=\"logo-span\">\n        <img src=\"./assets/logoFull.png\" class=\"expand-logo\" />\n      </div>\n      <span style=\"cursor: pointer\" (click)=\"returnToHome()\" class=\"head-title\"\n        [ngStyle]=\"{'color': isDark ? 'black' : 'white'}\">DAP脚手架</span>\n      <span class=\"head-options\" [ngStyle]=\"{'color': isDark ? 'black' : 'white'}\">\n        <nz-dropdown [nzPlacement]=\"'bottomCenter'\">\n          <div nz-dropdown style=\"display: flex;align-items: center;justify-content: center; cursor: pointer;height: 40px;margin-top: 9px;\">\n              <div class=\"avatar-img\" >\n                  <img [src]=\"userIcon\" class=\"show-img\" *ngIf=\"isHasIcon\">\n                  <!-- <label *ngIf=\"!isHasIcon\">{{iconName}}</label> -->\n                  <!-- <app-avatar [canComputedValue]=\"iconName\" *ngIf=\"!isHasIcon\" [avatarSize]=\"30\"></app-avatar> -->\n                </div>\n                <span style=\"margin-right: 5px\">{{currentUser?.name}}</span>\n                <i nz-icon nzType=\"down\"></i>\n          </div>\n\n          <ul nz-menu nzSelectable>\n            <li nz-menu-item (click)=\"modifyInfo()\">\n              <a><i nz-icon nzType=\"user\" nzTheme=\"outline\" style=\"margin-right: 5px\"></i>\n                <span>个人信息</span>\n              </a>\n            </li>\n            <li nz-menu-item>\n              <a><i nz-icon nzType=\"question-circle\" nzTheme=\"outline\" style=\"margin-right: 5px\"></i>\n                <span>使用帮助</span></a>\n            </li>\n            <li nz-menu-item (click)=\"logout()\">\n              <a><i nz-icon nzType=\"logout\" nzTheme=\"outline\" style=\"margin-right: 5px\"></i>\n                <span>安全退出</span></a>\n            </li>\n          </ul>\n        </nz-dropdown>\n      </span>\n    </nz-header>\n    <!-- 头部代码 END !(appInfo && appInfo.copyright)  appInfo && appInfo.copyright-->\n    <!-- <div class=\"side-TYheader\">\n      <i style=\"cursor: pointer;\" (click)=\"showMeuns()\" nz-icon type=\"bars\" theme=\"outline\"></i>\n    </div> -->\n\n    <nz-layout>\n      <nz-sider class=\"layout-side\" [ngClass]=\"{'menuHide' : !show_meuns}\" [nzCollapsible]='isCollapsible'\n        [(nzCollapsed)]=\"isCollapsed\" [nzBreakpoint]=\"'md'\" [nzTheme]=\"isDark ? 'dark' : 'light'\">\n        <ul style=\"overflow: auto; height: calc(100vh - 48px); border-right: 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\" nz-menu [nzTheme]=\"isDark ? 'dark' : 'light'\" [nzMode]=\"'inline'\" [nzInlineCollapsed]=\"isCollapsed\">\n          <ng-container *ngFor=\"let menuItem of menuItems\">\n            <li class=\"nav-item-level1\" nz-menu-item [nzSelected]=\"menuItem?.path===currentPath\"\n              *ngIf=\"!(menuItem?.isGroup || menuItem?.isSubmenu)\">\n              <a (click)=\"navigateMenuItem(menuItem)\" class=\"menu-item\">\n                <i nz-icon [type]=\"menuItem.iconType\" theme=\"outline\"></i>\n                <span class=\"nav-text\">{{menuItem.itemText}}</span>\n              </a>\n            </li>\n\n            <li class=\"nav-submenu-level1\" nz-submenu *ngIf=\"menuItem?.isSubmenu\">\n              <span title>\n                <i nz-icon [type]=\"menuItem.iconType\" theme=\"outline\"></i>\n                <span class=\"nav-text\">{{menuItem.itemText}}</span>\n              </span>\n              <ul>\n                <ng-container *ngFor=\"let menuItem_1 of menuItem?.children\">\n                  <li class=\"nav-item-level2\" nz-menu-item *ngIf=\"!(menuItem_1?.isGroup || menuItem_1?.isSubmenu)\">\n                    <a (click)=\"navigateMenuItem(menuItem_1)\" class=\"menu-item\">\n                      <i nz-icon [type]=\"menuItem_1.iconType\" theme=\"outline\"></i>\n                      <span class=\"nav-text\">{{menuItem_1.itemText}}</span>\n                    </a>\n                  </li>\n                  <li class=\"nav-group-level2\" nz-menu-group *ngIf=\"menuItem_1?.isGroup\">\n                    <span title>{{menuItem_1.itemText}}</span>\n                    <ul>\n                      <ng-container *ngFor=\"let menuItem_2 of menuItem_1?.children\">\n                        <li class=\"nav-item-level3\" nz-menu-item>\n                          <a (click)=\"navigateMenuItem(menuItem_2)\" class=\"menu-item\">\n                            <i nz-icon [type]=\"menuItem_2.iconType\" theme=\"outline\"></i>\n                            <span class=\"nav-text\">{{menuItem_2.itemText}}</span>\n                          </a>\n                        </li>\n                      </ng-container>\n                    </ul>\n                  </li>\n                  <li nz-submenu class=\"nav-submenu-level2\" *ngIf=\"menuItem_1?.isSubmenu\">\n                    <span title>\n                      <i nz-icon [type]=\"menuItem_1.iconType\" theme=\"outline\"></i>\n                      <span class=\"nav-text\">{{menuItem_1.itemText}}</span>\n                    </span>\n                    <ul>\n                      <ng-container *ngFor=\"let menuItem_2 of menuItem_1?.children\">\n                        <li class=\"nav-item-level3\" nz-menu-item>\n                          <a (click)=\"navigateMenuItem(menuItem_2)\" class=\"menu-item\">\n                            <i nz-icon [type]=\"menuItem_2.iconType\" theme=\"outline\"></i>\n                            <span class=\"nav-text\">{{menuItem_2.itemText}}</span>\n                          </a>\n                        </li>\n                      </ng-container>\n                    </ul>\n                  </li>\n                </ng-container>\n              </ul>\n            </li>\n\n            <li class=\"nav-group-level1\" nz-menu-group *ngIf=\"menuItem?.isGroup\">\n              <span title><i nz-icon [type]=\"menuItem.iconType\" theme=\"outline\"></i>\n                <span style=\"margin-left: 10px\">{{menuItem.itemText}}</span>\n              </span>\n              <ul>\n                <ng-container *ngFor=\"let menuItem_1 of menuItem?.children\">\n                  <li class=\"nav-item-level2\" nz-menu-item *ngIf=\"!(menuItem_1?.isGroup || menuItem_1?.isSubmenu)\">\n                    <a [(click)=\"navigateMenuItem(menuItem_1)\" class=\"menu-item\">\n                      <i nz-icon [type]=\"menuItem_1.iconType\" theme=\"outline\"></i>\n                      <span class=\"nav-text\">{{menuItem_1.itemText}}</span>\n                    </a>\n                  </li>\n                  <li class=\"nav-group-level2\" nz-menu-group *ngIf=\"menuItem_1?.isGroup\">\n                    <span title>{{menuItem_1.itemText}}</span>\n                    <ul>\n                      <ng-container *ngFor=\"let menuItem_2 of menuItem_1?.children\">\n                        <li class=\"nav-item-level3\" nz-menu-item>\n                          <a (click)=\"navigateMenuItem(menuItem_2)\" class=\"menu-item\">\n                            <i nz-icon [type]=\"menuItem_2.iconType\" theme=\"outline\"></i>\n                            <span class=\"nav-text\">{{menuItem_2.itemText}}</span>\n                          </a>\n                        </li>\n                      </ng-container>\n                    </ul>\n                  </li>\n                  <li nz-submenu class=\"nav-submenu-level2\" *ngIf=\"menuItem_1?.isSubmenu\">\n                    <i nz-icon [type]=\"menuItem_1.iconType\" theme=\"outline\"></i>\n                    <span title>\n                      <span class=\"nav-text\">{{menuItem_1.itemText}}</span>\n                    </span>\n                    <ul>\n                      <ng-container *ngFor=\"let menuItem_2 of menuItem_1?.children\">\n                        <li class=\"nav-item-level3\" nz-menu-item>\n                          <a (click)=\"navigateMenuItem(menuItem_2)\" class=\"menu-item\">\n                            <i nz-icon [type]=\"menuItem_2.iconType\" theme=\"outline\"></i>\n                            <span class=\"nav-text\">{{menuItem_2.itemText}}</span>\n                          </a>\n                        </li>\n                      </ng-container>\n                    </ul>\n                  </li>\n                </ng-container>\n              </ul>\n            </li>\n          </ng-container>\n        </ul>\n      </nz-sider>\n      <!-- 侧边栏代码 END -->\n      <nz-content [attr.data-theme-button]=\"themeColor\" style=\"position: relative; overflow: hidden;\">\n        <nz-header class=\"bread\">\n          <i nz-icon type=\"appstore\" theme=\"fill\" style=\"margin-right: 10px;\"></i>\n          <nz-breadcrumb>\n            <!-- <nz-breadcrumb-item>\n              {{nowAppName}}\n            </nz-breadcrumb-item> -->\n            <nz-breadcrumb-item>\n              {{showBread.name}}\n            </nz-breadcrumb-item>\n            <nz-breadcrumb-item *ngIf=\"child_num || child_num === 0\">\n              {{showBread.childs[child_num].name}}\n            </nz-breadcrumb-item>\n            <nz-breadcrumb-item *ngIf=\"child_num2 || child_num2 === 0\">\n              {{showBread.childs[child_num].childs[child_num2].name}}\n            </nz-breadcrumb-item>\n          </nz-breadcrumb>\n        </nz-header>\n        <div class=\"side-content\"\n          [ngClass]=\"{'side-content': appInfo?.copyright , 'side-no-footer-content': !(appInfo?.copyright) }\">\n          <!-- <reuse-tab></reuse-tab> -->\n          <router-outlet></router-outlet>\n          <div class=\"loading\" [hidden]=\"!loadingConfig.showLoading\">\n            <!-- <div class=\"loading\" [hidden]=\"true\"> -->\n            <!-- <div class=\"loading\" [hidden]=\"false\"> -->\n            <div class=\"loading-icon\">\n              <nz-spin nzSimple nzSize=\"large\" nzTip=\"加载中...\"></nz-spin>\n              <!-- <!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg t=\"1570870505826\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3316\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"60\" height=\"60\"><defs><style type=\"text/css\"></style></defs><path d=\"M964.288 495.36A482.56 482.56 0 0 0 0 483.2a507.904 507.904 0 0 1 1015.104 12.16h-50.816z m-235.84 476.48l-29.184-59.264A474.176 474.176 0 1 0 280.064 62.08L279.232 60.416a508.032 508.032 0 0 1 449.216 911.36z m15.36-11.968a508.096 508.096 0 0 1-608.256-103.68 42.304 42.304 0 1 1 52.352-60.928l1.472-1.28a465.536 465.536 0 1 0 702.08-609.984l3.2-2.688a508.032 508.032 0 0 1-150.848 778.56z\" fill=\"#0179FF\" p-id=\"3317\"></path></svg> -->\n              <!-- <div class=\"loading-text\">加载中...</div> -->\n            </div>\n          </div>\n        </div>\n      </nz-content>\n    </nz-layout>\n    <nz-footer *ngIf=\"appInfo?.copyright\" class=\"side-footer\"> {{appInfo?.copyright}}</nz-footer>\n  </nz-layout>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/slider-layout/slider-layout.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/layout/slider-layout/slider-layout.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.left-info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-right: 70px;\n}\n.left-info a {\n  margin-bottom: 15px;\n}\n.avatar-img {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n.avatar-img img {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n}\n.avatar-img label {\n  cursor: pointer;\n}\n.head-options {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.avatar {\n  border-radius: 50%;\n  background: wheat;\n}\n:host ::ng-deep.ant-form-item {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  -webkit-font-feature-settings: 'tnum';\n          font-feature-settings: 'tnum';\n  margin-bottom: 0px;\n  vertical-align: top;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXZpbi/lt6XkvZwvMDEt6aG555uuLzA3LURBUOmhueebri8wMTQtd29ya3NwYWNlL2RkbXAtd2ViLWJ1c2luZXNzLWVuZ2luZS9zcmMvYXBwL2xheW91dC9zbGlkZXItbGF5b3V0L3NsaWRlci1sYXlvdXQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2xheW91dC9zbGlkZXItbGF5b3V0L3NsaWRlci1sYXlvdXQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUFBLHFCQUFBO0VBQUEsY0FBQTtFQUNBLDBCQUFBO01BQUEsdUJBQUE7VUFBQSxvQkFBQTtDQ0NEO0FER0Q7RUFDRSxxQkFBQTtFQUFBLHFCQUFBO0VBQUEsY0FBQTtFQUNBLDZCQUFBO0VBQUEsOEJBQUE7TUFBQSwyQkFBQTtVQUFBLHVCQUFBO0VBQ0EsMEJBQUE7TUFBQSx1QkFBQTtVQUFBLG9CQUFBO0VBR0EsbUJBQUE7Q0NIRDtBREhEO0VBUUksb0JBQUE7Q0NGSDtBRE1EO0VBQ0UscUJBQUE7RUFBQSxxQkFBQTtFQUFBLGNBQUE7RUFDQSwwQkFBQTtNQUFBLHVCQUFBO1VBQUEsb0JBQUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsd0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtDQ0pEO0FESkQ7RUFVSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0NDSEg7QURURDtFQWVJLGdCQUFBO0NDSEg7QURNRDtFQUNFLHFCQUFBO0VBQUEscUJBQUE7RUFBQSxjQUFBO0VBQ0EsMEJBQUE7TUFBQSx1QkFBQTtVQUFBLG9CQUFBO0NDSkQ7QURPRDtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7Q0NMRDtBRFFEO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0QsbUJBQUE7RUFDQyxvQkFBQTtDQ05EIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NsaWRlci1sYXlvdXQvc2xpZGVyLWxheW91dC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5sZWZ0LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyBtYXJnaW4tbGVmdDogOXJlbTtcbiAgLy8gbWFyZ2luLXJpZ2h0OiA2LjVyZW07XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbiAgYSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxufVxuXG4uYXZhdGFyLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBpbWcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgbGFiZWx7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4uaGVhZC1vcHRpb25ze1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXZhdGFye1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHdoZWF0O1xufVxuXG46aG9zdCA6Om5nLWRlZXAuYW50LWZvcm0taXRlbSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ3RudW0nO1xuIG1hcmdpbi1ib3R0b206IDBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi8vIEBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvdGhlbWUvYXBwLXRoZW1lLmxlc3NcIjtcbi8vIEBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvdGhlbWUvdGhlbWUtYmFzZS5sZXNzXCI7XG5cbi8vIFtkYXRhLXRoZW1lLXN0eWxlPVwicmVkXCJdIHtcbi8vICAgQGZjb2xvciA6I2Y1MjIyZDtcbi8vICAgQHRjb2xvciA6I2ZmZjFmMDtcbi8vICAgLnRoZW1lKEBmY29sb3IsQHRjb2xvcik7XG4vLyB9XG5cblxuLy8gW2RhdGEtdGhlbWUtc3R5bGU9XCJibHVlXCJdIHtcbi8vICAgQGZjb2xvciA6IzE4OTBmZjtcbi8vICAgQHRjb2xvciA6I2U2ZjdmZjtcbi8vICAgLnRoZW1lKEBmY29sb3IsQHRjb2xvcik7XG4vLyB9XG5cbi8vIFtkYXRhLXRoZW1lLXN0eWxlPVwiZGFya1wiXSB7XG4vLyAgIC5iYXNlVGhlbWUoKTtcbi8vIH1cbi8vIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnU6bm90KC5hbnQtbWVudS1ob3Jpem9udGFsKSAuYW50LW1lbnUtaXRlbS1zZWxlY3RlZHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjFmMDtcbi8vIH1cblxuLy8gOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1pdGVtID4gYTpob3ZlciB7XG4vLyAgIGNvbG9yOiAjZjUyMjJkO1xuLy8gfVxuXG5cbi8vIC5sYXlvdXQtc2lkZSB7XG4vLyAgICAgLy8gYmFja2dyb3VuZDogcmdiKDUzLCAxMDMsIDIwNyk7XG4vLyAgICAgLy8gbWluLWhlaWdodDogMTAwJTtcbi8vICAgICAvLyBib3gtc2hhZG93ICAgOiAycHggMCA2cHggcmdiYSgwLCAyMSwgNDEsIC4zNSk7XG4vLyAgICAgei1pbmRleCAgICAgIDogMTtcblxuLy8gICAgIC5sb2dvLXNwYW4ge1xuLy8gICAgICAgICBoZWlnaHQgICAgOiA1OHB4O1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICAgICAgICAgcGFkZGluZyAgIDogOHB4IDEycHg7XG4vLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuLy8gICAgICAgICAuZXhwYW5kLWxvZ28ge1xuLy8gICAgICAgICAgICAgbWF4LWhlaWdodDogNDhweDtcbi8vICAgICAgICAgICAgIG1heC13aWR0aCA6IDE3NnB4O1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgLmNvbGxhcHNlZC1sb2dvIHtcbi8vICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ4cHg7XG4vLyAgICAgICAgICAgICBtYXgtd2lkdGggOiA1NnB4O1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgLnNpZGUtbWVudSB7XG4vLyAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4vLyAgICAgfVxuICAgIFxuLy8gICAgIC5uYXYtaXRlbS1sZXZlbDEsXG4vLyAgICAgLm5hdi1ncm91cC1sZXZlbDEsXG4vLyAgICAgLm5hdi1zdWJtZW51LWxldmVsMSB7XG4vLyAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcblxuLy8gICAgICAgICAubmF2LWl0ZW0tbGV2ZWwyLFxuLy8gICAgICAgICAubmF2LWdyb3VwLWxldmVsMixcbi8vICAgICAgICAgLm5hdi1zdWJtZW51LWxldmVsMiB7XG4vLyAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG5cbi8vICAgICAgICAgICAgIC5uYXYtaXRlbS1sZXZlbDMge1xuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLy8gLnNpZGUtaGVhZGVyIHtcbi8vICAgICBiYWNrZ3JvdW5kICAgOiMxODkwZmY7XG4vLyAgICAgcGFkZGluZyAgICAgIDogMDtcbi8vICAgICBoZWlnaHQgICAgICAgOiA1OHB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgbGluZS1oZWlnaHQgIDogNThweCAhaW1wb3J0YW50O1xuLy8gICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlMmUyO1xuLy8gICAgIC8vIGJveC1zaGFkb3cgICA6IDJweCAwIDZweCByZ2JhKDAsIDIxLCA0MSwgMC4zNSk7XG4vLyAgICAgei1pbmRleCAgICAgIDogMTtcblxuLy8gICAgIC5sb2dvLXNwYW4ge1xuLy8gICAgICAgICBmbG9hdCAgICAgICAgICA6IGxlZnQ7XG4vLyAgICAgICAgIGhlaWdodCAgICAgICAgIDogNThweDtcbi8vICAgICAgICAgYmFja2dyb3VuZCAgICAgOiB3aGl0ZTtcbi8vICAgICAgICAgcGFkZGluZyAgICAgICAgOiA4cHggMTJweDtcbi8vICAgICAgICAgdGV4dC1hbGlnbiAgICAgOiBjZW50ZXI7XG4vLyAgICAgICAgIGRpc3BsYXkgICAgICAgIDogZmxleDtcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgICAgIGFsaWduLWl0ZW1zICAgIDogY2VudGVyO1xuLy8gICAgICAgICB3aWR0aCAgICAgICAgICA6IDIwMHB4O1xuXG4vLyAgICAgICAgIC5leHBhbmQtbG9nbyB7XG4vLyAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0OHB4O1xuLy8gICAgICAgICAgICAgbWF4LXdpZHRoIDogMTc2cHg7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICAuY29sbGFwc2VkLWxvZ28ge1xuLy8gICAgICAgICAgICAgbWF4LWhlaWdodDogNDhweDtcbi8vICAgICAgICAgICAgIG1heC13aWR0aCA6IDU2cHg7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAuaGVhZC10aXRsZSB7XG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuLy8gICAgICAgICBmb250LXNpemUgIDogMi41cmVtO1xuLy8gICAgICAgICBmb250LXdlaWdodDogNjAwO1xuLy8gICAgICAgICBjb2xvciAgICAgIDogd2hpdGU7XG4vLyAgICAgfVxuXG4vLyAgICAgLm1lc3NhZ2VzIHtcbi8vICAgICAgICAgZGlzcGxheSA6IGlubGluZS1ibG9jaztcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICAgICByaWdodCAgIDogMThyZW07XG4vLyAgICAgICAgIHRvcCAgICAgOiAwO1xuXG4vLyAgICAgICAgIC5oZWFkLWV4YW1wbGUge1xuLy8gICAgICAgICAgICAgd2lkdGggICAgICAgICA6IDQycHg7XG4vLyAgICAgICAgICAgICBoZWlnaHQgICAgICAgIDogMzBweDtcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXMgOiA0cHg7XG4vLyAgICAgICAgICAgICBkaXNwbGF5ICAgICAgIDogaW5saW5lLWJsb2NrO1xuLy8gICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuLy8gICAgICAgICAgICAgLmJlbGwge1xuLy8gICAgICAgICAgICAgICAgIHdpZHRoICAgICAgOiAyNXB4O1xuLy8gICAgICAgICAgICAgICAgIGhlaWdodCAgICAgOiAyNXB4O1xuLy8gICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAgOiBzY2FsZSgxLjc4KTtcbi8vICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wIDogMTBweDtcbi8vICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIC5oZWFkLW9wdGlvbnMge1xuLy8gICAgICAgICBmbG9hdCAgICAgICAgICA6IHJpZ2h0O1xuLy8gICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDEuNzVyZW07XG4vLyAgICAgICAgIG1hcmdpbi1yaWdodCAgIDogMjBweDtcbi8vICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4vLyAgICAgICAgIC5vcHRpb25zLW1lbnUge1xuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4vLyAgICAgICAgICAgICBwYWRkaW5nICA6IDhweCAxMnB4O1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgLm9wdGlvbnMtZHJvcGRvd24ge1xuLy8gICAgICAgICAgICAgY29sb3IgICAgIDogIzMzMztcbi8vICAgICAgICAgICAgIGhlaWdodCAgICA6IDYwcHg7XG4vLyAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xuLy8gICAgICAgICAgICAgZGlzcGxheSAgIDogaW5saW5lLWJsb2NrO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgLm9wdGlvbnMtZHJvcGRvd24tYXZhdGFyIHtcbi8vICAgICAgICAgICAgIHdpZHRoICAgICAgICA6IDIuNXJlbTtcbi8vICAgICAgICAgICAgIGhlaWdodCAgICAgICA6IDIuNXJlbTtcbi8vICAgICAgICAgICAgIGxpbmUtaGVpZ2h0ICA6IDIuNXJlbTtcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLy8gLnNpZGUtVFloZWFkZXIge1xuLy8gICAgIGJhY2tncm91bmQgICAgIDogcmdiKDQ5LCA5MywgMTg4KTtcbi8vICAgICBjb2xvciAgICAgICAgICA6ICNmZmY7XG4vLyAgICAgcGFkZGluZyAgICAgICAgOiAwO1xuLy8gICAgIHdpZHRoICAgICAgICAgIDogMTAwdnc7XG4vLyAgICAgaGVpZ2h0ICAgICAgICAgOiAyNHB4O1xuLy8gICAgIGRpc3BsYXkgICAgICAgIDogZmxleDtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4vLyAgICAgYWxpZ24taXRlbXMgICAgOiBjZW50ZXI7XG4vLyAgICAgYm94LXNpemluZyAgICAgOiBib3JkZXItYm94O1xuLy8gICAgIHBhZGRpbmctbGVmdCAgIDogMjRweDtcbi8vICAgICBmb250LXNpemUgICAgICA6IDE2cHg7XG5cbi8vICAgICA+c3BhbiB7XG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuLy8gICAgICAgICBjdXJzb3IgICAgIDogcG9pbnRlcjtcbi8vICAgICB9XG4vLyB9XG5cbi8vIC5zaWRlLWNvbnRlbnQge1xuLy8gICAgIHBhZGRpbmcgICA6IDIwcHggMjBweCAyMHB4IDMwcHg7XG4vLyAgICAgYmFja2dyb3VuZDogI2ZmZjtcbi8vICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCAtIDY5cHgpO1xuLy8gICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG5cbi8vIH1cblxuLy8gLnNpZGUtbm8tZm9vdGVyLWNvbnRlbnQge1xuLy8gICAgIC8vIHBhZGRpbmcgICA6IDIwcHggMjBweCAyMHB4IDMwcHg7XG4vLyAgICAgLy8gYmFja2dyb3VuZDogI2ZmZjtcbi8vICAgICBtaW4taGVpZ2h0ICAgOiBjYWxjKDEwMHZoIC0gNjRweCk7XG4vLyAgICAgYmFja2dyb3VuZCAgIDogI2Y5ZjlmOTtcbi8vICAgICAvL2JhY2tncm91bmQgOiAjZjBmMmY1O1xuLy8gfVxuXG4vLyAuc2lkZS1mb290ZXIge1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cblxuLy8gLy8gLm1lbnVfbmV3IHtcbi8vIC8vICAgICBiYWNrZ3JvdW5kOiByZ2IoNTMsIDEwMywgMjA3KTtcbi8vIC8vIH1cblxuLy8gLy8gLmFudC1sYXlvdXQtc2lkZXIge1xuLy8gLy8gICAgIGJhY2tncm91bmQ6IHJnYig1MywgMTAzLCAyMDcpO1xuLy8gLy8gICAgIGZvbnQtc2l6ZSA6IDE4cHg7XG4vLyAvLyB9XG5cbi8vIC8vIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnUtc3VibWVudS1vcGVuIHtcbi8vIC8vICAgICBiYWNrZ3JvdW5kOiByZ2IoMzksIDczLCAxNDgpICFpbXBvcnRhbnQ7XG4vLyAvLyB9XG5cbi8vIC8vIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnUtaW5saW5lIHtcbi8vIC8vICAgICBiYWNrZ3JvdW5kOiByZ2IoNTMsIDEwMywgMjA3KSAhaW1wb3J0YW50O1xuLy8gLy8gfVxuXG4vLyAvLyA6aG9zdCA6Om5nLWRlZXAgLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWQge1xuLy8gLy8gICAgIGJhY2tncm91bmQ6IHJnYigzOSwgNzMsIDE0OCkgIWltcG9ydGFudDtcbi8vIC8vIH1cblxuLy8gOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1zdWIge1xuLy8gICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbi8vIH1cblxuLy8gLm1lbnVIaWRlIHtcbi8vICAgICBmbGV4ICAgICA6IDAgMCAwcHggIWltcG9ydGFudDtcbi8vICAgICBtYXgtd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuLy8gICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgd2lkdGggICAgOiAwcHggIWltcG9ydGFudDtcbi8vIH1cblxuLy8gLy8gOmhvc3QgOjpuZy1kZWVwIC5hbnQtYnRuLXByaW1hcnkge1xuLy8gLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICM1YTc5YmEgIWltcG9ydGFudDtcbi8vIC8vICAgICBib3JkZXItY29sb3IgICAgOiAjNWE3OWJhICFpbXBvcnRhbnQ7XG4vLyAvLyB9XG5cbi8vIC5icmVhZCB7XG4vLyAgICAgaGVpZ2h0ICAgICAgICAgOiA0NXB4O1xuLy8gICAgIGRpc3BsYXkgICAgICAgIDogZmxleDtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4vLyAgICAgYWxpZ24taXRlbXMgICAgOiBjZW50ZXI7XG4vLyAgICAgbGluZS1oZWlnaHQgICAgOiA0MHB4O1xuLy8gICAgIHdpZHRoICAgICAgICAgIDogMTAwJTtcbi8vICAgICBib3gtc2l6aW5nICAgICA6IGJvcmRlci1ib3g7XG4vLyAgICAgcGFkZGluZy1sZWZ0ICAgOiAyMHB4O1xuLy8gICAgIGJhY2tncm91bmQgICAgIDogI2ZmZjtcbi8vICAgICBib3JkZXItYm90dG9tICA6IDFweCBzb2xpZCAjZTJlMmUyO1xuXG4vLyAgICAgbnotYnJlYWRjcnVtYi1pdGVtOmxhc3QtY2hpbGQge1xuLy8gICAgICAgICBjb2xvcjogIzIyMjtcbi8vICAgICB9XG4vLyB9XG5cbi8vIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnUtcm9vdCB7XG4vLyAgICAgLy8gcGFkZGluZy10b3A6IDEuNnJlbTtcbi8vICAgICBoZWlnaHQgICAgICAgIDogY2FsYygxMDB2aCAtIDU4cHgpO1xuLy8gICAgIG92ZXJmbG93LXkgICAgOiBhdXRvO1xuLy8gICAgIG92ZXJmbG93LXggICAgOiBoaWRkZW47XG4vLyB9XG5cbi8vIDpob3N0IDo6bmctZGVlcCAuYW50LWxheW91dC1zaWRlci10cmlnZ2VyIHtcbi8vICAgICBwb3NpdGlvbiAgICAgOiBhYnNvbHV0ZTtcbi8vICAgICB0b3AgICAgICAgICAgOiBjYWxjKDUwdmggLSAyOXB4IC0gMjBweCk7XG4vLyAgICAgLy90b3AgICAgICAgIDogMHB4O1xuLy8gICAgIC8vcmlnaHQgICAgICA6IC0zMHB4O1xuLy8gICAgIHJpZ2h0ICAgICAgICA6IC0xM3B4O1xuLy8gICAgIGhlaWdodCAgICAgICA6IDQwcHg7XG4vLyAgICAgd2lkdGggICAgICAgIDogMTNweCAhaW1wb3J0YW50O1xuLy8gICAgIGxpbmUtaGVpZ2h0ICA6IDQwcHg7XG4vLyAgICAgZm9udC1zaXplICAgIDogMTJweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4vLyB9XG5cbi8vIDpob3N0IDo6bmctZGVlcCAuYW50LWJyZWFkY3J1bWIge1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAwcHg7XG4vLyB9XG5cbi8vIC5uYXYtdGV4dCB7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIC5sb2FkaW5nIHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgdG9wOiAwO1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiAxMDB2aDtcbi8vICAgICB6LWluZGV4OiA5OTk5OTk5OTk7XG4vLyAgICAgYW5pbWF0aW9uOiBmYWRlaW4gLjVzIGVhc2Utb3V0O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xuLy8gICAgIC5sb2FkaW5nLWljb24ge1xuLy8gICAgICAgICB3aWR0aDogNjBweDtcbi8vICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuLy8gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgdG9wOiAzOCU7XG4vLyAgICAgICAgIGxlZnQ6IDQ1JTtcbi8vICAgICAgICAgbWFyZ2luOiAtMTAwcHggMCAwIDA7XG4vLyAgICAgICAgIHN2ZyB7XG4vLyAgICAgICAgICAgICBhbmltYXRpb246IHJvdGF0ZSAxcyBpbmZpbml0ZSBsaW5lYXI7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaSB7XG4vLyAgICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4vLyAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAubG9hZGluZy10ZXh0IHtcbi8vICAgICAgICAgICAgIGNvbG9yOiAjMDE3OUZGO1xuLy8gICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLy8gQGtleWZyYW1lcyBmYWRlaW4ge1xuLy8gICAgIGZyb20ge1xuLy8gICAgICAgICBvcGFjaXR5OiAwO1xuLy8gICAgIH1cbi8vICAgICB0byB7XG4vLyAgICAgICAgIG9wYWNpdHk6IDE7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBAa2V5ZnJhbWVzIHJvdGF0ZXtcbi8vICAgICAwJXtcbi8vICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4vLyAgICAgICB9XG4vLyAgICAgMTAwJXtcbi8vICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4vLyAgICAgfVxuLy8gfVxuXG4iLCIubWFpbi1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sZWZ0LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG4ubGVmdC1pbmZvIGEge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmF2YXRhci1pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hdmF0YXItaW1nIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5hdmF0YXItaW1nIGxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWQtb3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXZhdGFyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB3aGVhdDtcbn1cbjpob3N0IDo6bmctZGVlcC5hbnQtZm9ybS1pdGVtIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXZhcmlhbnQ6IHRhYnVsYXItbnVtcztcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAndG51bSc7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/slider-layout/slider-layout.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/slider-layout/slider-layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: SliderLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderLayoutComponent", function() { return SliderLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ddmp_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ddmp-menu.service */ "./src/app/layout/ddmp-menu.service.ts");
/* harmony import */ var src_app_auth_ddmp_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/ddmp-auth.service */ "./src/app/auth/ddmp-auth.service.ts");
/* harmony import */ var _ddmp_appinfo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ddmp-appinfo.service */ "./src/app/layout/ddmp-appinfo.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_cache_sessionStorage_session_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/cache/sessionStorage/session-storage.service */ "./src/app/cache/sessionStorage/session-storage.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _cache_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../cache/localStorage/local-storage.service */ "./src/app/cache/localStorage/local-storage.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_network_network_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/network/network.service */ "./src/app/network/network.service.ts");
/* harmony import */ var src_app_services_global_loading_global_loading_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/global-loading/global-loading.service */ "./src/app/services/global-loading/global-loading.service.ts");

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 16:33:11
 * @LastEditTime: 2019-11-05 08:13:33
 * @LastEditors: Devin Shi
 */













var SliderLayoutComponent = /** @class */ (function () {
    function SliderLayoutComponent(ddmpLayoutMenuService, ddmpAuthService, ddmpAppInfoService, titleService, router, session, activatedRoute, modalService, localStorageService, elementRef, renderer, nzNotificationService, fb, fb2, 
    // private confirmModalService: ConfirmModalService,
    network, globalLoadingService) {
        this.ddmpLayoutMenuService = ddmpLayoutMenuService;
        this.ddmpAuthService = ddmpAuthService;
        this.ddmpAppInfoService = ddmpAppInfoService;
        this.titleService = titleService;
        this.router = router;
        this.session = session;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.localStorageService = localStorageService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzNotificationService = nzNotificationService;
        this.fb = fb;
        this.fb2 = fb2;
        this.network = network;
        this.globalLoadingService = globalLoadingService;
        this.menuItems = [];
        this.appList = [];
        this.currentPathArray = [];
        this.show_meuns = true;
        this.showBread = {
            name: ''
        };
        this.equipmentType = true; // 设备类型
        this.isCollapsible = true;
        this.isSetting = false;
        this.openMessageWindow = false; // 控制消息推送窗口是否打开
        this.messagesListData = []; // 消息集合
        this.messageCount = [];
        this.defaultAppIcon = './assets/150x150.png'; // 没有设置图标的时候设为默认值
        this.loadingConfig = {
            showLoading: false
        };
        this.isModifyInfo = false; //是否显示修改个人信息弹框
        this.isUpdateInfo = false; // 是否可以更新个人信息
        this.userSex = "man"; // 用户性别
        this.initGlobalLoading();
    }
    SliderLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.themeColor = this.localStorageService.get("themeColor");
        this.isDark = this.localStorageService.get("isDark");
        if (this.themeColor == null || this.isDark == null) {
            this.themeColor = "dark";
            this.isDark = false;
        }
        // 判断是否有头像
        this.userIcon = this.session.get("app.userInfo.userIcon");
        if (this.userIcon == null) {
            this.isHasIcon = false;
            this.iconName = this.session.get("app.userInfo.userName");
            // this.avatarCropping.setIconName(this.iconName);
            // this.avatarCropping.setHasIcon(this.isHasIcon);
        }
        else {
            this.avatarImgBng = "white";
            this.isHasIcon = true;
            this.iconName = "";
            // this.avatarCropping.setIconName(this.iconName);
            // this.avatarCropping.setHasIcon(this.isHasIcon);
        }
        this.validateForm = this.fb.group({
            // empId: [{ value: null, disabled: true }], // 工号
            oldPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
        });
        this.validateInfoForm = this.fb2.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            email: [null, ''],
            phone: [null, ''],
        });
        this.appInfo = this.ddmpAppInfoService.appInfo;
        this.ddmpAppInfoService.appInfoObservable.subscribe(function (appInfo) {
            _this.appInfo = appInfo;
            if (_this.appInfo && _this.appInfo.title) {
                _this.titleService.setTitle(_this.appInfo.title);
            }
        });
        // TODO:监听socket
        // this.refreshMessage();
        this.messagesType = this.messagesType ? this.messagesType : '全部消息';
        this.messagesTypeCode = this.messagesTypeCode ? this.messagesTypeCode : 'all';
        // 监听路由变化获取切割url
        this.activatedRoute.url.subscribe(function (res) {
            var pathArray = window.location.href.split('/');
            _this.currentPath = pathArray[pathArray.length - 1];
            _this.currentPathArray = _this.menuItems.map(function (item) { return item['path']; });
        });
        var href = window.location.href;
        var params = {};
        var search = href.substring(href.indexOf('?') + 1);
        for (var _i = 0, _a = search.split('&'); _i < _a.length; _i++) {
            var item = _a[_i];
            var arr = item.split('=');
            params[arr[0]] = arr[1] ? decodeURIComponent(arr[1]) : arr[1];
        }
        this.showBread = {
            name: params.title || ''
        };
        this.isPC();
        this.menuItems = this.ddmpLayoutMenuService.menuItems;
        this.ddmpLayoutMenuService.menuItemObservable.subscribe(function (menuItems) {
            _this.menuItems = menuItems;
        });
        // this.appCode = environment.appInfo["appCode"];
        // if (this.equipmentType === false) {
        //   if (this.appCode === 'LA') {
        //     this.menuItems = this.menuItems.filter(item => (item.name === '我的待办' || item.name === '主动执行'));
        //   } else if (this.appCode === 'EPV') {
        //     this.menuItems = this.menuItems.filter(item => (item.name === '我的待办'));
        //   } else if (this.appCode === 'VS') {
        //     this.menuItems = this.menuItems.filter(item => (item.name === '我的待办' || item.name === '缺陷记录'));
        //   }
        // }
        this.currentUser = this.ddmpAuthService.currentUser;
        this.ddmpAuthService.currentUserObservable.subscribe(function (user) {
            _this.currentUser = user;
        });
        var accessToken = this.ddmpAuthService.currentToken;
        var link = document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        if (accessToken && accessToken.accessToken) {
        }
        // this.renderer.setStyle(this.el.nativeElement, "display", "none");
        // this.elementRef.nativeElement.getElementBy
    };
    SliderLayoutComponent.prototype.getFirstMenu = function (menuItem) {
        if (menuItem.haveChild) {
            return this.getFirstMenu(menuItem.childs[0]);
        }
        else {
            return menuItem;
        }
    };
    SliderLayoutComponent.prototype.initGlobalLoading = function () {
        var _this = this;
        this.globalLoadingService.onLoading$.subscribe(function (res) {
            _this.loadingConfig.showLoading = true;
        });
        this.globalLoadingService.onLoadingSuccess$.subscribe(function (res) {
            setTimeout(function () {
                _this.loadingConfig.showLoading = false;
            }, (200 + Math.random() * 200));
        });
        this.globalLoadingService.onLoadingSuccess$.subscribe(function (res) {
            setTimeout(function () {
                _this.loadingConfig.showLoading = false;
            }, (200 + Math.random() * 200));
        });
    };
    SliderLayoutComponent.prototype.convertMenuListToSliderMenuItems = function (menuList, level) {
        var _this = this;
        menuList.forEach(function (menu) {
            menu.itemText = menu.name;
            menu.iconType = menu.icon;
            menu.navigateLink = "";
            // menu.path = menu.path;
            menu.routeName = "";
            menu.routeParam = null;
            menu.isHidden = false;
            menu.isGroup = false;
            menu.isSubmenu = menu.haveChild;
            if (menu.haveChild) {
                menu.children = _this.convertMenuListToSliderMenuItems(menu.childs, level + 1);
            }
        });
        return menuList;
    };
    SliderLayoutComponent.prototype.isPC = function () {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        // var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                // flag = false;
                this.equipmentType = false;
                break;
            }
        }
        if (this.equipmentType === false) {
            this.show_meuns = false;
            this.isCollapsible = false;
        }
    };
    SliderLayoutComponent.prototype.logout = function () {
        var _this = this;
        this.modalService.confirm({
            nzTitle: '确认退出',
            nzClosable: true,
            nzContent: '是否退出登录？',
            nzOnOk: function () {
                _this.localStorageService.clearStorage();
                _this.session.clearSession();
                _this.localStorageService.set("themeColor", _this.themeColor);
                _this.localStorageService.set("isDark", _this.isDark);
                if (src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].needSSO) {
                    location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].ssoDomain + "/uaa/logout";
                }
                else {
                    _this.router.navigate(['./login']);
                }
            }
        });
    };
    // 打开修改密码的弹窗
    SliderLayoutComponent.prototype.setting = function () {
        this.isSetting = true;
        // 新接口不需要工号
        // const user = this.localStorageService.get("app.userInfo.userId");
        // this.validateForm.get("empId").setValue(user);
    };
    // 确定修改密码
    SliderLayoutComponent.prototype.settingPwd = function () {
        // tslint:disable-next-line:forin
        for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (!this.validateForm.valid) {
            this.nzNotificationService.create("warning", "请填写必填项！", "");
            return;
        }
        var params = this.validateForm.value;
    };
    SliderLayoutComponent.prototype.cancelCale = function () {
        this.validateForm.reset();
        this.isSetting = false;
    };
    SliderLayoutComponent.prototype.showMeuns = function () {
        this.show_meuns = !this.show_meuns;
        this.isCollapsible = !this.isCollapsible;
    };
    SliderLayoutComponent.prototype.navigateMenuItem = function (menuItem) {
        var _this = this;
        sessionStorage.removeItem("page");
        sessionStorage.removeItem("pageSize");
        sessionStorage.removeItem("params");
        sessionStorage.removeItem("currentAdvancedSearch");
        sessionStorage.removeItem("showNormalSearch");
        // 循环判断在菜单在那一层
        if (menuItem.functionType === "DefaultMenu") {
            this.showBread = {
                name: menuItem.name
            };
            this.child_num = '';
            this.child_num2 = '';
        }
        this.menuItems.forEach(function (item) {
            if (item.functionType !== "DefaultMenu") {
                if (item.code === menuItem.code) {
                    _this.showBread = item;
                    _this.child_num = '';
                    _this.child_num2 = '';
                }
                else {
                    if (item.childs && item.childs.length > 0) {
                        item.childs.forEach(function (ele, index) {
                            if (ele.code === menuItem.code) {
                                _this.showBread = item;
                                _this.child_num = index;
                                _this.child_num2 = '';
                            }
                            else {
                                if (ele.childs && ele.childs.length > 0) {
                                    ele.childs.forEach(function (list, i) {
                                        if (list.code === menuItem.code) {
                                            _this.showBread = item;
                                            _this.child_num = index;
                                            _this.child_num2 = i;
                                        }
                                    });
                                }
                            }
                        });
                    }
                }
            }
        });
        // 根据菜单目录跳转相应的地址
        if (menuItem.functionType === 'FlowForm') {
            this.router.navigate(['/home/app-page-process'], {
                queryParams: {
                    processCode: menuItem.configureCode,
                    title: menuItem.name
                }
            });
        }
        else if (menuItem.functionType === 'PageForm') {
            this.router.navigate(['/home/app-page-release-list'], {
                queryParams: {
                    formCode: menuItem.configureCode,
                    formId: menuItem.configureId,
                    title: menuItem.name
                }
            });
        }
        else if (menuItem.functionType === 'QueryPage') {
            this.router.navigate(['/home/search-interface'], {
                queryParams: {
                    id: menuItem.configureId,
                    title: menuItem.name
                }
            });
        }
        else if (menuItem.functionType === 'ExternalLink') {
            this.router.navigate(['/home/app-page-web'], {
                queryParams: {
                    functionCode: menuItem.functionCode,
                    title: menuItem.name
                }
            });
        }
        else if (menuItem.functionType === 'CustomFunction' || menuItem.functionType === 'DefaultMenu') {
            this.router.navigate(['/' + menuItem.path], {
                queryParams: {
                    title: menuItem.name
                }
            });
        }
        // window.location.reload();
    };
    /**
     * 点击logo返回到首页
     */
    SliderLayoutComponent.prototype.returnToHome = function () {
        this.showBread = {
            name: this.getFirstMenu(this.ddmpLayoutMenuService.menuItems[0]).name
        };
        var routerUrl = './' + this.getFirstMenu(this.ddmpLayoutMenuService.menuItems[0]).path;
        this.router.navigate([routerUrl]);
    };
    /**
     * @author wucan
     * @date 2019年9月27日
     * @description 打开消息推送的抽屉
     */
    SliderLayoutComponent.prototype.openMessage = function () {
        this.openMessageWindow = true;
        this.getMessages();
    };
    /**
     * @description 获取推送的消息
     */
    SliderLayoutComponent.prototype.getMessages = function (type) {
        var _this = this;
        var appId = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].appInfo.appId;
        this.network.get("/message/query?appId="
            + appId + "&status=" + this.messagesTypeCode).subscribe(function (res) {
            if (res.code === 'ok') {
                _this.messagesListData = res.table ? res.table : [];
                _this.messageCount = _this.messagesListData.filter(function (item) { return item.status === 'unread'; });
            }
        });
    };
    /**
     * @description 刷新推送消息
     */
    SliderLayoutComponent.prototype.refreshMessage = function () {
        var appId = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].appInfo.appId;
        var user = this.localStorageService.get('currentUser');
        if (this.ws != null) {
            this.ws.close();
        }
        this.ws = new WebSocket('ws://k8s.definesys.com:30529/socket/' + appId + "_" + user.code);
        var that = this;
        this.ws.onopen = function (event) {
            // socket 开启后执行，可以向后端传递信息
            // that.ws.send('sonmething');
        };
        this.ws.onmessage = function (event) {
            // socket 获取后端传递到前端的信息
            that.getMessages();
        };
        this.ws.onerror = function (event) {
            // socket error信息
        };
        this.ws.onclose = function (event) {
            // socket 关闭后执行
        };
    };
    // 设置所有数据为已读
    // setAllMessageRead() {
    //   const appId = environment.appInfo.appId;
    //   this.network.get("/message/updataStatusAll?appId="
    //     + appId + "&status=" + this.messagesTypeCode).subscribe((res: any) => {
    //       if (res.code === 'ok') {
    //         this.getMessages(this.messagesTypeCode);
    //       }
    //     });
    // }
    // 推送消息的类型
    // changeMessType(event) {
    //   this.messagesTypeCode = event;
    //   this.getMessages(event);
    //   switch (event) {
    //     case 'all':
    //       this.messagesType = '全部消息';
    //       break;
    //     case 'unread':
    //       this.messagesType = '未读消息';
    //       break;
    //     default:
    //       this.messagesType = '已读消息';
    //   }
    // }
    SliderLayoutComponent.prototype.close = function () {
        this.openMessageWindow = false;
    };
    /**
     * @author lizhihang
     * @date 2019-10-30
     * @description 打开修改个人信息弹窗
     */
    SliderLayoutComponent.prototype.modifyInfo = function () {
        //const user = this.localStorageService.get("app.userInfo.userId");
        //this.validateInfoForm.get("empId").setValue(user);
        var name = this.session.get("app.userInfo.userName");
        this.validateInfoForm.get("name").setValue(name);
        var sex = this.session.get("app.userInfo.userGender");
        if (sex == null) {
            this.userSex = "man";
        }
        else {
            this.userSex = sex;
        }
        var email = this.session.get("app.userInfo.userEmail");
        this.validateInfoForm.get("email").setValue(email);
        var phone = this.session.get("app.userInfo.userPhone");
        this.validateInfoForm.get("phone").setValue(phone);
        this.isModifyInfo = true;
    };
    /**
      * @author lizhihang
      * @date 2019-10-30
      * @description 保存修改个人信息
      */
    SliderLayoutComponent.prototype.saveInfo = function () {
        for (var i in this.validateInfoForm.controls) {
            this.validateInfoForm.controls[i].markAsDirty();
            this.validateInfoForm.controls[i].updateValueAndValidity();
        }
        if (this.isUpdateInfo) {
            if (!this.validateInfoForm.valid) {
                this.nzNotificationService.create("warning", "请填写必填项！", "");
                return;
            }
        }
    };
    SliderLayoutComponent.prototype.cancelModify = function () {
        this.isModifyInfo = false;
        this.userIcon = this.session.get("app.userInfo.userIcon");
        if (this.userIcon == null) {
            this.isHasIcon = false;
            this.iconName = this.session.get("app.userInfo.userName");
            // this.avatarCropping.setIconName(this.iconName);
            // this.avatarCropping.setHasIcon(this.isHasIcon);
        }
        else {
            this.avatarImgBng = "white";
            this.isHasIcon = true;
            this.iconName = "";
            // this.avatarCropping.setIconName(this.iconName);
            // this.avatarCropping.setHasIcon(this.isHasIcon);
            // this.avatarCropping.setAvatarSrc(this.userIcon);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ng-star-inserted"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SliderLayoutComponent.prototype, "el", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("avatarCropping"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SliderLayoutComponent.prototype, "avatarCropping", void 0);
    SliderLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider-layout',
            template: __webpack_require__(/*! ./slider-layout.component.html */ "./src/app/layout/slider-layout/slider-layout.component.html"),
            styles: [__webpack_require__(/*! ./slider-layout.component.less */ "./src/app/layout/slider-layout/slider-layout.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ddmp_menu_service__WEBPACK_IMPORTED_MODULE_2__["DdmpLayoutMenuService"],
            src_app_auth_ddmp_auth_service__WEBPACK_IMPORTED_MODULE_3__["DdmpAuthService"],
            _ddmp_appinfo_service__WEBPACK_IMPORTED_MODULE_4__["DdmpAppInfoService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_cache_sessionStorage_session_storage_service__WEBPACK_IMPORTED_MODULE_7__["SessionStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzModalService"],
            _cache_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzNotificationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
            src_app_network_network_service__WEBPACK_IMPORTED_MODULE_12__["NetworkService"],
            src_app_services_global_loading_global_loading_service__WEBPACK_IMPORTED_MODULE_13__["GlobalLoadingService"]])
    ], SliderLayoutComponent);
    return SliderLayoutComponent;
}());

var LoadingConfig = /** @class */ (function () {
    function LoadingConfig() {
    }
    return LoadingConfig;
}());


/***/ }),

/***/ "./src/app/layout/slider-layout/slider-layout.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/slider-layout/slider-layout.module.ts ***!
  \**************************************************************/
/*! exports provided: SliderLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderLayoutModule", function() { return SliderLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _slider_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider-layout.component */ "./src/app/layout/slider-layout/slider-layout.component.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd-dropdown.js");

/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-04 08:35:32
 * @LastEditTime: 2019-11-04 15:06:34
 * @LastEditors: Devin Shi
 * @Description:
 */




var SliderLayoutModule = /** @class */ (function () {
    function SliderLayoutModule() {
    }
    SliderLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_4__["NzDropDownModule"]
            ],
            declarations: [
                _slider_layout_component__WEBPACK_IMPORTED_MODULE_2__["SliderLayoutComponent"],
            ],
            exports: [_slider_layout_component__WEBPACK_IMPORTED_MODULE_2__["SliderLayoutComponent"]]
        })
    ], SliderLayoutModule);
    return SliderLayoutModule;
}());



/***/ }),

/***/ "./src/app/network/network-api.ts":
/*!****************************************!*\
  !*** ./src/app/network/network-api.ts ***!
  \****************************************/
/*! exports provided: NetworkUrl, NetworkApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkUrl", function() { return NetworkUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkApi", function() { return NetworkApi; });
var NetworkUrl = /** @class */ (function () {
    function NetworkUrl() {
        this.method = "GET";
    }
    return NetworkUrl;
}());

var NetworkApi = {
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


/***/ }),

/***/ "./src/app/network/network.module.ts":
/*!*******************************************!*\
  !*** ./src/app/network/network.module.ts ***!
  \*******************************************/
/*! exports provided: DdmpNetworkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdmpNetworkModule", function() { return DdmpNetworkModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-interceptor */ "./src/app/network/token-interceptor.ts");

/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-08-06 20:45:46
 * @LastEditTime: 2019-11-04 15:12:13
 * @LastEditors: Devin Shi
 * @Description:
 */



var DdmpNetworkModule = /** @class */ (function () {
    function DdmpNetworkModule() {
    }
    DdmpNetworkModule_1 = DdmpNetworkModule;
    DdmpNetworkModule.forRoot = function () {
        return {
            ngModule: DdmpNetworkModule_1,
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_3__["TokenInterceptor"], multi: true }
            ]
        };
    };
    var DdmpNetworkModule_1;
    DdmpNetworkModule = DdmpNetworkModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            providers: []
        })
    ], DdmpNetworkModule);
    return DdmpNetworkModule;
}());



/***/ }),

/***/ "./src/app/network/network.service.ts":
/*!********************************************!*\
  !*** ./src/app/network/network.service.ts ***!
  \********************************************/
/*! exports provided: NetworkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkService", function() { return NetworkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var NetworkService = /** @class */ (function () {
    function NetworkService(http) {
        this.http = http;
    }
    /**
     *  简单的get请求
     * @param url  地址
     */
    NetworkService.prototype.get = function (url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /**
     *  简单的post请求
     * @param url  请求地址，字符串
     * @param param 请求参数
     */
    NetworkService.prototype.post = function (url, params) {
        return this.http.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    NetworkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NetworkService);
    return NetworkService;
}());



/***/ }),

/***/ "./src/app/network/token-interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/network/token-interceptor.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_ddmp_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/ddmp-auth.service */ "./src/app/auth/ddmp-auth.service.ts");
/* harmony import */ var _cache_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cache/localStorage/local-storage.service */ "./src/app/cache/localStorage/local-storage.service.ts");

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 23:00:03
 * @LastEditTime: 2019-11-05 08:34:30
 * @LastEditors: Devin Shi
 */





/**
 * Ddmp 网络请求通用的拦截器，拦截相应的网络请求，并设置初始化信息
 */
var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(injector, ddmpAuthService, localStorageService) {
        this.injector = injector;
        this.ddmpAuthService = ddmpAuthService;
        this.localStorageService = localStorageService;
    }
    TokenInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var req_started = Date.now();
        this.ddmpAuthService.setUser(this.localStorageService.get('currentUser'));
        var accessToken = this.ddmpAuthService.currentToken;
        var authReq = req.clone({
            setHeaders: {
                AuthorizationToken: accessToken && accessToken['accessToken'] ? accessToken['accessToken'] : '',
                refreshToken: accessToken && accessToken['refreshToken'] ? accessToken['refreshToken'] : ''
            }
        });
        return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                var authorizationToken = event.headers.get('authorizationtoken');
                var refreshToken = event.headers.get('refreshtoken');
                if (authorizationToken && refreshToken) {
                    _this.ddmpAuthService.setToken({
                        accessToken: authorizationToken,
                        refreshToken: refreshToken,
                        authCode: '',
                        userCode: ''
                    });
                    _this.localStorageService.set('currentToken', _this.ddmpAuthService.currentToken);
                }
            }
            return event;
        }));
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _auth_ddmp_auth_service__WEBPACK_IMPORTED_MODULE_4__["DdmpAuthService"],
            _cache_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/page/home/empty.component.ts":
/*!**********************************************!*\
  !*** ./src/app/page/home/empty.component.ts ***!
  \**********************************************/
/*! exports provided: EmptyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyComponent", function() { return EmptyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmptyComponent = /** @class */ (function () {
    function EmptyComponent() {
    }
    EmptyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empty-page',
            template: '<div></div>',
        })
    ], EmptyComponent);
    return EmptyComponent;
}());



/***/ }),

/***/ "./src/app/page/home/pages.module.ts":
/*!*******************************************!*\
  !*** ./src/app/page/home/pages.module.ts ***!
  \*******************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _redirect_login_redirect_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect-login/redirect-login.component */ "./src/app/page/home/redirect-login/redirect-login.component.ts");
/* harmony import */ var _empty_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./empty.component */ "./src/app/page/home/empty.component.ts");

/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-04 08:35:32
 * @LastEditTime: 2019-11-04 22:21:06
 * @LastEditors: Devin Shi
 * @Description:
 */


// import PLUGIN_MODULE from '../../../plugins/index';


var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _redirect_login_redirect_login_component__WEBPACK_IMPORTED_MODULE_3__["RedirectLoginComponent"],
                _empty_component__WEBPACK_IMPORTED_MODULE_4__["EmptyComponent"]
            ],
            entryComponents: [
                _redirect_login_redirect_login_component__WEBPACK_IMPORTED_MODULE_3__["RedirectLoginComponent"],
                _empty_component__WEBPACK_IMPORTED_MODULE_4__["EmptyComponent"]
            ],
            imports: [
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            ],
            providers: []
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/page/home/pages.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/page/home/pages.routes.ts ***!
  \*******************************************/
/*! exports provided: PageRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRoutes", function() { return PageRoutes; });
/* harmony import */ var _redirect_login_redirect_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirect-login/redirect-login.component */ "./src/app/page/home/redirect-login/redirect-login.component.ts");
/* harmony import */ var src_app_layout_slider_layout_slider_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/layout/slider-layout/slider-layout.component */ "./src/app/layout/slider-layout/slider-layout.component.ts");
/* harmony import */ var src_app_auth_ddmp_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/ddmp-auth.guard */ "./src/app/auth/ddmp-auth.guard.ts");
/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-04 08:35:32
 * @LastEditTime: 2019-11-05 08:30:44
 * @LastEditors: Devin Shi
 * @Description:
 */



// import { PLUGIN_ROUTER } from '../../../plugins/index';
var defaultRoute = {
    path: '',
    pathMatch: 'full',
    canActivate: [src_app_auth_ddmp_auth_guard__WEBPACK_IMPORTED_MODULE_2__["DdmpAuthNavGuard"]],
    redirectTo: ''
};
// __START_PLUGIN_ROUTER__ //
var PLUGIN_ROUTER = [
    {
        "path": "app-plan-set",
        "loadChildren": "src/plugins/sdmp/plan-set/plan-set.module#PlanSetModule",
        "data": {
            "name": "计划设置"
        }
    },
    {
        "path": "app-plan-all",
        "loadChildren": "src/plugins/sdmp/plan-all/plan-all.module#PlanAllModule",
        "data": {
            "name": "计划管理"
        }
    }
];
// __END_PLUGIN_ROUTER__ //
var PageRoutes = [
    {
        path: 'home',
        component: src_app_layout_slider_layout_slider_layout_component__WEBPACK_IMPORTED_MODULE_1__["SliderLayoutComponent"],
        children: PLUGIN_ROUTER
    },
    {
        path: 'redirect-login',
        component: _redirect_login_redirect_login_component__WEBPACK_IMPORTED_MODULE_0__["RedirectLoginComponent"]
    },
];
PageRoutes.forEach(function (homeRoute) {
    // PageRoutes[0].children.unshift(defaultRoute);
    PLUGIN_ROUTER.forEach(function (pluginRoute, index) {
        pluginRoute.canActivate = [src_app_auth_ddmp_auth_guard__WEBPACK_IMPORTED_MODULE_2__["DdmpAuthNavGuard"]];
        if (index === 0) {
            defaultRoute.redirectTo = pluginRoute.path;
        }
    });
});



/***/ }),

/***/ "./src/app/page/home/redirect-login/redirect-login.component.html":
/*!************************************************************************!*\
  !*** ./src/app/page/home/redirect-login/redirect-login.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/home/redirect-login/redirect-login.component.less":
/*!************************************************************************!*\
  !*** ./src/app/page/home/redirect-login/redirect-login.component.less ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvaG9tZS9yZWRpcmVjdC1sb2dpbi9yZWRpcmVjdC1sb2dpbi5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/page/home/redirect-login/redirect-login.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/page/home/redirect-login/redirect-login.component.ts ***!
  \**********************************************************************/
/*! exports provided: RedirectLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectLoginComponent", function() { return RedirectLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_network_network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/network/network.service */ "./src/app/network/network.service.ts");
/* harmony import */ var src_app_cache_sessionStorage_session_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cache/sessionStorage/session-storage.service */ "./src/app/cache/sessionStorage/session-storage.service.ts");
/* harmony import */ var src_app_auth_ddmp_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/ddmp-auth.service */ "./src/app/auth/ddmp-auth.service.ts");
/* harmony import */ var src_app_cache_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cache/localStorage/local-storage.service */ "./src/app/cache/localStorage/local-storage.service.ts");
/* harmony import */ var src_app_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/cache/storage.namespace */ "./src/app/cache/storage.namespace.ts");
/* harmony import */ var src_app_network_network_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/network/network-api */ "./src/app/network/network-api.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-04 08:35:32
 * @LastEditTime: 2019-11-04 15:14:07
 * @LastEditors: Devin Shi
 * @Description:
 */









var RedirectLoginComponent = /** @class */ (function () {
    function RedirectLoginComponent(http, network, session, ddmpAuthService, localStorageService, router) {
        this.http = http;
        this.network = network;
        this.session = session;
        this.ddmpAuthService = ddmpAuthService;
        this.localStorageService = localStorageService;
        this.router = router;
    }
    RedirectLoginComponent.prototype.ngOnInit = function () {
        this.getToken();
    };
    /**
     * @author wucan
     * @date 2019年10月11日
     * @description 获取从外部跳转过来带过来的code
     */
    RedirectLoginComponent.prototype.getToken = function () {
        var _this = this;
        this.code = location.hash.split('=')[1];
        // this.code = "N0MeKJeChNsPeK0LXdualzjkasMH6bj4BQopUO66SxA=";
        this.network.get("/fnd/user/externalAuth?code=" + this.code).subscribe(function (res) {
            if (res.code === 'ok') {
                _this.session.set(src_app_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_6__["TOKEN"], res.data);
                _this.localStorageService.set('TOKEN', res.data);
                _this.ddmpAuthService.setToken({
                    'accessToken': res.data.accessToken,
                    'refreshToken': res.data.refreshToken,
                    'authCode': '',
                    'userCode': ''
                });
                setTimeout(function () {
                    _this.getUserInfo();
                    _this.localStorageService.set('currentToken', _this.ddmpAuthService.currentToken);
                    _this.router.navigate(['./home/app-my-to-do']);
                }, 150);
            }
        });
    };
    RedirectLoginComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.http.get(src_app_network_network_api__WEBPACK_IMPORTED_MODULE_7__["NetworkApi"].GETUSERINFO.url, {}).subscribe(function (res) {
            if (res.code === 'ok') {
                _this.localStorageService.set(src_app_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_6__["USER_NAME"], res.data.attributes['userName'] || '');
                _this.localStorageService.set(src_app_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_6__["USER_ID"], res.data.attributes['uid'] || '');
                _this.localStorageService.set(src_app_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_6__["USER_TYPE"], res.data.attributes['type'] || '');
                _this.ddmpAuthService.setUser({
                    'id': res.data.attributes['uid'] || '',
                    'code': res.data.attributes['uid'] || '',
                    'authCode': res.data.attributes['uid'] || '',
                    'name': res.data.attributes['userName'] || '',
                    'extraInfo': res.data.attributes || {}
                });
                _this.localStorageService.set('currentUser', _this.ddmpAuthService.currentUser);
            }
            else {
            }
        });
    };
    RedirectLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redirect-login',
            template: __webpack_require__(/*! ./redirect-login.component.html */ "./src/app/page/home/redirect-login/redirect-login.component.html"),
            styles: [__webpack_require__(/*! ./redirect-login.component.less */ "./src/app/page/home/redirect-login/redirect-login.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
            src_app_network_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"],
            src_app_cache_sessionStorage_session_storage_service__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"],
            src_app_auth_ddmp_auth_service__WEBPACK_IMPORTED_MODULE_4__["DdmpAuthService"],
            src_app_cache_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], RedirectLoginComponent);
    return RedirectLoginComponent;
}());



/***/ }),

/***/ "./src/app/services/global-loading/global-loading.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/global-loading/global-loading.service.ts ***!
  \*******************************************************************/
/*! exports provided: GlobalLoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalLoadingService", function() { return GlobalLoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 15:44:14
 * @LastEditTime: 2019-10-12 15:53:31
 * @LastEditors: Please set LastEditors
 */


var GlobalLoadingService = /** @class */ (function () {
    function GlobalLoadingService() {
        this._onLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onLoading$ = this._onLoading.asObservable();
        this._onLoadingSuccess = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onLoadingSuccess$ = this._onLoadingSuccess.asObservable();
        this._onLoadingError = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onLoadingError$ = this._onLoadingError.asObservable();
    }
    GlobalLoadingService.prototype.showLoading = function (config) {
        var _this = this;
        setTimeout(function () {
            _this._onLoading.next(config);
        }, 1);
    };
    GlobalLoadingService.prototype.showError = function (config) {
        var _this = this;
        setTimeout(function () {
            _this._onLoadingError.next(config);
        }, 1);
    };
    GlobalLoadingService.prototype.showSuccess = function (config) {
        var _this = this;
        setTimeout(function () {
            _this._onLoadingSuccess.next(config);
        }, 1);
    };
    GlobalLoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], GlobalLoadingService);
    return GlobalLoadingService;
}());



/***/ }),

/***/ "./src/app/services/messages/messages-service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/messages/messages-service.ts ***!
  \*******************************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");



/**
 *
 * 通用消息提示服务
 *
 */
var MessagesService = /** @class */ (function () {
    function MessagesService(messageService, nzNotificationService) {
        this.messageService = messageService;
        this.nzNotificationService = nzNotificationService;
    }
    MessagesService.prototype.showSuccessMessage = function (content) {
        this.messageService.success(content);
    };
    MessagesService.prototype.showWarningMessage = function (content) {
        this.messageService.warning(content);
    };
    MessagesService.prototype.showErrorMessage = function (content) {
        this.messageService.error(content);
    };
    MessagesService.prototype.showNotificationErrorMessage = function (title, content) {
        this.nzNotificationService.create('error', title, content);
    };
    MessagesService.prototype.showNotificationWarnMessage = function (title, content) {
        this.nzNotificationService.create('warning', title, content);
    };
    /**
     * 通知提醒框
     * @param type 类型 success|info|warning|error
     * @param title 标题
     * @param msg 消息内容
     */
    MessagesService.prototype.createNotification = function (type, title, msg) {
        this.nzNotificationService.create(type, title, msg);
    };
    MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzNotificationService"]])
    ], MessagesService);
    return MessagesService;
}());



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 14:29:46
 * @LastEditTime: 2019-11-04 15:15:39
 * @LastEditors: Devin Shi
 */







// #region your modules
var THIRDMODULES = [
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
];
// #endregion
// // #region your componets & directives
var COMPONENTS = [];
var DIRECTIVES = [];
var PIPES = [];
// // #endregion
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ].concat(THIRDMODULES),
            declarations: COMPONENTS.concat(DIRECTIVES, PIPES),
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ].concat(THIRDMODULES, COMPONENTS, DIRECTIVES, PIPES)
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/util/money-util.service.ts":
/*!********************************************!*\
  !*** ./src/app/util/money-util.service.ts ***!
  \********************************************/
/*! exports provided: MoneyUtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyUtilService", function() { return MoneyUtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MoneyUtilService = /** @class */ (function () {
    function MoneyUtilService() {
    }
    /**
     * @description: 处理金额的千分位
     * @param num {string | number} 金额数字
     * @param cent {string | number} 保留小数点位置
     * @param isThousand 是否生成千分位
     * @return: 处理好的千分位金额字符串
     */
    MoneyUtilService.prototype.formatThousandth = function (num, cent, isThousand) {
        var reg = /\d{1,3}(?=(\d{3})+$)/g;
        var result;
        if (num || num === 0) {
            num = num.toString().replace(/$|,/g, '');
            var dotIndex = num.indexOf('.');
            if (dotIndex > -1) {
                var dotLeft = num.substring(0, dotIndex);
                if (isThousand) {
                    dotLeft = (dotLeft + '').replace(reg, '$&,');
                }
                var dotRight = num.substring(dotIndex + 1, (dotIndex + cent + 1));
                if (dotRight.length < cent) {
                    while (dotRight.length < cent) {
                        dotRight += '0';
                    }
                }
                result = dotLeft + "." + dotRight;
            }
            else {
                if (isThousand) {
                    result = (num + '').replace(reg, '$&,');
                }
                else {
                    result = num;
                }
                if (cent > 0) {
                    result += '.';
                    for (var i = 0; i < cent; i++) {
                        result += '0';
                    }
                }
            }
        }
        return result;
        // if (isNaN(cent)) {
        //     cent = 0;
        // }
        // cent = parseInt(cent);
        // cent = Math.abs(cent);
        // var sign = (num == (num = Math.abs(num)));
        // num = Math.floor(num * Math.pow(10, cent) + 0.50000000001); //把指定的小数位先转换成整数.多余的小数位四舍五入.
        // var cents: any = num % Math.pow(10, cent); //求出小数位数值.
        // num = Math.floor(num / Math.pow(10, cent)).toString();//求出整数位数值.
        // cents = cents.toString();//把小数位转换成字符串,以便求小数位长度.
        // while (cents.length < cent) {//补足小数位到指定的位数.
        //     cents = "0" + cents;
        // }
        // if (!isThousand) { //不需要千分位符.
        //     return (((sign) ? '' : '-') + num + '.' + cents);
        // }
        // //对整数部分进行千分位格式化.
        // for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
        //     num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
        // }
        // return (((sign) ? '' : '-') + num + '.' + cents);
        // const reg=/\d{1,3}(?=(\d{3})+$)/g;
        // return (num + '').replace(reg, '$&,');
    };
    MoneyUtilService.prototype.toNumber = function (money) {
        if (money) {
            money = typeof money === 'number' ? money.toString() : money;
            return new Number(money.replace(/$|,/g, ''));
        }
        return money;
    };
    MoneyUtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MoneyUtilService);
    return MoneyUtilService;
}());



/***/ }),

/***/ "./src/app/util/object-util.service.ts":
/*!*********************************************!*\
  !*** ./src/app/util/object-util.service.ts ***!
  \*********************************************/
/*! exports provided: ObjectUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUtilsService", function() { return ObjectUtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ObjectUtilsService = /** @class */ (function () {
    function ObjectUtilsService() {
        this.class2type = {};
        this.initClass2type();
    }
    ObjectUtilsService.prototype.transformTimeToDate = function (value, format) {
        if (format === 'HH:mm:ss') {
            value = "1970-01-01 " + value;
        }
        var t = Date.parse(value);
        if (!isNaN(t)) {
            return new Date(Date.parse(value.replace(/-/g, "/")));
        }
        else {
            return new Date();
        }
    };
    /**
     * 对象拷贝，参考$.extend()实现。首个参数为true时为深度拷贝，默认为false。
     * 深度遍历，使用方法：let newObj = this.extend(true, {}, objA, objB);
     * @param args 所有参数
     * @returns 返回合并后的对象
     * SharedService
     */
    ObjectUtilsService.prototype.extend = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var options, name, src, srcType, copy, copyIsArray, clone, target = args[0] || {}, i = 1, deep = false;
        var length = args.length;
        if (typeof target === 'boolean') {
            deep = target;
            target = args[i] || {};
            i++;
        }
        if (typeof target !== 'object' && typeof target !== 'function') {
            target = {};
        }
        if (i === length) {
            target = this;
            i--;
        }
        for (; i < length; i++) {
            if ((options = args[i]) !== null) {
                for (var _a = 0, _b = Object.keys(options); _a < _b.length; _a++) {
                    name = _b[_a];
                    src = target[name];
                    copy = options[name];
                    // 若参数中字段的值就是目标参数，停止赋值，进行下一个字段的赋值
                    // 这是为了防止无限的循环嵌套
                    if (target === copy) {
                        continue;
                    }
                    srcType = Array.isArray(src) ? 'array' : typeof src;
                    // 不能用typeof判断一个数组是否为数组格式，例：typeof [] -> object。如需判断的话可用'[] instanceof Array'方法。
                    // copyType = typeof copy;
                    if (deep && copy && ((copyIsArray = Array.isArray(copy)) || typeof copy === 'object')) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && srcType === 'array' ? src : [];
                        }
                        else {
                            clone = src && srcType === 'object' ? src : {};
                        }
                        target[name] = this.extend(deep, clone, copy);
                    }
                    else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    };
    ObjectUtilsService.prototype.type = function (obj) {
        if (obj === null) {
            return obj + "";
        }
        return typeof obj === 'object' || typeof obj === 'function' ?
            this.class2type[this.toString.call(obj)] || 'object' :
            typeof obj;
    };
    ObjectUtilsService.prototype.initClass2type = function () {
        if (!this.class2type) {
            this.class2type = {};
        }
        for (var _i = 0, _a = 'Boolean Number String Function Array Data RegExp Object Error'.split(' '); _i < _a.length; _i++) {
            var name_1 = _a[_i];
            this.class2type['[object ' + name_1 + ']'] = name_1.toLowerCase();
        }
    };
    ObjectUtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ObjectUtilsService);
    return ObjectUtilsService;
}());



/***/ }),

/***/ "./src/app/util/util.module.ts":
/*!*************************************!*\
  !*** ./src/app/util/util.module.ts ***!
  \*************************************/
/*! exports provided: UtilsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsModule", function() { return UtilsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _object_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object-util.service */ "./src/app/util/object-util.service.ts");
/* harmony import */ var _uuid_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uuid.service */ "./src/app/util/uuid.service.ts");
/* harmony import */ var _money_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./money-util.service */ "./src/app/util/money-util.service.ts");






var UtilsModule = /** @class */ (function () {
    function UtilsModule() {
    }
    UtilsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            providers: [_object_util_service__WEBPACK_IMPORTED_MODULE_3__["ObjectUtilsService"], _uuid_service__WEBPACK_IMPORTED_MODULE_4__["GuidService"], _money_util_service__WEBPACK_IMPORTED_MODULE_5__["MoneyUtilService"]],
            declarations: [],
            exports: [],
        })
    ], UtilsModule);
    return UtilsModule;
}());



/***/ }),

/***/ "./src/app/util/uuid.service.ts":
/*!**************************************!*\
  !*** ./src/app/util/uuid.service.ts ***!
  \**************************************/
/*! exports provided: GuidService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidService", function() { return GuidService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GuidService = /** @class */ (function () {
    function GuidService() {
    }
    GuidService.prototype.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    GuidService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], GuidService);
    return GuidService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 17:24:19
 * @LastEditTime: 2019-11-05 09:14:41
 * @LastEditors: Devin Shi
 */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    hmr: false,
    useHash: true,
    enableTracing: true,
    isDebug: true,
    onSameUrlNavigation: 'ignore',
    scrollPositionRestoration: 'enabled',
    localUrl: 'http://localhost:4800',
    redirectTo: 'home',
    // __START_ENV_CONFIG__ //
    "needSSO": false,
    "baseDomain": "http://k8s.definesys.com:30557",
    "ssoDomain": "http://k8s.definesys.com:30008",
    "appInfo": {
        "appId": "238a7db5-c183-4580-aedb-4a2c868acdd6",
        "appSecre": "00970853-8269-4ef8-980f-a8bdbf0b1c88",
        "appCode": "sdmp",
        "sidebarEnable": false,
        "title": "DAP脚手架"
    },
    "clientId": "dapAppClient"
    // __END_ENV_CONFIG__ //
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/hmr.ts":
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/*! exports provided: hmrBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function() { return hmrBootstrap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ "./node_modules/@angularclass/hmr/dist/index.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");



var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return (ngModule = mod); });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        var modalService = ngModule.injector.get(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"], null);
        if (modalService) {
            modalService.closeAll();
        }
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hmr */ "./src/hmr.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
var bootstrap = function () {
    return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"], {
        defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated,
        preserveWhitespaces: false,
    })
        .then(function (res) {
        if (window.appBootstrap) {
            window.appBootstrap();
        }
        return res;
    });
};
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hmr) {
    if (false) {}
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap();
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/devin/工作/01-项目/07-DAP项目/014-workspace/ddmp-web-business-engine/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map