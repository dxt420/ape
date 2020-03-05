(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["places-listing-places-listing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/places/listing/places-listing.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/places/listing/places-listing.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-header text-center>\n    <ion-toolbar  color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"app/home\"></ion-back-button>\n          </ion-buttons>\n      <ion-title >\n        <img style=\"padding-right: 56px;\" alt=\"logo\" height=\"40\"   src=\"./assets/images/logo1.png\" > \n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"listing?.items\">\n    <div class=\"listing-item\" *ngFor=\"let item of listing.items\">\n      <ion-row class=\"image-row\">\n        <ion-col size=\"12\">\n          <app-image-shell [mode]=\"'cover'\" class=\"add-overlay item-image\" [src]=\"item.image\" (click)=\"openDetailsWithState(item)\">\n            <app-aspect-ratio [ratio]=\"{w:3, h:2}\">\n              <div class=\"content-inside-item-image\">\n                <div class=\"item-icon\">\n                  <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                    <app-image-shell [src]=\"item.icon\" class=\"icon-image\"></app-image-shell>\n                  </app-aspect-ratio>\n                </div>\n                <div class=\"item-cta\">\n                  <span>Explore</span>\n                  <ion-icon class=\"cta-icon\" name=\"arrow-round-forward\"></ion-icon>\n                </div>\n              </div>\n            </app-aspect-ratio>\n          </app-image-shell>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"info-row\">\n        <ion-col class=\"main-info-col\">\n          <h3 class=\"item-name\">\n            <a class=\"name-anchor\" [routerLink]=\"['/app/categories/travel/', item.slug]\">\n              <app-text-shell animation=\"bouncing\" [data]=\"(item?.name && item?.category) ? (item.name) : (item.name)\"></app-text-shell>\n            </a>\n          </h3>\n          <p class=\"item-description\">\n            <app-text-shell animation=\"bouncing\" [data]=\"item.description\" lines=\"3\"></app-text-shell>\n          </p>\n          <p class=\"item-address\">\n            <app-text-shell animation=\"bouncing\" [data]=\"item.address\"></app-text-shell>\n          </p>\n        </ion-col>\n      </ion-row>\n      \n    </div>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/places/listing/places-listing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/places/listing/places-listing.module.ts ***!
  \*********************************************************/
/*! exports provided: PlacesListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesListingPageModule", function() { return PlacesListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _places_listing_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./places-listing.page */ "./src/app/places/listing/places-listing.page.ts");
/* harmony import */ var _places_listing_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./places-listing.resolver */ "./src/app/places/listing/places-listing.resolver.ts");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../places.service */ "./src/app/places/places.service.ts");











var routes = [
    {
        path: '',
        component: _places_listing_page__WEBPACK_IMPORTED_MODULE_8__["PlacesListingPage"],
        resolve: {
            data: _places_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["PlacesListingResolver"]
        }
    }
];
var PlacesListingPageModule = /** @class */ (function () {
    function PlacesListingPageModule() {
    }
    PlacesListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            declarations: [_places_listing_page__WEBPACK_IMPORTED_MODULE_8__["PlacesListingPage"]],
            providers: [
                _places_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["PlacesListingResolver"],
                _places_service__WEBPACK_IMPORTED_MODULE_10__["PlacesService"]
            ]
        })
    ], PlacesListingPageModule);
    return PlacesListingPageModule;
}());



/***/ }),

/***/ "./src/app/places/listing/places-listing.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/places/listing/places-listing.page.ts ***!
  \*******************************************************/
/*! exports provided: PlacesListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesListingPage", function() { return PlacesListingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PlacesListingPage = /** @class */ (function () {
    function PlacesListingPage(route, router) {
        this.route = route;
        this.router = router;
    }
    Object.defineProperty(PlacesListingPage.prototype, "isShell", {
        get: function () {
            return (this.listing && this.listing.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    PlacesListingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (resolvedRouteData) {
            var listingDataStore = resolvedRouteData['data'];
            listingDataStore.state.subscribe(function (state) {
                _this.listing = state;
            }, function (error) { });
        }, function (error) { });
    };
    PlacesListingPage.prototype.openDetailsWithState = function (a) {
        var navigationExtras = {
            state: {
                item: a
            }
        };
        this.router.navigate(['/app/home/places/' + a.slug], navigationExtras);
    };
    PlacesListingPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlacesListingPage.prototype, "isShell", null);
    PlacesListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-places-listing',
            template: __webpack_require__(/*! raw-loader!./places-listing.page.html */ "./node_modules/raw-loader/index.js!./src/app/places/listing/places-listing.page.html"),
            styles: [__webpack_require__(/*! ./styles/places-listing.page.scss */ "./src/app/places/listing/styles/places-listing.page.scss"), __webpack_require__(/*! ./styles/places-listing.shell.scss */ "./src/app/places/listing/styles/places-listing.shell.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlacesListingPage);
    return PlacesListingPage;
}());



/***/ }),

/***/ "./src/app/places/listing/places-listing.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/app/places/listing/places-listing.resolver.ts ***!
  \***********************************************************/
/*! exports provided: PlacesListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesListingResolver", function() { return PlacesListingResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ "./src/app/places/places.service.ts");



var PlacesListingResolver = /** @class */ (function () {
    function PlacesListingResolver(placesService) {
        this.placesService = placesService;
    }
    PlacesListingResolver.prototype.resolve = function () {
        var dataSource = this.placesService.getListingDataSource();
        var dataStore = this.placesService.getListingStore(dataSource);
        return dataStore;
    };
    PlacesListingResolver.ctorParameters = function () { return [
        { type: _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"] }
    ]; };
    PlacesListingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"]])
    ], PlacesListingResolver);
    return PlacesListingResolver;
}());



/***/ }),

/***/ "./src/app/places/listing/styles/places-listing.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/places/listing/styles/places-listing.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-color: #00AFFF;\n}\n\n.listing-item {\n  padding: 0px 0px var(--page-margin);\n  background-color: var(--page-background);\n  border-bottom: calc(var(--page-margin) / 2) solid var(--page-color);\n}\n\n.listing-item .image-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.listing-item .image-row .item-image {\n  cursor: pointer;\n}\n\n.listing-item .image-row .item-image:focus {\n  outline: none;\n}\n\n.listing-item .image-row .content-inside-item-image {\n  padding: 0px 12%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.listing-item .image-row .content-inside-item-image .item-icon {\n  width: 54px;\n  align-self: center;\n  margin-bottom: 24px;\n}\n\n.listing-item .image-row .content-inside-item-image .item-cta {\n  margin: 0px auto;\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin));\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  color: var(--ion-color-light);\n  display: flex;\n  align-items: center;\n  background-color: var(--page-color);\n  border-radius: var(--app-fair-radius);\n}\n\n.listing-item .image-row .content-inside-item-image .item-cta .cta-icon {\n  font-size: 26px;\n  margin-left: calc(var(--page-margin) / 2);\n}\n\n.listing-item .info-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.listing-item .info-row .main-info-col {\n  padding-right: calc(var(--page-margin) / 2);\n}\n\n.listing-item .info-row .item-name {\n  margin: 0px 0px var(--page-margin);\n  text-transform: capitalize;\n  font-size: 16px;\n}\n\n.listing-item .info-row .item-name .name-anchor {\n  color: var(--ion-color-dark);\n  display: block;\n  text-decoration: none;\n}\n\n.listing-item .info-row .item-description {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  color: var(--ion-color-dark-shade);\n  font-size: 14px;\n  line-height: 1.3;\n}\n\n.listing-item .info-row .item-address {\n  margin: 0px;\n  color: var(--ion-color-dark-tint);\n  font-size: 12px;\n}\n\n.listing-item .stats-row {\n  --ion-grid-column-padding: 0px;\n  padding: 0px var(--page-margin);\n  justify-content: flex-end;\n}\n\n.listing-item .stats-row .stats-icon {\n  font-size: 24px;\n}\n\n.listing-item .stats-row .item-rating {\n  display: inline-flex;\n  text-align: center;\n  justify-content: flex-end;\n  margin-right: 10px;\n}\n\n.listing-item .stats-row .item-rating .rating-value {\n  font-size: 16px;\n  margin-right: 5px;\n  margin: auto;\n}\n\n.listing-item .stats-row .item-reviews {\n  display: inline-flex;\n  text-align: center;\n  justify-content: flex-end;\n}\n\n.listing-item .stats-row .item-reviews .reviews-count {\n  font-size: 16px;\n  margin-right: 5px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL2xpc3Rpbmcvc3R5bGVzL0M6XFxVc2Vyc1xcR2FsbCdlICBJbnRuJ2xcXERlc2t0b3BcXGFwZS9zcmNcXGFwcFxccGxhY2VzXFxsaXN0aW5nXFxzdHlsZXNcXHBsYWNlcy1saXN0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGxhY2VzL2xpc3Rpbmcvc3R5bGVzL3BsYWNlcy1saXN0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFFQSxxQkFBQTtBQ0ZGOztBRE1BO0VBQ0UsbUNBQUE7RUFDQSx3Q0FBQTtFQUNBLG1FQUFBO0FDSEY7O0FES0U7RUFDRSw4QkFBQTtBQ0hKOztBREtJO0VBQ0UsZUFBQTtBQ0hOOztBREtNO0VBQ0UsYUFBQTtBQ0hSOztBRE9JO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNMTjs7QURPTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDTFI7O0FEUU07RUFDRSxnQkFBQTtFQUNBLDhEQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtBQ05SOztBRFFRO0VBQ0UsZUFBQTtFQUNBLHlDQUFBO0FDTlY7O0FEWUU7RUFDRSw4QkFBQTtFQUVBLDJCQUFBO0VBQ0EsNENBQUE7QUNYSjs7QURhSTtFQUNFLDJDQUFBO0FDWE47O0FEY0k7RUFDRSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ1pOOztBRGNNO0VBQ0UsNEJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNaUjs7QURnQkk7RUFDRSw0Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDZE47O0FEaUJJO0VBQ0UsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQ2ZOOztBRG1CRTtFQUNFLDhCQUFBO0VBRUEsK0JBQUE7RUFDQSx5QkFBQTtBQ2xCSjs7QURvQkk7RUFDRSxlQUFBO0FDbEJOOztBRHFCSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDbkJOOztBRHFCTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNuQlI7O0FEdUJJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDckJOOztBRHVCTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNyQlIiLCJmaWxlIjoic3JjL2FwcC9wbGFjZXMvbGlzdGluZy9zdHlsZXMvcGxhY2VzLWxpc3RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgLS1wYWdlLWNvbG9yOiAjMDBBRkZGO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5saXN0aW5nLWl0ZW0ge1xuICBwYWRkaW5nOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBzb2xpZCB2YXIoLS1wYWdlLWNvbG9yKTtcblxuICAuaW1hZ2Utcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAuaXRlbS1pbWFnZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50LWluc2lkZS1pdGVtLWltYWdlIHtcbiAgICAgIHBhZGRpbmc6IDBweCAxMiU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAuaXRlbS1pY29uIHtcbiAgICAgICAgd2lkdGg6IDU0cHg7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgIH1cblxuICAgICAgLml0ZW0tY3RhIHtcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG5cbiAgICAgICAgLmN0YS1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaW5mby1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgIC5tYWluLWluZm8tY29sIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgfVxuXG4gICAgLml0ZW0tbmFtZSB7XG4gICAgICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICAgIC5uYW1lLWFuY2hvciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICB9XG5cbiAgICAuaXRlbS1hZGRyZXNzIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5zdGF0cy1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgIC5zdGF0cy1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICAuaXRlbS1yYXRpbmcge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgICAucmF0aW5nLXZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLXJldmlld3Mge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAucmV2aWV3cy1jb3VudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLWNvbG9yOiAjMDBBRkZGO1xufVxuXG4ubGlzdGluZy1pdGVtIHtcbiAgcGFkZGluZzogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIGJvcmRlci1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgc29saWQgdmFyKC0tcGFnZS1jb2xvcik7XG59XG4ubGlzdGluZy1pdGVtIC5pbWFnZS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG59XG4ubGlzdGluZy1pdGVtIC5pbWFnZS1yb3cgLml0ZW0taW1hZ2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGlzdGluZy1pdGVtIC5pbWFnZS1yb3cgLml0ZW0taW1hZ2U6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmxpc3RpbmctaXRlbSAuaW1hZ2Utcm93IC5jb250ZW50LWluc2lkZS1pdGVtLWltYWdlIHtcbiAgcGFkZGluZzogMHB4IDEyJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5saXN0aW5nLWl0ZW0gLmltYWdlLXJvdyAuY29udGVudC1pbnNpZGUtaXRlbS1pbWFnZSAuaXRlbS1pY29uIHtcbiAgd2lkdGg6IDU0cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmltYWdlLXJvdyAuY29udGVudC1pbnNpZGUtaXRlbS1pbWFnZSAuaXRlbS1jdGEge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmltYWdlLXJvdyAuY29udGVudC1pbnNpZGUtaXRlbS1pbWFnZSAuaXRlbS1jdGEgLmN0YS1pY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cgLm1haW4taW5mby1jb2wge1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cgLml0ZW0tbmFtZSB7XG4gIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuaXRlbS1uYW1lIC5uYW1lLWFuY2hvciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuaXRlbS1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuaXRlbS1hZGRyZXNzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmxpc3RpbmctaXRlbSAuc3RhdHMtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmxpc3RpbmctaXRlbSAuc3RhdHMtcm93IC5zdGF0cy1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmxpc3RpbmctaXRlbSAuc3RhdHMtcm93IC5pdGVtLXJhdGluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5saXN0aW5nLWl0ZW0gLnN0YXRzLXJvdyAuaXRlbS1yYXRpbmcgLnJhdGluZy12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5saXN0aW5nLWl0ZW0gLnN0YXRzLXJvdyAuaXRlbS1yZXZpZXdzIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5saXN0aW5nLWl0ZW0gLnN0YXRzLXJvdyAuaXRlbS1yZXZpZXdzIC5yZXZpZXdzLWNvdW50IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/places/listing/styles/places-listing.shell.scss":
/*!*****************************************************************!*\
  !*** ./src/app/places/listing/styles/places-listing.shell.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #00AFFF;\n  --shell-color-rgb: 0,175,255;\n}\n\napp-image-shell.item-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .60);\n}\n\napp-image-shell.icon-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .15);\n}\n\n.item-name app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 70%;\n}\n\n.item-name app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.item-description > app-text-shell {\n  --text-shell-line-height: 14px;\n}\n\n.item-address > app-text-shell {\n  --text-shell-line-height: 12px;\n  max-width: 60%;\n}\n\n.item-address > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.rating-value > app-text-shell {\n  --text-shell-line-height: 16px;\n  min-width: 30px;\n}\n\n.reviews-count > app-text-shell {\n  --text-shell-line-height: 16px;\n  min-width: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL2xpc3Rpbmcvc3R5bGVzL0M6XFxVc2Vyc1xcR2FsbCdlICBJbnRuJ2xcXERlc2t0b3BcXGFwZS9zcmNcXGFwcFxccGxhY2VzXFxsaXN0aW5nXFxzdHlsZXNcXHBsYWNlcy1saXN0aW5nLnNoZWxsLnNjc3MiLCJzcmMvYXBwL3BsYWNlcy9saXN0aW5nL3N0eWxlcy9wbGFjZXMtbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQ0RGOztBRFdBO0VBQ0UsbUVBQUE7RUFDQSxzRUFBQTtBQ1JGOztBRFdBO0VBQ0UsbUVBQUE7QUNSRjs7QURXQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFVFO0VBQ0UsZ0JBQUE7QUNSSjs7QURZQTtFQUNFLDhCQUFBO0FDVEY7O0FEWUE7RUFDRSw4QkFBQTtFQUNBLGNBQUE7QUNURjs7QURXRTtFQUNFLGdCQUFBO0FDVEo7O0FEYUE7RUFDRSw4QkFBQTtFQUNBLGVBQUE7QUNWRjs7QURhQTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtBQ1ZGIiwiZmlsZSI6InNyYy9hcHAvcGxhY2VzL2xpc3Rpbmcvc3R5bGVzL3BsYWNlcy1saXN0aW5nLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogIzAwQUZGRjtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDAsMTc1LDI1NTtcbn1cblxuLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2Vcbjpob3N0KC5pcy1zaGVsbCkge1xuICAvLyBpb24tY29udGVudCB7XG4gIC8vICAgb3BhY2l0eTogMC44O1xuICAvLyB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5pdGVtLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjYwKTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmljb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xufVxuXG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDcwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG5cbi5pdGVtLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5pdGVtLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbiAgbWF4LXdpZHRoOiA2MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgfVxufVxuXG4ucmF0aW5nLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cblxuLnJldmlld3MtY291bnQgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuIiwiOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjMDBBRkZGO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMCwxNzUsMjU1O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuaXRlbS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC42MCk7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5pY29uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbn1cblxuLml0ZW0tbmFtZSBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA3MCU7XG59XG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbn1cblxuLml0ZW0tZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLml0ZW0tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xuICBtYXgtd2lkdGg6IDYwJTtcbn1cbi5pdGVtLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogdW5zZXQ7XG59XG5cbi5yYXRpbmctdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuXG4ucmV2aWV3cy1jb3VudCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG59Il19 */"

/***/ })

}]);
//# sourceMappingURL=places-listing-places-listing-module-es5.js.map