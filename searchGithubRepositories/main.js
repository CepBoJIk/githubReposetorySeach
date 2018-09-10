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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.content {\n  flex: 1 0 auto;\n}\n\n.search {\n  padding: 0 10%;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  background-color: #3C4146;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  line-height: 1.2;\n  padding: 0 30px;\n}\n\n.logo {\n  display: flex;\n  flex: 0 1 100%;\n  align-items: center;\n  padding: 6px 0;\n}\n\n.logo__img {\n  width: 42px;\n  margin-right: 10px;\n}\n\n.logo__text {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.logo__text h1 {\n  color: #fff;\n  font-size: 24px;\n}\n\n.logo__text p {\n  color: #B3BCC7;\n  line-height: 0.8;\n}\n\nnav {\n  flex: 0 0 auto;\n}\n\nnav a {\n  font-size: 16px;\n  color: #E0E0E0;\n  text-decoration: none;\n  margin-right: 20px;\n}\n\nnav a:last-child {\n  margin-right: 0;\n}\n\nnav a:hover,\nnav a.active {\n  color: #fff;\n}\n\nfooter {\n  background-color: #3C4146;\n  text-align: center;\n  color: #FFF;\n}\n\nfooter p {\n  line-height: 40px;\n  flex: 0 0 auto;\n  font-family: 'Roboto', sans-serif;\n}\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"content\">\n    <header>\n      <div class=\"logo\">\n        <img class=\"logo__img\" src=\"assets/logo.svg\" alt=\"\" >\n        <div class=\"logo__text\">\n          <h1>GitHub</h1>\n          <p>search</p>\n        </div>\n      </div>\n      <nav>\n        <a routerLink=\"/search\" routerLinkActive=\"active\">Search</a>\n        <a routerLink=\"/my-list\" routerLinkActive=\"active\">My List</a>\n      </nav>\n    </header>\n    <div class=\"search\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n  <footer>\n    <p>copyright @lodossteam  2018</p>\n  </footer>\n</div>  \n"

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
        this.title = 'searchGithubRepositories';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rest.datasource */ "./src/app/rest.datasource.ts");
/* harmony import */ var _repository_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./repository.model */ "./src/app/repository.model.ts");
/* harmony import */ var _display_view_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./display-view.service */ "./src/app/display-view.service.ts");
/* harmony import */ var _pipes_stargazers_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/stargazers.pipe */ "./src/app/pipes/stargazers.pipe.ts");
/* harmony import */ var _pipes_limitLengthString_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/limitLengthString.pipe */ "./src/app/pipes/limitLengthString.pipe.ts");
/* harmony import */ var _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mylist/mylist.component */ "./src/app/mylist/mylist.component.ts");
/* harmony import */ var _repository_display_repository_display_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./repository-display/repository-display.component */ "./src/app/repository-display/repository-display.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'my-list', component: _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_13__["MylistComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: '**', redirectTo: '/search' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
                _pipes_stargazers_pipe__WEBPACK_IMPORTED_MODULE_11__["StargazersPipe"],
                _pipes_limitLengthString_pipe__WEBPACK_IMPORTED_MODULE_12__["LimitLength"],
                _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_13__["MylistComponent"],
                _repository_display_repository_display_component__WEBPACK_IMPORTED_MODULE_14__["RepositoryDisplayComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_rest_datasource__WEBPACK_IMPORTED_MODULE_8__["RestDataSource"], _repository_model__WEBPACK_IMPORTED_MODULE_9__["RepositoryModel"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _display_view_service__WEBPACK_IMPORTED_MODULE_10__["DisplayView"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
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



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
        this.isfirstNavigation = true;
    }
    AuthGuard.prototype.canActivate = function (route) {
        if (this.isfirstNavigation) {
            this.isfirstNavigation = false;
            if (route.component !== _search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]) {
                this.router.navigateByUrl('/search');
                return false;
            }
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/display-view.service.ts":
/*!*****************************************!*\
  !*** ./src/app/display-view.service.ts ***!
  \*****************************************/
/*! exports provided: DisplayView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayView", function() { return DisplayView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DisplayView = /** @class */ (function () {
    function DisplayView() {
        this.VIEWS = {
            TILE: 'TILE',
            LINE: 'LINE'
        };
        this.activeView = this.VIEWS.LINE;
    }
    DisplayView.prototype.changeView = function (view) {
        this.activeView = view;
    };
    Object.defineProperty(DisplayView.prototype, "view", {
        get: function () {
            return this.activeView;
        },
        enumerable: true,
        configurable: true
    });
    DisplayView = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DisplayView);
    return DisplayView;
}());



/***/ }),

/***/ "./src/app/models/selector.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/selector.model.ts ***!
  \******************************************/
/*! exports provided: SelectorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorModel", function() { return SelectorModel; });
var SelectorModel = /** @class */ (function () {
    function SelectorModel(dataArray) {
        this.dataArray = dataArray;
        this.selected = this.dataArray[0];
    }
    SelectorModel.prototype.toggleListView = function (list) {
        if (!this.$list) {
            this.$list = list;
        }
        list.classList.toggle('hidden');
    };
    SelectorModel.prototype.selectItem = function (type, list) {
        if (!this.$list) {
            this.$list = list;
        }
        ;
        this.selected = type;
        this.toggleListView(this.$list);
    };
    SelectorModel.prototype.getSelectedValue = function () {
        return this.selected;
    };
    SelectorModel.prototype.getDataArray = function () {
        return this.dataArray;
    };
    return SelectorModel;
}());



/***/ }),

/***/ "./src/app/mylist/mylist.component.css":
/*!*********************************************!*\
  !*** ./src/app/mylist/mylist.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-list {\n  font-family: 'Roboto', sans-serif;\n}\n\n.my-list__header {\n  font-size: 36px;\n  padding: 35px 0 20px;\n}"

/***/ }),

/***/ "./src/app/mylist/mylist.component.html":
/*!**********************************************!*\
  !*** ./src/app/mylist/mylist.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-list\">\n  <h1 class=\"my-list__header\">My List</h1>\n  <app-repository-display></app-repository-display>\n</div>"

/***/ }),

/***/ "./src/app/mylist/mylist.component.ts":
/*!********************************************!*\
  !*** ./src/app/mylist/mylist.component.ts ***!
  \********************************************/
/*! exports provided: MylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistComponent", function() { return MylistComponent; });
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

var MylistComponent = /** @class */ (function () {
    function MylistComponent() {
    }
    MylistComponent.prototype.ngOnInit = function () {
    };
    MylistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mylist',
            template: __webpack_require__(/*! ./mylist.component.html */ "./src/app/mylist/mylist.component.html"),
            styles: [__webpack_require__(/*! ./mylist.component.css */ "./src/app/mylist/mylist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MylistComponent);
    return MylistComponent;
}());



/***/ }),

/***/ "./src/app/pipes/limitLengthString.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/limitLengthString.pipe.ts ***!
  \*************************************************/
/*! exports provided: LimitLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitLength", function() { return LimitLength; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LimitLength = /** @class */ (function () {
    function LimitLength() {
    }
    LimitLength.prototype.transform = function (value) {
        var result = value;
        if (!result)
            return result;
        if (result.length > 500) {
            result = result.slice(0, 500) + ' ...';
        }
        return result;
    };
    LimitLength = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'limitLength' })
    ], LimitLength);
    return LimitLength;
}());



/***/ }),

/***/ "./src/app/pipes/stargazers.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/stargazers.pipe.ts ***!
  \******************************************/
/*! exports provided: StargazersPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StargazersPipe", function() { return StargazersPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StargazersPipe = /** @class */ (function () {
    function StargazersPipe() {
    }
    StargazersPipe.prototype.transform = function (value) {
        var numberString = String(value);
        if (numberString.length > 3) {
            var numberArray = numberString.split('');
            numberArray.splice(numberArray.length - 3, 3);
            return numberArray.join('') + "k";
        }
        return String(value);
    };
    StargazersPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'stargazers' })
    ], StargazersPipe);
    return StargazersPipe;
}());



/***/ }),

/***/ "./src/app/repository-display/repository-display.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/repository-display/repository-display.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".viewFilter {\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: 30px;\n}\n\n.viewFilter__tile,\n.viewFilter__line {\n  border: none;\n  padding: 0;\n  margin: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.viewFilter__tile {\n  margin-right: 10px;\n}\n\n.viewFilter button.active path {\n  fill: #3C4146;\n}\n\n.viewFilter button.active line {\n  stroke: #3C4146;\n}\n\n.repositories {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.repositories.repository_tile {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.repository {\n  display: flex;\n  flex: 0 0 100%;\n  max-width: 100%;\n  position: relative;\n  border-top: 1px solid #E1E4E8;\n  padding: 30px 120px 30px 0;\n}\n\n.repositories.repository_tile .repository {\n  flex: 0 1 48%;\n  max-width: 48%;\n  margin-right: 4%;\n  margin-bottom: 30px;\n  padding: 85px 30px 30px;\n  border: 1px solid #E0E0E0;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);\n}\n\n.repositories.repository_tile .repository__text {\n  margin-left: 0;\n}\n\n.repositories.repository_tile .repository__language {\n  top: 25px;\n  left: 30px;\n}\n\n.repositories.repository_tile .repository__stars {\n  top: 20px;\n  right: 30px;\n}\n\n.repositories.repository_tile .repository__checkbox {\n  position: absolute;\n  top: calc(100% - 70px);\n  left: 0;\n  background-color: transparent;\n  width: 100%;\n  text-align: center;\n  height: auto;\n  border: none;\n  outline: none;\n  cursor: default;\n}\n\n.repositories.repository_tile .repository__topics {\n  padding-bottom: 90px;\n}\n\n.repository__checkbox button {\n  line-height: 36px;\n  padding: 0 25px;\n  border: none;\n  background-color: #0366D6;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: #fff;\n  cursor: pointer;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);\n}\n\n.repositories.repository_tile .repository:nth-child(2n) {\n  margin-right: 0;\n}\n\n.repository__stars {\n  position: absolute;\n  top: 15px;\n  right: 30px;\n  padding-left: 33px;\n  font-size: 18px;\n  line-height: 30px;\n  background: url(/assets/star.svg) no-repeat left top;\n}\n\n.repository__language {\n  position: absolute;\n  right: 30px;\n  bottom: 15px;\n  font-size: 14px;\n  color: #999999;\n}\n\n.repository__checkbox {\n  flex: 0 0 auto;\n  box-sizing: content-box;\n  position: relative;\n  top: 3px;\n  width: 10px;\n  height: 10px;\n  border: 4px solid #fff;\n  outline: 1px solid #0366D6;\n  background-color: #fff;\n  cursor: pointer;\n}\n\n.repository__checkbox.checked {\n  background-color: #0366D6;\n}\n\n.repositories.repository_tile .repository__checkbox.checked button {\n  background-color: #EB5757;\n}\n\n.repository__text {\n  flex: 0 0 100%;\n  margin-left: 15px;\n  max-width: 100%;\n}\n\n.repository__name {\n  font-size: 22px;\n  color: #0366D6;\n  font-weight: bold;\n  padding-bottom: 4px;\n  word-wrap: break-word;\n}\n\n.repository__description {\n  font-size: 14px;\n  padding-bottom: 25px;\n  word-wrap: break-word;\n}\n\n.repository__topics {\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n\n.repository__topics span {\n  font-size: 12px;\n  padding: 0 10px;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  line-height: 27px;\n  border-radius: 13px;\n  background-color: #F1F8FE;\n}\n\n.repositories-not-found {\n  text-align: center;\n  background: url(/assets/github-ic.svg) no-repeat center center;\n  min-height: 200px;\n  margin-bottom: 20px;\n}\n\n.repositories-not-found h1 {\n  padding-top: 60px;\n  color: #0366D6;\n  font-size: 36px;\n  line-height: 1.3;\n  font-weight: bold;\n}\n\n.repositories-not-found p {\n  font-size: 24px;\n}"

/***/ }),

/***/ "./src/app/repository-display/repository-display.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/repository-display/repository-display.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"viewFilter\">\n  <button class=\"viewFilter__tile\" (click)='changeView(views.TILE)' [class.active]='view === views.TILE'>\n    <svg  width=\"32\" height=\"31\" viewBox=\"0 0 32 31\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M0 0H14V14H0V0Z\" fill=\"#E0E0E0\"/>\n      <path d=\"M18 0H32V14H18V0Z\" fill=\"#E0E0E0\"/>\n      <path d=\"M0 17H14V31H0V17Z\" fill=\"#E0E0E0\"/>\n      <path d=\"M18 17H32V31H18V17Z\" fill=\"#E0E0E0\"/>\n    </svg>\n  </button>\n  <button class=\"viewFilter__line\" (click)='changeView(views.LINE)' [class.active]='view === views.LINE'>\n    <svg width=\"33\" height=\"29\" viewBox=\"0 0 33 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <line y1=\"2\" x2=\"33\" y2=\"2\" stroke=\"#E0E0E0\" stroke-width=\"4\"/>\n      <line y1=\"15\" x2=\"33\" y2=\"15\" stroke=\"#E0E0E0\" stroke-width=\"4\"/>\n      <line y1=\"27\" x2=\"33\" y2=\"27\" stroke=\"#E0E0E0\" stroke-width=\"4\"/>\n    </svg>\n  </button>\n</div>\n\n<div class=\"repositories\" [ngClass]='{ \"repository_tile\": view === views.TILE }' *ngIf='getRepositories().length !== 0'>\n  <div class=\"repository\" *ngFor='let repository of getRepositories()'>\n    <span class=\"repository__stars\">{{repository.stargazers_count | stargazers}}</span>\n    <span class=\"repository__language\">{{repository.language}}</span>\n    <div class=\"repository__checkbox\" (click)='toggleRepository(repository)' [class.checked]='isSavedRepository(repository)'>\n      <button *ngIf=\"view === views.TILE\">{{!isSavedRepository(repository) ? 'ADD TO LIST' : 'REMOVE FROM LIST'}}</button>\n    </div>\n    <div class=\"repository__text\">\n      <h3 class=\"repository__name\">{{repository.full_name}}</h3>\n      <p class=\"repository__description\">{{repository.description | limitLength}}</p>\n      <div class=\"repository__topics\">\n        <span *ngFor='let topic of repository.topics'>{{topic}}</span>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"repositories-not-found\" *ngIf='!isResultFound()'>\n  <h1>{{url==='/search'? 'NO RESULTS FOUND' : 'NO REPOSITORIES ADDED'}}</h1>\n  <p *ngIf='url===\"/search\"'>select other parameters and try again</p>\n</div>\n"

/***/ }),

/***/ "./src/app/repository-display/repository-display.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/repository-display/repository-display.component.ts ***!
  \********************************************************************/
/*! exports provided: RepositoryDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryDisplayComponent", function() { return RepositoryDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repository_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository.model */ "./src/app/repository.model.ts");
/* harmony import */ var _display_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display-view.service */ "./src/app/display-view.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RepositoryDisplayComponent = /** @class */ (function () {
    function RepositoryDisplayComponent(repository, displayView, router) {
        this.repository = repository;
        this.displayView = displayView;
        this.router = router;
        this.views = this.displayView.VIEWS;
    }
    RepositoryDisplayComponent.prototype.ngOnInit = function () {
    };
    RepositoryDisplayComponent.prototype.getRepositories = function () {
        return this.repository.getData();
    };
    RepositoryDisplayComponent.prototype.toggleRepository = function (repository) {
        this.repository.toggleRepository(repository);
    };
    RepositoryDisplayComponent.prototype.isSavedRepository = function (repository) {
        var result = this.repository.searchRepository(repository);
        return !(result === -1);
    };
    Object.defineProperty(RepositoryDisplayComponent.prototype, "view", {
        get: function () {
            return this.displayView.view;
        },
        enumerable: true,
        configurable: true
    });
    RepositoryDisplayComponent.prototype.changeView = function (view) {
        this.displayView.changeView(view);
    };
    RepositoryDisplayComponent.prototype.isResultFound = function () {
        if (this.repository.isDataReceived) {
            if (this.getRepositories().length === 0)
                return false;
            return true;
        }
        return true;
    };
    Object.defineProperty(RepositoryDisplayComponent.prototype, "url", {
        get: function () {
            return this.router.url;
        },
        enumerable: true,
        configurable: true
    });
    RepositoryDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-repository-display',
            template: __webpack_require__(/*! ./repository-display.component.html */ "./src/app/repository-display/repository-display.component.html"),
            styles: [__webpack_require__(/*! ./repository-display.component.css */ "./src/app/repository-display/repository-display.component.css")]
        }),
        __metadata("design:paramtypes", [_repository_model__WEBPACK_IMPORTED_MODULE_1__["RepositoryModel"], _display_view_service__WEBPACK_IMPORTED_MODULE_2__["DisplayView"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RepositoryDisplayComponent);
    return RepositoryDisplayComponent;
}());



/***/ }),

/***/ "./src/app/repository.model.ts":
/*!*************************************!*\
  !*** ./src/app/repository.model.ts ***!
  \*************************************/
/*! exports provided: RepositoryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryModel", function() { return RepositoryModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest.datasource */ "./src/app/rest.datasource.ts");
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



var RepositoryModel = /** @class */ (function () {
    function RepositoryModel(datasource, router) {
        this.datasource = datasource;
        this.router = router;
        this.data = [];
        this.isDataReceived = false;
        this.savedRepository = [];
    }
    RepositoryModel.prototype.sendRequest = function (type, language, keywords) {
        var _this = this;
        this.isDataReceived = false;
        var url = this.datasource.generateUrl(type, language, keywords);
        this.datasource.getData(url).subscribe(function (response) {
            _this.isDataReceived = true;
            _this.data = response.items;
        }, function (error) { return console.log(error); });
    };
    RepositoryModel.prototype.getData = function () {
        if (this.router.url === '/my-list') {
            return this.savedRepository;
        }
        return this.data;
    };
    RepositoryModel.prototype.toggleRepository = function (repository) {
        var index = this.searchRepository(repository);
        if (index !== -1) {
            this.savedRepository.splice(index, 1);
        }
        else {
            this.savedRepository.push(repository);
        }
    };
    RepositoryModel.prototype.searchRepository = function (repository) {
        var indexItem = -1;
        this.savedRepository.forEach(function (item, index) {
            if (item.id === repository.id)
                indexItem = index;
        });
        return indexItem;
    };
    RepositoryModel = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_rest_datasource__WEBPACK_IMPORTED_MODULE_1__["RestDataSource"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RepositoryModel);
    return RepositoryModel;
}());



/***/ }),

/***/ "./src/app/rest.datasource.ts":
/*!************************************!*\
  !*** ./src/app/rest.datasource.ts ***!
  \************************************/
/*! exports provided: RestDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestDataSource", function() { return RestDataSource; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestDataSource = /** @class */ (function () {
    function RestDataSource(http) {
        this.http = http;
        this.baseUrl = 'https://api.github.com/search/';
        this.headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                Accept: "application/vnd.github.mercy-preview+json",
            })
        };
    }
    RestDataSource.prototype.generateUrl = function (type, language, keywords) {
        var url = "" + this.baseUrl + type.toLowerCase() + "?q=" + keywords + "+language:" + language;
        return url;
    };
    RestDataSource.prototype.getData = function (url) {
        return this.http.get(url, this.headers);
    };
    RestDataSource = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], RestDataSource);
    return RestDataSource;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  font-family: 'Roboto', sans-serif;\n}\n\n.searchForm {\n  display: flex;\n  align-items: center;\n  padding: 25px 0;\n}\n\n.select-wrapper {\n  position: relative;\n  flex: 1 0 auto;\n  display: inline-block;\n  font-size: 14px;\n  cursor: pointer;\n  margin-right: 25px;\n}\n\n.select-wrapper .select {\n  position: relative;\n  border-bottom: 1px solid #0366D6;\n  padding: 7px 15px 7px 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n}\n\n.select-wrapper .select::after {\n  content: '';\n  position: absolute;\n  right: 0;\n  top: 50%;\n  margin-top: -4px;\n  width: 0;\n  height: 0;\n  border-top: 9px solid #000;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n\n.select-wrapper .options {\n  min-width: 100%;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  background-color: #F1F8FE;\n  z-index: 99;\n}\n\n.select-wrapper .options.hidden {\n  display: none;\n}\n\n.select-wrapper .options li {\n  padding: 3px 7px;\n  border-bottom: 1px solid #E1E4E8;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n}\n\n.select-wrapper .options li:last-child {\n  border-bottom: 0;\n}\n\n.select-wrapper .options li:hover {\n  background-color: #E1E4E8;\n}\n\n.searchFrom__keywords {\n  position: relative;\n  flex: 1 1 auto;\n  margin-right: 25px;\n}\n\n.searchFrom__keywords input {\n  border: none;\n  width: 100%;\n  border-bottom: 2px solid #0366D6;\n  padding: 6px 15px 6px 0;\n  font-size: 14px;\n  font-family: 'Roboto', sans-serif;\n}\n\n.searchFrom__keywords span {\n  position: absolute;\n  top: -12px;\n  left: 0;\n  color: #0366D6;\n  font-size: 12px;\n  font-family: 'Roboto', sans-serif;\n}\n\n.searchForm button[type='submit'] {\n  border: none;\n  line-height: 36px;\n  padding: 0 36px;\n  color: #fff;\n  background-color: #0366D6;\n  text-transform: uppercase;\n  font-family: 'Roboto', sans-serif;\n  cursor: pointer;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);\n}\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\n  <form class=\"searchForm\" novalidate (submit)='sendRequest(keyword)'>\n\n    <div  class=\"select-wrapper\">\n      <div class=\"select\" (click)='selectorOfTypes.toggleListView(typesList)'>\n        {{selectorOfTypes.getSelectedValue()}}\n      </div>\n      <ul class=\"options hidden\" #typesList>\n        <li *ngFor='let type of selectorOfTypes.getDataArray()' \n            (click)='selectorOfTypes.selectItem(type, typesList)'>{{type}}</li>\n      </ul>\n    </div>\n\n    <div  class=\"select-wrapper\">\n      <div class=\"select\" (click)='selectorOfLanguages.toggleListView(list)'>{{selectorOfLanguages.getSelectedValue()}}</div>\n      <ul class=\"options hidden\" #list>\n        <li *ngFor='let language of selectorOfLanguages.getDataArray()'\n            (click)='selectorOfLanguages.selectItem(language, list)'>{{language}}</li>\n      </ul>\n    </div>\n    <div class=\"searchFrom__keywords\">\n      <span [style.color]='getValidation(keyword)'>Type here for search</span>\n      <input type=\"text\" required\n      id=\"keywords\" name=\"keywords\" #keyword='ngModel' [(ngModel)]='keywords'\n      [style.borderColor]='getValidation(keyword)'>\n    </div>\n    <button type=\"submit\">search</button>\n  </form>\n\n  <app-repository-display></app-repository-display>\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_selector_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/selector.model */ "./src/app/models/selector.model.ts");
/* harmony import */ var _repository_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository.model */ "./src/app/repository.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(repository) {
        this.repository = repository;
        this.keywords = '';
        this.isFormSubmit = false;
        this.selectorOfTypes = new _models_selector_model__WEBPACK_IMPORTED_MODULE_1__["SelectorModel"](['Repositories']);
        this.selectorOfLanguages = new _models_selector_model__WEBPACK_IMPORTED_MODULE_1__["SelectorModel"](['javascript', 'css', 'html', 'php', 'ruby', 'c++', 'python', 'c#', 'java', 'go', 'haskel']);
    }
    SearchComponent.prototype.sendRequest = function (keyword) {
        this.isFormSubmit = true;
        if (keyword.invalid)
            return;
        this.isFormSubmit = false;
        var type = this.selectorOfTypes.getSelectedValue();
        var language = this.selectorOfLanguages.getSelectedValue();
        this.repository.sendRequest(type, language, this.keywords);
        this.keywords = '';
    };
    SearchComponent.prototype.getRepositories = function () {
        return this.repository.getData();
    };
    SearchComponent.prototype.getValidation = function (keywords) {
        if (this.isFormSubmit && keywords.invalid)
            return 'red';
        return '';
    };
    SearchComponent.prototype.ngOnInit = function () { };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_repository_model__WEBPACK_IMPORTED_MODULE_2__["RepositoryModel"]])
    ], SearchComponent);
    return SearchComponent;
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
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! /home/travis/build/CepBoJIk/githubReposetorySeach/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map