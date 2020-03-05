(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wiki-listing-wiki-listing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/wiki/listing/wiki-listing.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wiki/listing/wiki-listing.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n  <ion-toolbar  color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"app/home\"></ion-back-button>\n        </ion-buttons>\n    <ion-title >\n      <img style=\"padding-right: 56px;\" alt=\"logo\" height=\"40\"   src=\"./assets/images/logo1.png\" > \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"dark\">\n  <ion-row class=\"categories-list\">\n   \n  \n    <ion-col class=\"category-item \" size=\"6\"  *ngFor=\"let item of listing.items\">\n      \n      <app-image-shell (click)=\"openDetailsWithState(item)\" [mode]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"item.picture\">\n        \n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n            <!-- <a class=\"category-anchor\"  [routerLink]=\"['/app/home/wiki', item.slug]\"> -->\n              \n          <span class=\"checkbox-subtitle\">{{item.slug}}</span>\n        <!-- </a> -->\n        </app-aspect-ratio>\n      </app-image-shell>\n  \n    </ion-col>\n \n                  \n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/wiki/listing/styles/wiki-listing.page.scss":
/*!************************************************************!*\
  !*** ./src/app/wiki/listing/styles/wiki-listing.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-categories-gutter: calc(var(--page-margin) / 4);\n  --page-category-background: var(--ion-color-medium);\n  --page-category-background-rgb: var(--ion-color-medium-rgb);\n  --page-swiper-pagination-space: 40px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-first-slide-background: #c1ebff;\n  --page-second-slide-background: #a9ebd2;\n  --page-third-slide-background: #f0cbe5;\n  --page-last-slide-background: #eef3ff;\n  --page-vector-decoration-fill: var(--ion-color-light-shade);\n}\n\n.checkbox-title {\n  font-weight: 900;\n  text-transform: uppercase;\n  font-size: 32px;\n  color: var(--ion-color-lightest);\n  text-align: center;\n  word-break: break-word;\n  overflow: visible;\n  position: absolute;\n  width: 70%;\n  left: 15%;\n  top: 80%;\n  transform: translateY(-50%);\n}\n\n.checkbox-subtitle {\n  font-weight: 900;\n  font-size: 18px;\n  color: var(--ion-color-lightest);\n  text-align: center;\n  word-break: break-word;\n  overflow: visible;\n  position: absolute;\n  width: 70%;\n  left: 15%;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.checkbox-subtitle1 {\n  font-weight: 900;\n  font-size: 22px;\n  color: var(--ion-color-lightest);\n  text-align: center;\n  word-break: break-word;\n  overflow: visible;\n  position: absolute;\n  width: 70%;\n  left: 15%;\n  top: 90%;\n  transform: translateY(-50%);\n}\n\n.walkthrough-slides {\n  --bullet-background: var(--ion-color-dark);\n  --bullet-background-active: var(--ion-color-dark);\n  height: 100%;\n}\n\n.walkthrough-slides .slide-inner-row {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  padding-top: var(--app-header-height);\n  border-bottom: var(--page-swiper-pagination-space) solid transparent;\n  background-clip: padding-box;\n  background-color: var(--page-vector-decoration-fill);\n}\n\n.categories-list {\n  --ion-grid-column-padding: var(--page-categories-gutter);\n  height: 100%;\n  align-content: flex-start;\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.categories-list::-webkit-scrollbar {\n  display: none;\n}\n\n.categories-list .category-item .category-anchor {\n  height: 100%;\n  text-decoration: none;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.categories-list .category-item .category-anchor .category-title {\n  margin: auto;\n  text-transform: uppercase;\n  font-weight: 400;\n  font-size: 18px;\n  letter-spacing: 1px;\n  padding: calc((var(--page-margin) / 4) * 3) var(--page-margin);\n  color: var(--ion-color-lightest);\n  background-color: var(--page-category-background);\n  border-radius: var(--app-fair-radius);\n}\n\n.categories-list .travel-category {\n  --page-category-background: #00AFFF;\n  --page-category-background-rgb: 0,175,255;\n}\n\n.categories-list .fashion-category {\n  --page-category-background: #cb328f;\n  --page-category-background-rgb: 203,50,143;\n}\n\n.categories-list .food-category {\n  --page-category-background: #ebbb00;\n  --page-category-background-rgb: 235,187,0;\n}\n\n.categories-list .deals-category {\n  --page-category-background: #70df70;\n  --page-category-background-rgb: 112,223,112;\n}\n\n.categories-list .real-state-category {\n  --page-category-background: #d9453a;\n  --page-category-background-rgb: 217,69,58;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lraS9saXN0aW5nL3N0eWxlcy9DOlxcVXNlcnNcXEdhbGwnZSAgSW50bidsXFxEZXNrdG9wXFxhcGUvc3JjXFxhcHBcXHdpa2lcXGxpc3RpbmdcXHN0eWxlc1xcd2lraS1saXN0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2lraS9saXN0aW5nL3N0eWxlcy93aWtpLWxpc3RpbmcucGFnZS5zY3NzIiwic3JjL2FwcC93aWtpL2xpc3Rpbmcvc3R5bGVzL0M6XFxVc2Vyc1xcR2FsbCdlICBJbnRuJ2xcXERlc2t0b3BcXGFwZS9zcmNcXHRoZW1lXFxtaXhpbnNcXHNjcm9sbGJhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLHVDQUFBO0VBRUEsc0RBQUE7RUFFQSxtREFBQTtFQUNBLDJEQUFBO0VBRUEsb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBRUEsc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EscUNBQUE7RUFFQSwyREFBQTtBQ1RGOztBRGdCQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBRUEsUUFBQTtFQUNBLDJCQUFBO0FDZkY7O0FEa0JBO0VBQ0UsZ0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBRUEsUUFBQTtFQUNBLDJCQUFBO0FDbEJGOztBRHNCQTtFQUNFLGdCQUFBO0VBRUEsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUVBLFFBQUE7RUFDQSwyQkFBQTtBQ3RCRjs7QUQwQkE7RUFDRSwwQ0FBQTtFQUNBLGlEQUFBO0VBRUEsWUFBQTtBQ3hCRjs7QUQwQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxxQ0FBQTtFQUVBLG9FQUFBO0VBQ0EsNEJBQUE7RUFDQSxvREFBQTtBQzFCSjs7QUQ4QkE7RUFDRSx3REFBQTtFQUdBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VFeEdBLHdCQUFBO0VBR0EsOEJBQUE7RUFDQSxxQkFBQTtBRDBFRjs7QUN2RUU7RUFDRSxhQUFBO0FEeUVKOztBRDRCSTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FDMUJOOztBRDRCTTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsOERBQUE7RUFDQSxnQ0FBQTtFQUNBLGlEQUFBO0VBQ0EscUNBQUE7QUMxQlI7O0FEK0JFO0VBQ0UsbUNBQUE7RUFDQSx5Q0FBQTtBQzdCSjs7QURnQ0U7RUFDRSxtQ0FBQTtFQUNBLDBDQUFBO0FDOUJKOztBRGlDRTtFQUNFLG1DQUFBO0VBQ0EseUNBQUE7QUMvQko7O0FEa0NFO0VBQ0UsbUNBQUE7RUFDQSwyQ0FBQTtBQ2hDSjs7QURtQ0U7RUFDRSxtQ0FBQTtFQUNBLHlDQUFBO0FDakNKIiwiZmlsZSI6InNyYy9hcHAvd2lraS9saXN0aW5nL3N0eWxlcy93aWtpLWxpc3RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9zY3JvbGxiYXJzXCI7XG5cbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvc2Nyb2xsYmFyc1wiO1xuLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcblxuICAtLXBhZ2UtY2F0ZWdvcmllcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG5cbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKTtcblxuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2U6IDQwcHg7XG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplOiAxMHB4O1xuXG4gIC0tcGFnZS1maXJzdC1zbGlkZS1iYWNrZ3JvdW5kOiAjYzFlYmZmO1xuICAtLXBhZ2Utc2Vjb25kLXNsaWRlLWJhY2tncm91bmQ6ICNhOWViZDI7XG4gIC0tcGFnZS10aGlyZC1zbGlkZS1iYWNrZ3JvdW5kOiAjZjBjYmU1O1xuICAtLXBhZ2UtbGFzdC1zbGlkZS1iYWNrZ3JvdW5kOiAjZWVmM2ZmO1xuXG4gIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuXG5cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG5cbi5jaGVja2JveC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNzAlO1xuICBsZWZ0OiAxNSU7XG4gIC8vIHZlcnRpY2FsbHkgY2VudGVyZWRcbiAgdG9wOiA4MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmNoZWNrYm94LXN1YnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgLy8gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3MCU7XG4gIGxlZnQ6IDE1JTtcbiAgLy8gdmVydGljYWxseSBjZW50ZXJlZFxuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5cbi5jaGVja2JveC1zdWJ0aXRsZTEge1xuICBmb250LXdlaWdodDogOTAwO1xuICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcwJTtcbiAgbGVmdDogMTUlO1xuICAvLyB2ZXJ0aWNhbGx5IGNlbnRlcmVkXG4gIHRvcDogOTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cblxuLndhbGt0aHJvdWdoLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcblxuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAvLyBIZWFkZXIgc3BhY2VcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tYXBwLWhlYWRlci1oZWlnaHQpO1xuICAgIC8vIC5zd2lwZXItcGFnaW5hdGlvbiBzcGFjZVxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsKTtcbiAgfVxufSBcblxuLmNhdGVnb3JpZXMtbGlzdCB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2UtY2F0ZWdvcmllcy1ndXR0ZXIpO1xuXG4gIC8vIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1jYXRlZ29yaWVzLWd1dHRlcikgKiAzKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gIEBpbmNsdWRlIGhpZGUtc2Nyb2xsYmFycygpO1xuXG4gIC5jYXRlZ29yeS1pdGVtIHtcbiAgICAuY2F0ZWdvcnktYW5jaG9yIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIHBhZGRpbmc6IGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpICogMykgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudHJhdmVsLWNhdGVnb3J5IHtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogIzAwQUZGRjtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IDAsMTc1LDI1NTtcbiAgfVxuXG4gIC5mYXNoaW9uLWNhdGVnb3J5IHtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogI2NiMzI4ZjtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IDIwMyw1MCwxNDM7XG4gIH1cblxuICAuZm9vZC1jYXRlZ29yeSB7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6ICNlYmJiMDA7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAyMzUsMTg3LDA7XG4gIH1cblxuICAuZGVhbHMtY2F0ZWdvcnkge1xuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiAjNzBkZjcwO1xuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogMTEyLDIyMywxMTI7XG4gIH1cblxuICAucmVhbC1zdGF0ZS1jYXRlZ29yeSB7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6ICNkOTQ1M2E7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAyMTcsNjksNTg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xuICAtLXBhZ2UtY2F0ZWdvcmllcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYik7XG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZTogNDBweDtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodDogMThweDtcbiAgLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemU6IDEwcHg7XG4gIC0tcGFnZS1maXJzdC1zbGlkZS1iYWNrZ3JvdW5kOiAjYzFlYmZmO1xuICAtLXBhZ2Utc2Vjb25kLXNsaWRlLWJhY2tncm91bmQ6ICNhOWViZDI7XG4gIC0tcGFnZS10aGlyZC1zbGlkZS1iYWNrZ3JvdW5kOiAjZjBjYmU1O1xuICAtLXBhZ2UtbGFzdC1zbGlkZS1iYWNrZ3JvdW5kOiAjZWVmM2ZmO1xuICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cblxuLmNoZWNrYm94LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNzAlO1xuICBsZWZ0OiAxNSU7XG4gIHRvcDogODAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5jaGVja2JveC1zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcwJTtcbiAgbGVmdDogMTUlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uY2hlY2tib3gtc3VidGl0bGUxIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNzAlO1xuICBsZWZ0OiAxNSU7XG4gIHRvcDogOTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi53YWxrdGhyb3VnaC1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53YWxrdGhyb3VnaC1zbGlkZXMgLnNsaWRlLWlubmVyLXJvdyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IHZhcigtLWFwcC1oZWFkZXItaGVpZ2h0KTtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbCk7XG59XG5cbi5jYXRlZ29yaWVzLWxpc3Qge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiB2YXIoLS1wYWdlLWNhdGVnb3JpZXMtZ3V0dGVyKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xufVxuLmNhdGVnb3JpZXMtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNhdGVnb3JpZXMtbGlzdCAuY2F0ZWdvcnktaXRlbSAuY2F0ZWdvcnktYW5jaG9yIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uY2F0ZWdvcmllcy1saXN0IC5jYXRlZ29yeS1pdGVtIC5jYXRlZ29yeS1hbmNob3IgLmNhdGVnb3J5LXRpdGxlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmc6IGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpICogMykgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbn1cbi5jYXRlZ29yaWVzLWxpc3QgLnRyYXZlbC1jYXRlZ29yeSB7XG4gIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiAjMDBBRkZGO1xuICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IDAsMTc1LDI1NTtcbn1cbi5jYXRlZ29yaWVzLWxpc3QgLmZhc2hpb24tY2F0ZWdvcnkge1xuICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogI2NiMzI4ZjtcbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAyMDMsNTAsMTQzO1xufVxuLmNhdGVnb3JpZXMtbGlzdCAuZm9vZC1jYXRlZ29yeSB7XG4gIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiAjZWJiYjAwO1xuICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IDIzNSwxODcsMDtcbn1cbi5jYXRlZ29yaWVzLWxpc3QgLmRlYWxzLWNhdGVnb3J5IHtcbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6ICM3MGRmNzA7XG4gIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogMTEyLDIyMywxMTI7XG59XG4uY2F0ZWdvcmllcy1saXN0IC5yZWFsLXN0YXRlLWNhdGVnb3J5IHtcbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6ICNkOTQ1M2E7XG4gIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogMjE3LDY5LDU4O1xufSIsIi8vIEhpZGUgc2Nyb2xsYmFyczogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM4OTk0ODM3LzExMTY5NTlcbkBtaXhpbiBoaWRlLXNjcm9sbGJhcnMoKSB7XG4gIC8vIElFIDEwK1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG5cbiAgLy8gRmlyZWZveFxuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcblxuICAvLyBTYWZhcmkgYW5kIENocm9tZVxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/wiki/listing/styles/wiki-listing.responsive.scss":
/*!******************************************************************!*\
  !*** ./src/app/wiki/listing/styles/wiki-listing.responsive.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .categories-list .category-item .category-anchor .category-title {\n    font-size: 16px;\n  }\n}\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {\n  .categories-list .category-item .category-anchor .category-title {\n    font-size: 20px;\n    padding: var(--page-margin) calc((var(--page-margin) * 3) / 2);\n  }\n}\n/* ----------- iPhone X ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {\n  .categories-list .category-item .category-anchor .category-title {\n    font-size: 20px;\n    padding: var(--page-margin) calc((var(--page-margin) * 3) / 2);\n  }\n}\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {\n  .categories-list .category-item .category-anchor .category-title {\n    font-size: 20px;\n    padding: var(--page-margin) calc((var(--page-margin) * 3) / 2);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lraS9saXN0aW5nL3N0eWxlcy9DOlxcVXNlcnNcXEdhbGwnZSAgSW50bidsXFxEZXNrdG9wXFxhcGUvc3JjXFxhcHBcXHdpa2lcXGxpc3RpbmdcXHN0eWxlc1xcd2lraS1saXN0aW5nLnJlc3BvbnNpdmUuc2NzcyIsInNyYy9hcHAvd2lraS9saXN0aW5nL3N0eWxlcy93aWtpLWxpc3RpbmcucmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLDRDQUFBO0FBQ0E7RUFhUTtJQUNFLGVBQUE7RUNoQlI7QUFDRjtBRHNCQSxxREFBQTtBQWNBLGtEQUFBO0FBQ0E7RUFZUTtJQUNFLGVBQUE7SUFDQSw4REFBQTtFQzVDUjtBQUNGO0FEa0RBLHFDQUFBO0FBQ0E7RUFZUTtJQUNFLGVBQUE7SUFDQSw4REFBQTtFQzNEUjtBQUNGO0FEaUVBLGlEQUFBO0FBQ0E7RUFZUTtJQUNFLGVBQUE7SUFDQSw4REFBQTtFQzFFUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvd2lraS9saXN0aW5nL3N0eWxlcy93aWtpLWxpc3RpbmcucmVzcG9uc2l2ZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKE5vdGU6IERvbid0IGNoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIGRldmljZXMgYXMgaXQgbWF5IGJyZWFrIHRoZSBjb3JyZWN0IGNzcyBwcmVjZWRlbmNlKVxuXG4vLyAoc2VlOiBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2Nzcy9tZWRpYS1xdWVyaWVzLWZvci1zdGFuZGFyZC1kZXZpY2VzLyNpcGhvbmUtcXVlcmllcylcbi8vIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80Nzc1MDI2MS8xMTE2OTU5KVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNCBhbmQgNFMgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNDgwcHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxuICBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDIvMylcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuY2F0ZWdvcmllcy1saXN0IHtcbiAgICAuY2F0ZWdvcnktaXRlbSB7XG4gICAgICAuY2F0ZWdvcnktYW5jaG9yIHtcbiAgICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDUsIDVTLCA1QyBhbmQgNVNFIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDU2OHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MCAvIDcxKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG5cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYsIDZTLCA3IGFuZCA4IC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuY2F0ZWdvcmllcy1saXN0IHtcbiAgICAuY2F0ZWdvcnktaXRlbSB7XG4gICAgICAuY2F0ZWdvcnktYW5jaG9yIHtcbiAgICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIC8gMikgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSBYIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDgxMnB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbyA6IDMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmNhdGVnb3JpZXMtbGlzdCB7XG4gICAgLmNhdGVnb3J5LWl0ZW0ge1xuICAgICAgLmNhdGVnb3J5LWFuY2hvciB7XG4gICAgICAgIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAvIDIpIDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3MzZweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmNhdGVnb3JpZXMtbGlzdCB7XG4gICAgLmNhdGVnb3J5LWl0ZW0ge1xuICAgICAgLmNhdGVnb3J5LWFuY2hvciB7XG4gICAgICAgIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAvIDIpIDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogMi8zKSB7XG4gIC5jYXRlZ29yaWVzLWxpc3QgLmNhdGVnb3J5LWl0ZW0gLmNhdGVnb3J5LWFuY2hvciAuY2F0ZWdvcnktdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLyogLS0tLS0tLS0tLS0gaVBob25lIDUsIDVTLCA1QyBhbmQgNVNFIC0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNiwgNlMsIDcgYW5kIDggLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDY2N3B4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAuY2F0ZWdvcmllcy1saXN0IC5jYXRlZ29yeS1pdGVtIC5jYXRlZ29yeS1hbmNob3IgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIC8gMik7XG4gIH1cbn1cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSBYIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MTJweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgLmNhdGVnb3JpZXMtbGlzdCAuY2F0ZWdvcnktaXRlbSAuY2F0ZWdvcnktYW5jaG9yIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAvIDIpO1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzM2cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5jYXRlZ29yaWVzLWxpc3QgLmNhdGVnb3J5LWl0ZW0gLmNhdGVnb3J5LWFuY2hvciAuY2F0ZWdvcnktdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLyAyKTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/wiki/listing/styles/wiki-listing.shell.scss":
/*!*************************************************************!*\
  !*** ./src/app/wiki/listing/styles/wiki-listing.shell.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.category-cover {\n  --image-shell-loading-background: rgba(var(--page-category-background-rgb), .25);\n  --image-shell-spinner-color: var(--ion-color-lightest);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lraS9saXN0aW5nL3N0eWxlcy9DOlxcVXNlcnNcXEdhbGwnZSAgSW50bidsXFxEZXNrdG9wXFxhcGUvc3JjXFxhcHBcXHdpa2lcXGxpc3RpbmdcXHN0eWxlc1xcd2lraS1saXN0aW5nLnNoZWxsLnNjc3MiLCJzcmMvYXBwL3dpa2kvbGlzdGluZy9zdHlsZXMvd2lraS1saXN0aW5nLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnRkFBQTtFQUNBLHNEQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC93aWtpL2xpc3Rpbmcvc3R5bGVzL3dpa2ktbGlzdGluZy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLmNhdGVnb3J5LWNvdmVyIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYiksIC4yNSk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbiIsImFwcC1pbWFnZS1zaGVsbC5jYXRlZ29yeS1jb3ZlciB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2IpLCAuMjUpO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/wiki/listing/wiki-listing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/wiki/listing/wiki-listing.module.ts ***!
  \*****************************************************/
/*! exports provided: WikiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiPageModule", function() { return WikiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _wiki_listing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wiki-listing.page */ "./src/app/wiki/listing/wiki-listing.page.ts");
/* harmony import */ var _wiki_listing_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wiki-listing.resolver */ "./src/app/wiki/listing/wiki-listing.resolver.ts");
/* harmony import */ var _wiki_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../wiki.service */ "./src/app/wiki/wiki.service.ts");










var wikiRoutes = [
    {
        path: '',
        component: _wiki_listing_page__WEBPACK_IMPORTED_MODULE_7__["WikiListingPage"],
        resolve: {
            data: _wiki_listing_resolver__WEBPACK_IMPORTED_MODULE_8__["WikiListingResolver"]
        }
    }
];
var WikiPageModule = /** @class */ (function () {
    function WikiPageModule() {
    }
    WikiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(wikiRoutes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ],
            declarations: [_wiki_listing_page__WEBPACK_IMPORTED_MODULE_7__["WikiListingPage"]],
            providers: [
                _wiki_listing_resolver__WEBPACK_IMPORTED_MODULE_8__["WikiListingResolver"],
                _wiki_service__WEBPACK_IMPORTED_MODULE_9__["WikiService"]
            ]
        })
    ], WikiPageModule);
    return WikiPageModule;
}());



/***/ }),

/***/ "./src/app/wiki/listing/wiki-listing.page.ts":
/*!***************************************************!*\
  !*** ./src/app/wiki/listing/wiki-listing.page.ts ***!
  \***************************************************/
/*! exports provided: WikiListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiListingPage", function() { return WikiListingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var WikiListingPage = /** @class */ (function () {
    function WikiListingPage(route, router) {
        this.route = route;
        this.router = router;
    }
    Object.defineProperty(WikiListingPage.prototype, "isShell", {
        get: function () {
            return (this.listing && this.listing.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    WikiListingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (resolvedRouteData) {
            var listingDataStore = resolvedRouteData['data'];
            listingDataStore.state.subscribe(function (state) {
                _this.listing = state;
            }, function (error) { });
        }, function (error) { });
    };
    WikiListingPage.prototype.openDetailsWithState = function (a) {
        var navigationExtras = {
            state: {
                item: a
            }
        };
        // if(a.slug=="Behaviour"){
        //   this.router.navigate(['/app/home/wiki/'], navigationExtras);
        // }else{
        //   this.router.navigate(['/app/home/wiki/'+ a.slug], navigationExtras);
        // }
        this.router.navigate(['/app/home/wiki/' + a.slug], navigationExtras);
    };
    WikiListingPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WikiListingPage.prototype, "isShell", null);
    WikiListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./wiki-listing.page.html */ "./node_modules/raw-loader/index.js!./src/app/wiki/listing/wiki-listing.page.html"),
            styles: [__webpack_require__(/*! ./styles/wiki-listing.page.scss */ "./src/app/wiki/listing/styles/wiki-listing.page.scss"), __webpack_require__(/*! ./styles/wiki-listing.shell.scss */ "./src/app/wiki/listing/styles/wiki-listing.shell.scss"), __webpack_require__(/*! ./styles/wiki-listing.responsive.scss */ "./src/app/wiki/listing/styles/wiki-listing.responsive.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WikiListingPage);
    return WikiListingPage;
}());



/***/ })

}]);
//# sourceMappingURL=wiki-listing-wiki-listing-module-es5.js.map