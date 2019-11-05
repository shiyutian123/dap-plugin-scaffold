(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-login-login-module"],{

/***/ "./src/app/page/login/login-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/page/login/login-routing.module.ts ***!
  \****************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/page/login/login.component.ts");




var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/page/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/page/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover\">\n  <form nz-form [formGroup]=\"validateForm\" class=\"login-form\" (ngSubmit)=\"submitForm(validateForm.value)\">\n    <!-- <div class=\"define-logo\"></div> -->\n    <div class=\"label\">登录</div>\n    <nz-form-item>\n      <nz-form-control>\n        <nz-input-group [nzPrefix]=\"prefixUser\">\n          <input #empIdInput type=\"text\" nz-input formControlName=\"userName\" placeholder=\"账户\">\n        </nz-input-group>\n        <!-- <nz-form-explain *ngIf=\"validateForm.get('userName').dirty && validateForm.get('userName').errors\">请输入账户名称！</nz-form-explain> -->\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-control>\n        <nz-input-group [nzPrefix]=\"prefixLock\">\n          <input #passwordInput type=\"password\" nz-input formControlName=\"password\" placeholder=\"密码\">\n        </nz-input-group>\n        <!-- <nz-form-explain *ngIf=\"validateForm.get('password').dirty && validateForm.get('password').errors\">请输入密码！</nz-form-explain> -->\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-control>\n        <!-- <label nz-checkbox formControlName=\"remember\">\n          <span>Remember me</span>\n        </label> -->\n        <!-- <a class=\"login-form-forgot\" class=\"login-form-forgot\">Forgot password</a> -->\n        <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\" >登录</button>\n        <!-- Or<a href=\"\">register now!</a> -->\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-control>\n        <label nz-checkbox formControlName=\"remember\">\n          <span>记住密码</span>\n        </label>\n        <a class=\"login-form-forgot\">忘记密码？</a>\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n  <ng-template #prefixUser><i nz-icon type=\"user\"></i></ng-template>\n  <ng-template #prefixLock><i nz-icon type=\"lock\"></i></ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/page/login/login.component.less":
/*!*************************************************!*\
  !*** ./src/app/page/login/login.component.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .cover {\n  width: 100%;\n  height: 100%;\n  background: url('bg-img.jpg') no-repeat center center;\n  background-size: cover;\n}\n.login-form {\n  position: absolute;\n  top: 50%;\n  left: 66%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  border: 1px solid #fff;\n  border: 0.4rem 0.8rem;\n  border-radius: 1.2rem;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n  padding: 20px 20px 0;\n  width: 350px;\n  background-color: #fff;\n}\n.label {\n  text-align: center;\n  color: rgba(53, 62, 100, 0.63);\n  font-size: 30px;\n}\n.ant-input {\n  height: 4rem;\n}\n.login-form-forgot {\n  float: right;\n}\n.login-form-button {\n  width: 100%;\n  height: 3.6rem;\n}\n.disabled {\n  pointer-events: none;\n  background: #eee;\n}\n.copyright-container {\n  position: relative;\n  width: 100%;\n  height: 3rem;\n}\n.copyright-container span.copyright {\n  position: absolute;\n  padding-left: 15%;\n}\n:host ::ng-deep .ant-btn-primary {\n  color: #fff;\n  background-color: #40a9ff;\n  border-color: #40a9ff;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);\n}\n:host ::ng-deep .ant-btn-primary:focus,\n.ant-btn-primary:hover {\n  color: #fff;\n  background-color: #40a9ff;\n  border-color: #40a9ff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXZpbi/lt6XkvZwvMDEt6aG555uuLzA3LURBUOmhueebri8wMTQtd29ya3NwYWNlL2RkbXAtd2ViLWJ1c2luZXNzLWVuZ2luZS9zcmMvYXBwL3BhZ2UvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3BhZ2UvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNEQUFBO0VBQ0EsdUJBQUE7Q0NDSDtBREVEO0VBQ0ksbUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO01BQUEsZ0NBQUE7VUFBQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7Q0NBSDtBREdEO0VBQ0ksbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0NDREg7QURJRDtFQUNJLGFBQUE7Q0NGSDtBREtEO0VBQ0ksYUFBQTtDQ0hIO0FETUQ7RUFDSSxZQUFBO0VBQ0EsZUFBQTtDQ0pIO0FET0Q7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0NDTEg7QURRRDtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7Q0NOSDtBRFNEO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtDQ1BIO0FEa0JEO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHlDQUFBO0NDaEJEO0FEbUJEOztFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0NDaEJEIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuY292ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JnLWltZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5sb2dpbi1mb3JtIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNjYlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlcjogMC40cmVtIDAuOHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjJyZW07XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAuMjUpO1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAwO1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ubGFiZWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSg1Myw2MiwxMDAsMC42Myk7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uYW50LWlucHV0IHtcbiAgICBoZWlnaHQ6IDRyZW07XG59XG5cbi5sb2dpbi1mb3JtLWZvcmdvdCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubG9naW4tZm9ybS1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMy42cmVtO1xufVxuXG4uZGlzYWJsZWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cbi5jb3B5cmlnaHQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzcmVtO1xufVxuXG4uY29weXJpZ2h0LWNvbnRhaW5lciBzcGFuLmNvcHlyaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmctbGVmdDogMTUlO1xufVxuXG4vLyAuZGVmaW5lLWxvZ28ge1xuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICAgIHdpZHRoOiAzMHJlbTtcbi8vICAgICBoZWlnaHQ6IDE2cmVtO1xuLy8gICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2RlZmluZS1sb2dvLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbi8vIH1cblxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtYnRuLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwYTlmZjtcbiAgYm9yZGVyLWNvbG9yOiAjNDBhOWZmO1xuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDQ1KTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtYnRuLXByaW1hcnk6Zm9jdXMsIC5hbnQtYnRuLXByaW1hcnk6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwYTlmZjtcbiAgYm9yZGVyLWNvbG9yOiAjNDBhOWZmO1xufSIsIjpob3N0IDo6bmctZGVlcCAuY292ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JnLWltZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmxvZ2luLWZvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA2NiU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyOiAwLjRyZW0gMC44cmVtO1xuICBib3JkZXItcmFkaXVzOiAxLjJyZW07XG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAwO1xuICB3aWR0aDogMzUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ubGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDUzLCA2MiwgMTAwLCAwLjYzKTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmFudC1pbnB1dCB7XG4gIGhlaWdodDogNHJlbTtcbn1cbi5sb2dpbi1mb3JtLWZvcmdvdCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5sb2dpbi1mb3JtLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMuNnJlbTtcbn1cbi5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuLmNvcHlyaWdodC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNyZW07XG59XG4uY29weXJpZ2h0LWNvbnRhaW5lciBzcGFuLmNvcHlyaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1sZWZ0OiAxNSU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC1idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDBhOWZmO1xuICBib3JkZXItY29sb3I6ICM0MGE5ZmY7XG4gIHRleHQtc2hhZG93OiAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNDUpO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtYnRuLXByaW1hcnk6Zm9jdXMsXG4uYW50LWJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MGE5ZmY7XG4gIGJvcmRlci1jb2xvcjogIzQwYTlmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/page/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/page/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/page/login/login.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, loginService) {
        this.fb = fb;
        this.loginService = loginService;
    }
    // isDisabled = false;
    LoginComponent.prototype.submitForm = function (e) {
        // console.log(this.validateForm.controls);
        for (var i in this.validateForm.controls) {
            if (i) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        this.loginService.empId = e.userName;
        this.loginService.password = e.password;
        if (this.validateForm.value.remember) {
            this.setCookie('userName', this.validateForm.value.userName);
            this.setCookie('pwd', this.validateForm.value.password);
        }
        else {
            this.delCookie('userName');
            this.delCookie('pwd');
        }
        this.loginService.login();
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.validateForm = this.fb.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            remember: [null]
        });
        if (this.getCookie('userName')) {
            this.validateForm.get('userName').setValue(this.getCookie('userName'));
            this.validateForm.get('password').setValue(this.getCookie('pwd'));
            this.validateForm.get('remember').setValue(true);
        }
        // this.loginService.isDisabled.subscribe((isDisabled: boolean) => {
        //   this.isDisabled = this.isDisabled === isDisabled ? !isDisabled : isDisabled;
        // });
    };
    // /**
    //  * @description 记住密码
    //  */
    // rememberPWD(event) {
    //   if (event) {
    //     this.setCookie('userName', this.validateForm.value.userName);
    //     this.setCookie('pwd', this.validateForm.value.password);
    //   } else {
    //     this.delCookie('userName');
    //     this.delCookie('pwd');
    //   }
    // }
    // 设置cookie
    LoginComponent.prototype.setCookie = function (name, value) {
        var day = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toUTCString();
    };
    // 获取cookie
    LoginComponent.prototype.getCookie = function (name) {
        var arr;
        var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
        }
        else {
            return null;
        }
    };
    // 删除cookie
    LoginComponent.prototype.delCookie = function (name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if (cval != null) {
            document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/page/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/page/login/login.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/page/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/page/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/page/login/login.component.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/page/login/login-routing.module.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/page/login/login.service.ts":
/*!*********************************************!*\
  !*** ./src/app/page/login/login.service.ts ***!
  \*********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _cache_storage_namespace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../cache/storage.namespace */ "./src/app/cache/storage.namespace.ts");
/* harmony import */ var _cache_sessionStorage_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../cache/sessionStorage/session-storage.service */ "./src/app/cache/sessionStorage/session-storage.service.ts");
/* harmony import */ var _cache_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../cache/localStorage/local-storage.service */ "./src/app/cache/localStorage/local-storage.service.ts");
/* harmony import */ var _network_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../network/network.service */ "./src/app/network/network.service.ts");
/* harmony import */ var _network_network_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../network/network-api */ "./src/app/network/network-api.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_ddmp_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/auth/ddmp-auth.service */ "./src/app/auth/ddmp-auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_layout_ddmp_menu_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/layout/ddmp-menu.service */ "./src/app/layout/ddmp-menu.service.ts");












var LoginService = /** @class */ (function () {
    function LoginService(network, http, notifyService, router, session, localStorageService, ddmpAuthService, ddmpLayoutMenuService, sessionStorage) {
        this.network = network;
        this.http = http;
        this.notifyService = notifyService;
        this.router = router;
        this.session = session;
        this.localStorageService = localStorageService;
        this.ddmpAuthService = ddmpAuthService;
        this.ddmpLayoutMenuService = ddmpLayoutMenuService;
        this.sessionStorage = sessionStorage;
        this.isDisabled = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    }
    /**
     *  登陆请求
     */
    LoginService.prototype.login = function () {
        var _this = this;
        if (!this.empId || this.empId === '' || !this.password || this.password === '') {
            this.notifyService.info('提醒', '请输入必填项');
            return;
        }
        var params = {
            empId: this.empId,
            password: this.password,
        };
        this.network.post(_network_network_api__WEBPACK_IMPORTED_MODULE_5__["NetworkApi"].NEW_LOGIN.url, params).subscribe(function (res) {
            if (res.code === 'ok') {
                _this.session.set(_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_1__["TOKEN"], res.data);
                sessionStorage.setItem("token", res.data);
                _this.localStorageService.set('TOKEN', res.data);
                // token 认证
                _this.ddmpAuthService.setToken({
                    'accessToken': res.data.accessToken,
                    // TODO 后面要改
                    'refreshToken': res.data.refreshToken,
                    'authCode': params.empId,
                    'userCode': params.empId
                });
                setTimeout(function () {
                    _this.getUserInfo();
                    _this.localStorageService.set('currentToken', _this.ddmpAuthService.currentToken);
                }, 150);
                _this.router.navigate(['/home/'], {
                    queryParams: {}
                });
            }
            else {
                _this.notifyService.error('失败', res.message);
            }
        });
    };
    LoginService.prototype.getUserInfo = function () {
        var _this = this;
        this.http.get(_network_network_api__WEBPACK_IMPORTED_MODULE_5__["NetworkApi"].GETUSERINFO.url, {}).subscribe(function (res) {
            if (res.code === 'ok') {
                _this.session.clearSession();
                _this.session.set(_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_1__["USER_NAME"], res.data.attributes.userName);
                _this.session.set(_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_1__["USER_GENDER"], res.data.attributes.sex);
                _this.session.set(_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_1__["USER_PHONE"], res.data.attributes.phone);
                _this.session.set(_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_1__["USER_EMAIL"], res.data.attributes.email);
                _this.session.set(_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_1__["USER_ICON"], res.data.attributes.icon);
                _this.localStorageService.set(_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_1__["USER_NAME"], res.data.attributes.userName);
                _this.localStorageService.set(_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_1__["USER_ID"], res.data.attributes.uid);
                _this.localStorageService.set(_cache_storage_namespace__WEBPACK_IMPORTED_MODULE_1__["USER_TYPE"], res.data.attributes.type);
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
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_network_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzNotificationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _cache_sessionStorage_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"],
            _cache_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
            src_app_auth_ddmp_auth_service__WEBPACK_IMPORTED_MODULE_9__["DdmpAuthService"],
            src_app_layout_ddmp_menu_service__WEBPACK_IMPORTED_MODULE_11__["DdmpLayoutMenuService"],
            _cache_sessionStorage_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"]])
    ], LoginService);
    return LoginService;
}());



/***/ })

}]);
//# sourceMappingURL=page-login-login-module.js.map