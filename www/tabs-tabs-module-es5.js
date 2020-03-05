(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <ion-tabs >\n  <ion-tab-bar color=\"dark\" slot=\"bottom\">\n      <ion-tab-button tab=\"home\">\n          <ion-icon name=\"home\"></ion-icon>\n          <ion-label class=\"tab-title\">Home</ion-label>\n        </ion-tab-button>\n    <ion-tab-button tab=\"user\">\n      <!-- <ion-icon src=\"./assets/sample-icons/tabs/profile.svg\"></ion-icon> -->\n      <ion-icon name=\"paper\"></ion-icon>\n      <ion-label class=\"tab-title\">Featured</ion-label>\n    </ion-tab-button>\n\n    <!-- <ion-tab-button (click)=\"openSideMenu()\">\n      <ion-icon src=\"./assets/sample-icons/tabs/notifications.svg\"></ion-icon>\n      <ion-label class=\"tab-title\">More</ion-label>\n    </ion-tab-button> -->\n  </ion-tab-bar>\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/tabs/styles/tabs.page.scss":
/*!********************************************!*\
  !*** ./src/app/tabs/styles/tabs.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-button {\n  --color: var(--ion-color-dark);\n  --color-selected: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9zdHlsZXMvQzpcXFVzZXJzXFxHYWxsJ2UgIEludG4nbFxcRGVza3RvcFxcYXBlL3NyY1xcYXBwXFx0YWJzXFxzdHlsZXNcXHRhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3N0eWxlcy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUdFLDhCQUFBO0VBQ0EsdUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvc3R5bGVzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG5pb24tdGFiLWJ1dHRvbiB7XG4gIC8vIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAvLyAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLS1jb2xvci1zZWxlY3RlZDogd2hpdGU7XG59XG5cblxuXG5cbiIsImlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWNvbG9yLXNlbGVjdGVkOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var TabsPage = /** @class */ (function () {
    function TabsPage(menu) {
        this.menu = menu;
    }
    TabsPage.prototype.ionViewWillEnter = function () {
        this.menu.enable(true);
    };
    TabsPage.prototype.openSideMenu = function () {
        this.menu.open();
    };
    TabsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./styles/tabs.page.scss */ "./src/app/tabs/styles/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");





var routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(function (m) { return m.HomePageModule; }); }
                    },
                    {
                        path: 'wiki',
                        loadChildren: function () { return Promise.all(/*! import() | wiki-listing-wiki-listing-module */[__webpack_require__.e("common"), __webpack_require__.e("wiki-listing-wiki-listing-module")]).then(__webpack_require__.bind(null, /*! ../wiki/listing/wiki-listing.module */ "./src/app/wiki/listing/wiki-listing.module.ts")).then(function (m) { return m.WikiPageModule; }); }
                    },
                    {
                        path: 'wiki/:wikiId',
                        loadChildren: function () { return Promise.all(/*! import() | wiki-details-wiki-details-module */[__webpack_require__.e("common"), __webpack_require__.e("wiki-details-wiki-details-module")]).then(__webpack_require__.bind(null, /*! ../wiki/details/wiki-details.module */ "./src/app/wiki/details/wiki-details.module.ts")).then(function (m) { return m.WikiDetailsPageModule; }); }
                    },
                    {
                        path: 'places',
                        loadChildren: function () { return Promise.all(/*! import() | places-listing-places-listing-module */[__webpack_require__.e("common"), __webpack_require__.e("places-listing-places-listing-module")]).then(__webpack_require__.bind(null, /*! ../places/listing/places-listing.module */ "./src/app/places/listing/places-listing.module.ts")).then(function (m) { return m.PlacesListingPageModule; }); }
                    },
                    {
                        path: 'places/:placeId',
                        loadChildren: function () { return Promise.all(/*! import() | places-details-places-details-module */[__webpack_require__.e("common"), __webpack_require__.e("places-details-places-details-module")]).then(__webpack_require__.bind(null, /*! ../places/details/places-details.module */ "./src/app/places/details/places-details.module.ts")).then(function (m) { return m.PlacesDetailsPageModule; }); }
                    }
                ]
            },
            {
                path: 'user',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return Promise.all(/*! import() | user-profile-user-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("user-profile-user-profile-module")]).then(__webpack_require__.bind(null, /*! ../user/profile/user-profile.module */ "./src/app/user/profile/user-profile.module.ts")).then(function (m) { return m.UserProfilePageModule; }); }
                    },
                    {
                        path: 'friends',
                        loadChildren: function () { return Promise.all(/*! import() | user-friends-user-friends-module */[__webpack_require__.e("common"), __webpack_require__.e("user-friends-user-friends-module")]).then(__webpack_require__.bind(null, /*! ../user/friends/user-friends.module */ "./src/app/user/friends/user-friends.module.ts")).then(function (m) { return m.UserFriendsPageModule; }); }
                    }
                ]
            }
        ]
    },
    // /app/ redirect
    {
        path: '',
        redirectTo: 'app/home',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: []
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map