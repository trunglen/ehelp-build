webpackJsonp(["auth.module"],{

/***/ "../../../../../src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__["a" /* SigninComponent */] },
];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_routing_module__ = __webpack_require__("../../../../../src/app/auth/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__auth_routing_module__["a" /* AuthRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__signin_signin_component__["a" /* SigninComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */],
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__x_http__ = __webpack_require__("../../../../../src/x/http.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_constant__ = __webpack_require__("../../../../../src/app/common/constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(httpApi) {
        this.httpApi = httpApi;
    }
    AuthService.prototype.checkSuperAdmin = function () {
        return this.httpApi.Get(__WEBPACK_IMPORTED_MODULE_4__common_constant__["a" /* ApplicationApiResource */].checkSuperAdmin);
    };
    AuthService.prototype.registerSuperAdmin = function (loginInfor) {
        loginInfor.role = 'super-admin';
        return this.httpApi.Post(__WEBPACK_IMPORTED_MODULE_4__common_constant__["a" /* ApplicationApiResource */].registerSuperAdmin, loginInfor);
    };
    AuthService.prototype.login = function (loginInfor) {
        loginInfor.role = 'admin';
        return this.httpApi.Post(__WEBPACK_IMPORTED_MODULE_4__common_constant__["a" /* ApplicationApiResource */].login, loginInfor);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__x_http__["a" /* HttpApi */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Vibur);", ""]);

// module
exports.push([module.i, "* {\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  font-family: arial;\r\n}\r\n\r\n#wrapper {\r\n  background: #FF9000;\r\n  height: 100vh;\r\n}\r\n\r\nh1 {\r\n  color: #ccc;\r\n  text-align: center;\r\n  font-family: 'Vibur', cursive;\r\n  font-size: 50px;\r\n}\r\n\r\n.login-form {\r\n  width: 350px;\r\n  padding: 40px 30px;\r\n  background: #eee;\r\n  border-radius: 4px;\r\n  margin: auto;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.form-group {\r\n  position: relative;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.form-control {\r\n  width: 100%;\r\n  height: 50px;\r\n  border: none;\r\n  padding: 5px 7px 5px 15px;\r\n  background: #fff;\r\n  color: #666;\r\n  border: 2px solid #ddd;\r\n  border-radius: 4px;\r\n}\r\n.form-control:focus, .form-control:focus + .fa {\r\n  border-color: #10CE88;\r\n  color: #10CE88;\r\n}\r\n\r\n.form-group .fa {\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 17px;\r\n  color: #999;\r\n}\r\n\r\n.log-status.wrong-entry {\r\n  -webkit-animation: wrong-log 0.3s;\r\n  animation: wrong-log 0.3s;\r\n}\r\n\r\n.log-status.wrong-entry .form-control, .wrong-entry .form-control + .fa {\r\n  border-color: #ed1c24;\r\n  color: #ed1c24;\r\n}\r\n\r\n.log-btn {\r\n  background: #0AC986;\r\n  dispaly: inline-block;\r\n  width: 100%;\r\n  font-size: 16px;\r\n  height: 50px;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  border: none;\r\n  border-radius: 4px;\r\n}\r\n\r\n.link {\r\n  text-decoration: none;\r\n  color: #C6C6C6;\r\n  float: right;\r\n  font-size: 12px;\r\n  margin-bottom: 15px;\r\n}\r\n.link:hover {\r\n  text-decoration: underline;\r\n  color: #8C918F;\r\n}\r\n\r\n.alert {\r\n  display: none;\r\n  font-size: 12px;\r\n  color: #f00;\r\n  float: left;\r\n}\r\n@-webkit-keyframes wrong-log {\r\n  0%, 100% {\r\n    left: 0px;\r\n  }\r\n  20% , 60% {\r\n    left: 15px;\r\n  }\r\n  40% , 80% {\r\n    left: -15px;\r\n  }\r\n}\r\n@keyframes wrong-log {\r\n  0%, 100% {\r\n    left: 0px;\r\n  }\r\n  20% , 60% {\r\n    left: 15px;\r\n  }\r\n  40% , 80% {\r\n    left: -15px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel='stylesheet prefetch' href='http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'>\n<div id=\"wrapper\">\n  <div class=\"login-form\">\n    <form (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\n      <h1>Ehelp</h1>\n      <div class=\"form-group\" *ngIf=\"isRegister\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Nhập tên\" id=\"UserName\" ngModel name=\"name\">\n        <i class=\"fa fa-user\"></i>\n      </div>\n      <div class=\"form-group \">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Nhập tên đăng nhập \" id=\"UserName\" ngModel name=\"uname\">\n        <i class=\"fa fa-user\"></i>\n      </div>\n      <div class=\"form-group log-status\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Nhập mật khẩu\" id=\"Passwod\" ngModel name=\"password\">\n        <i class=\"fa fa-lock\"></i>\n      </div>\n\n      <span class=\"alert\">Sai thông tin đăng nhập</span>\n      <button type=\"submit\" class=\"log-btn\">{{isRegister?\"Đăng kí\":\"Đăng nhập\"}}</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_alert_service__ = __webpack_require__("../../../../../src/app/shared/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__x_storage__ = __webpack_require__("../../../../../src/x/storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_base_component__ = __webpack_require__("../../../../../src/app/shared/base.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SigninComponent = (function (_super) {
    __extends(SigninComponent, _super);
    function SigninComponent(authService, alertService, router, activedRoute) {
        var _this = _super.call(this) || this;
        _this.authService = authService;
        _this.alertService = alertService;
        _this.router = router;
        _this.activedRoute = activedRoute;
        _this.sessionStorage = __WEBPACK_IMPORTED_MODULE_3__x_storage__["b" /* StorageFactory */].getStorage(__WEBPACK_IMPORTED_MODULE_3__x_storage__["a" /* SESSION */]);
        _this.isRegister = false;
        _this.count = 0;
        _this.param = 3;
        return _this;
    }
    SigninComponent.prototype.ngOnChanges = function (changes) {
        console.log('changed');
    };
    SigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.checkSuperAdmin().subscribe(function (res) {
            _this.isRegister = Object.keys(res).length === 0 && res.constructor === Object;
        }, function (err) { return console.log(err); });
        for (var i = 0; i <= 15; i++) {
            setTimeout(function () {
                _this.count++;
            }, 3000);
        }
    };
    SigninComponent.prototype.ngAfterViewInit = function () {
        console.log('auth ngAfterViewInit');
    };
    SigninComponent.prototype.onSignin = function (f) {
        var _this = this;
        this.param++;
        var value = f.value;
        if (this.isRegister) {
            this.authService.registerSuperAdmin(value).subscribe(function (res) {
                _this.sessionStorage.setItem('access_token', res.access_token);
                _this.router.navigate(['/manage/report'], { relativeTo: _this.activedRoute });
            });
        }
        else {
            this.authService.login(value).subscribe(function (res) {
                _this.sessionStorage.setItem('access_token', res.access_token);
                _this.router.navigate(['/manage/report'], { relativeTo: _this.activedRoute });
            });
        }
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/signin/signin.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0__shared_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"]])
    ], SigninComponent);
    return SigninComponent;
}(__WEBPACK_IMPORTED_MODULE_5__shared_base_component__["a" /* BaseComponent */]));



/***/ }),

/***/ "../../../../../src/app/shared/base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
var BaseComponent = (function () {
    function BaseComponent() {
    }
    BaseComponent.prototype.ngAfterViewInit = function () {
        this.spinnerService.stopLoading();
    };
    BaseComponent.prototype.ngOnInit = function () {
        console.log('app init');
    };
    return BaseComponent;
}());



/***/ })

});
//# sourceMappingURL=auth.module.chunk.js.map