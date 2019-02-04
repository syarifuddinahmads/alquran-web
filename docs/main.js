(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/home/home.component */ "./src/app/page/home/home.component.ts");
/* harmony import */ var _page_surah_surah_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/surah/surah.component */ "./src/app/page/surah/surah.component.ts");
/* harmony import */ var _page_surah_detail_surah_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/surah-detail/surah-detail.component */ "./src/app/page/surah-detail/surah-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _page_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'surah', component: _page_surah_surah_component__WEBPACK_IMPORTED_MODULE_3__["SurahComponent"] },
    { path: 'surah/:id', component: _page_surah_detail_surah_detail_component__WEBPACK_IMPORTED_MODULE_4__["SurahDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/home/home.component */ "./src/app/page/home/home.component.ts");
/* harmony import */ var _page_surah_surah_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/surah/surah.component */ "./src/app/page/surah/surah.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _page_surah_detail_surah_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/surah-detail/surah-detail.component */ "./src/app/page/surah-detail/surah-detail.component.ts");
/* harmony import */ var _pipe_filtersurah_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipe/filtersurah.pipe */ "./src/app/pipe/filtersurah.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _page_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _page_surah_surah_component__WEBPACK_IMPORTED_MODULE_5__["SurahComponent"],
                _page_surah_detail_surah_detail_component__WEBPACK_IMPORTED_MODULE_7__["SurahDetailComponent"],
                _pipe_filtersurah_pipe__WEBPACK_IMPORTED_MODULE_8__["FiltersurahPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/page/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/page/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contentHome\">\n  <div class=\"home-start\">\n    <div class=\"icon-read\">\n      <figure class=\"image is-128x128\">\n        <img class=\"is-rounded\" src=\"../../../assets/images/reading-quran.png\">\n      </figure>\n    </div>\n    <div class=\"btn-start\">\n      <a class=\"button is-info\" href=\"/surah\">Read Al Qur'an</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/page/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentHome {\n  background: #00d1b2;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0; }\n  .contentHome .home-start {\n    text-align: center;\n    height: 25vh;\n    margin: 16% auto; }\n  @media only screen and (max-width: 768px) {\n      .contentHome .home-start {\n        margin: 50% auto; } }\n  .contentHome .home-start .icon-read figure {\n      margin: auto; }\n  .contentHome .home-start .icon-read figure img {\n        border: 1px solid #f4f4f4;\n        background: #fafbff;\n        padding: 12px; }\n  .contentHome .home-start .btn-start {\n      padding: 24px; }\n"

/***/ }),

/***/ "./src/app/page/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/page/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/page/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page/surah-detail/surah-detail.component.html":
/*!***************************************************************!*\
  !*** ./src/app/page/surah-detail/surah-detail.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"boxContent\">\n  <div class=\"boxHeaderAyah\">\n    <a [routerLink]=\"['/surah']\"><span>Back</span></a>\n    <h2>{{detailSurah?.data?.englishName}} - {{detailSurah?.data?.name}}</h2>\n    <small>{{detailSurah?.data?.revelationType}} | {{detailSurah?.data?.numberOfAyahs}} Ayah</small>\n  </div>\n  <div class=\"boxListAyah\">\n    <div class=\"box\" *ngFor=\"let ds of detailSurah?.data?.ayahs\">\n      <h2>({{ds.numberInSurah}})&nbsp;{{ds.text}}</h2>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page/surah-detail/surah-detail.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/page/surah-detail/surah-detail.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".boxContent {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden; }\n  .boxContent .boxHeaderAyah {\n    padding: 8px;\n    position: fixed;\n    width: 100%;\n    top: 0;\n    left: 0;\n    background: #00d1b2;\n    text-align: center; }\n  .boxContent .boxHeaderAyah a {\n      position: absolute;\n      top: 14px;\n      left: 12px;\n      padding: 2px 6px;\n      border: 1px solid #fff;\n      border-radius: 4px;\n      color: #fff; }\n  .boxContent .boxHeaderAyah h2 {\n      color: #ffffff; }\n  .boxContent .boxHeaderAyah small {\n      color: #fafafa; }\n  .boxContent .boxListAyah {\n    position: fixed;\n    width: 100%;\n    height: 95.5%;\n    padding: 24px;\n    overflow-y: scroll;\n    top: 9.5%;\n    left: 0;\n    background: #fafafa; }\n  .boxContent .boxListAyah .box {\n      text-align: right;\n      margin-bottom: 1.25em; }\n  .boxContent .boxListAyah .box h2 {\n        color: #333333;\n        line-height: 2.5em; }\n"

/***/ }),

/***/ "./src/app/page/surah-detail/surah-detail.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/page/surah-detail/surah-detail.component.ts ***!
  \*************************************************************/
/*! exports provided: SurahDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurahDetailComponent", function() { return SurahDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/services.service */ "./src/app/services/services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurahDetailComponent = /** @class */ (function () {
    function SurahDetailComponent(route, services) {
        this.route = route;
        this.services = services;
        this.detailSurah = {};
    }
    SurahDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.services.getListSurah(params.id).subscribe(function (result) {
                _this.detailSurah = result;
            });
        });
    };
    SurahDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-surah-detail',
            template: __webpack_require__(/*! ./surah-detail.component.html */ "./src/app/page/surah-detail/surah-detail.component.html"),
            styles: [__webpack_require__(/*! ./surah-detail.component.scss */ "./src/app/page/surah-detail/surah-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]])
    ], SurahDetailComponent);
    return SurahDetailComponent;
}());



/***/ }),

/***/ "./src/app/page/surah/surah.component.html":
/*!*************************************************!*\
  !*** ./src/app/page/surah/surah.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"boxContent\">\n  <div class=\"boxFilterSurah\">\n    <input class=\"input\" placeholder=\"Search Surah...\" [(ngModel)]=\"filterSurah\">\n  </div>\n  <div class=\"boxListSurah\">\n    <div class=\"box\" *ngFor=\"let ls of listSurah?.data | filtersurah:filterSurah\">\n      <a [routerLink]=\"['/surah', ls.number]\">\n        <div class=\"detail\">\n          <div class=\"numberSurah\">\n            <strong>{{ls.number}}</strong>\n          </div>\n          <div class=\"descSurah\">\n            <h2>{{ls.englishName}}</h2>\n            <small>{{ls.revelationType}} | {{ls.numberOfAyahs}} Ayah</small>\n          </div>\n          <div class=\"nameSurah\">\n            <h2>{{ls.name}}</h2>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page/surah/surah.component.scss":
/*!*************************************************!*\
  !*** ./src/app/page/surah/surah.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".boxContent {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden; }\n  .boxContent .boxFilterSurah {\n    padding: 18px 24px;\n    position: fixed;\n    width: 100%;\n    top: 0;\n    left: 0;\n    background: #00d1b2; }\n  .boxContent .boxListSurah {\n    position: fixed;\n    width: 100%;\n    height: 87.5%;\n    padding: 24px;\n    overflow-y: scroll;\n    top: 12.5%;\n    left: 0;\n    background: #fafafa; }\n  .boxContent .boxListSurah .box {\n      padding: 10px;\n      margin-bottom: 1.25em;\n      width: 100%;\n      float: left; }\n  .boxContent .boxListSurah .box .detail .numberSurah {\n        width: 10%;\n        float: left;\n        text-align: center;\n        padding: 16px 0px; }\n  .boxContent .boxListSurah .box .detail .numberSurah strong {\n          padding: 2px;\n          color: #424242; }\n  .boxContent .boxListSurah .box .detail .descSurah {\n        width: 45%;\n        float: left;\n        padding: 4px 0px 4px 10px; }\n  .boxContent .boxListSurah .box .detail .descSurah h2 {\n          color: #333333; }\n  .boxContent .boxListSurah .box .detail .descSurah small {\n          color: #424242;\n          font-size: 10px; }\n  .boxContent .boxListSurah .box .detail .nameSurah {\n        width: 45%;\n        float: left;\n        text-align: right; }\n  .boxContent .boxListSurah .box .detail .nameSurah h2 {\n          color: #333333; }\n"

/***/ }),

/***/ "./src/app/page/surah/surah.component.ts":
/*!***********************************************!*\
  !*** ./src/app/page/surah/surah.component.ts ***!
  \***********************************************/
/*! exports provided: SurahComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurahComponent", function() { return SurahComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurahComponent = /** @class */ (function () {
    function SurahComponent(services, router) {
        this.services = services;
        this.router = router;
        this.listSurah = {};
    }
    SurahComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.services.getListSurah(null).subscribe(function (result) {
            _this.listSurah = result;
        });
    };
    SurahComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-surah',
            template: __webpack_require__(/*! ./surah.component.html */ "./src/app/page/surah/surah.component.html"),
            styles: [__webpack_require__(/*! ./surah.component.scss */ "./src/app/page/surah/surah.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SurahComponent);
    return SurahComponent;
}());



/***/ }),

/***/ "./src/app/pipe/filtersurah.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipe/filtersurah.pipe.ts ***!
  \******************************************/
/*! exports provided: FiltersurahPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersurahPipe", function() { return FiltersurahPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FiltersurahPipe = /** @class */ (function () {
    function FiltersurahPipe() {
    }
    FiltersurahPipe.prototype.transform = function (value, args) {
        if (!value)
            return [];
        if (!args)
            return value;
        args = args.toLowerCase();
        return value.filter(function (item) {
            return item.englishName.toLowerCase().includes(args);
        });
    };
    FiltersurahPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filtersurah'
        })
    ], FiltersurahPipe);
    return FiltersurahPipe;
}());



/***/ }),

/***/ "./src/app/services/services.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/services.service.ts ***!
  \**********************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var api = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
var ServicesService = /** @class */ (function () {
    function ServicesService(http) {
        this.http = http;
    }
    ServicesService.prototype.getListSurah = function (id) {
        if (id) {
            return this.http.get(api + '/surah/' + id);
        }
        return this.http.get(api + '/surah');
    };
    ServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServicesService);
    return ServicesService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api: 'http://api.alquran.cloud'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/udin/Me/Study/alquran-web/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map