"use strict";
(self["webpackChunkinterviewTask"] = self["webpackChunkinterviewTask"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ 544);
/* harmony import */ var _component_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/card-component/card-component.component */ 7711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: "",
  component: _component_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_1__.CardComponentComponent
}, {
  path: "dashboard",
  component: _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/header/header.component */ 2073);



class AppComponent {
  constructor() {
    this.title = 'InterviewTask';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header")(1, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _component_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/header/header.component */ 2073);
/* harmony import */ var _component_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/card-component/card-component.component */ 7711);
/* harmony import */ var _component_card_component_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/card-component/pages/main-page/main-page.component */ 6504);
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ 544);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 1060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);









class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.NgxPaginationModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _component_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_3__.CardComponentComponent, _component_card_component_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__.MainPageComponent, _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.DashboardComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.NgxPaginationModule]
  });
})();

/***/ }),

/***/ 7711:
/*!**********************************************************************!*\
  !*** ./src/app/component/card-component/card-component.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardComponentComponent: () => (/* binding */ CardComponentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ 6504);


class CardComponentComponent {
  constructor() {
    this.cards = [{
      icon: "fa-solid fa-screwdriver-wrench",
      name: "صيانة السيارة"
    }, {
      icon: "fa-solid fa-car",
      name: " احقيقه خصم تأمين ايارات "
    }, {
      icon: "fa-solid fa-scale-balanced",
      name: " بلاغ عن احتيال"
    }, {
      icon: "fa-solid fa-car-burst",
      name: " الأبلاغ عن حادث"
    }, {
      icon: "fa-solid fa-car",
      name: " ملخص تقييم الأضرار"
    }, {
      icon: "fa-solid fa-scale-balanced",
      name: "بلاغ عن احتيال"
    }, {
      icon: "fa-solid fa-car-burst",
      name: " الأبلاغ عن حادث"
    }, {
      icon: "fa-solid fa-screwdriver-wrench",
      name: "صيانة السيارة"
    }, {
      icon: "fa-solid fa-car",
      name: " احقيقه خصم تأمين السيارات "
    }, {
      icon: "fa-solid fa-car",
      name: " ملخص تقييم الأضرار"
    }];
  }
  static #_ = this.ɵfac = function CardComponentComponent_Factory(t) {
    return new (t || CardComponentComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CardComponentComponent,
    selectors: [["app-card-component"]],
    decls: 5,
    vars: 1,
    consts: [[1, "mt-2", "container", "pt-3"], [1, "w-75", "m-auto"], [1, "text-center", "my-4"], [3, "cards"]],
    template: function CardComponentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0623\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0634\u0643\u0648\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-main-page", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cards", ctx.cards);
      }
    },
    dependencies: [_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__.MainPageComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 6504:
/*!*********************************************************************************!*\
  !*** ./src/app/component/card-component/pages/main-page/main-page.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



const _c0 = function (a0) {
  return {
    "selected": a0
  };
};
const _c1 = function (a0) {
  return {
    "title-selected": a0
  };
};
const _c2 = function (a0) {
  return {
    "icon-selected": a0
  };
};
const _c3 = function (a0) {
  return {
    "name-selected": a0
  };
};
function MainPageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const card_r1 = restoredCtx.$implicit;
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.selectCard(card_r1, i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5)(2, "div", 6)(3, "div")(4, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, card_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, card_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](card_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, card_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c3, card_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.name);
  }
}
const _c4 = function (a0) {
  return {
    "button-selected": a0
  };
};
class MainPageComponent {
  constructor(_Router) {
    this._Router = _Router;
    this.cards = "";
    this.isSelected = false;
    this.arr = [];
  }
  selectCard(card, i) {
    this.cards.forEach(c => this.isSelected = false);
    card.isSelected = true;
    this.isSelected = true;
    this.currentElement = this.cards[i];
  }
  okButton() {
    console.log(this.currentElement);
    if (this.currentElement != undefined) {
      this.arr.push(this.currentElement);
    }
    console.log(this.arr);
    this._Router.navigateByUrl('/dashboard');
  }
  static #_ = this.ɵfac = function MainPageComponent_Factory(t) {
    return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MainPageComponent,
    selectors: [["app-main-page"]],
    inputs: {
      cards: "cards"
    },
    decls: 5,
    vars: 4,
    consts: [[1, "row", "pt-2"], ["class", "col", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-center", "mb-3"], [1, "button-submit", "mt-2", "btn", "btn-block", 3, "ngClass", "click"], [1, "col", 3, "click"], [1, "card", "text-center", "mb-4", 3, "ngClass"], [1, "card-body", "d-flex", "justify-content-center", "align-items-center"], [1, "card-title", 3, "ngClass"], [3, "ngClass"], [1, "card-text", 3, "ngClass"]],
    template: function MainPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_div_1_Template, 8, 15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_3_listener() {
          return ctx.okButton();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u062A\u0623\u0643\u064A\u062F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx.isSelected));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: [".card[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 120px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  width: 45px;\n  border: 1px solid #E2E2E2;\n  border-radius: 4px;\n  padding: 5px;\n  margin: auto;\n  margin-bottom: 5px;\n  color: #878686;\n}\n.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n\n.button-submit[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 300px;\n  height: 45px;\n  border: 1px solid #cecccc;\n  border-radius: 4px;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background-color: rgb(52, 137, 79);\n}\n\n.name-selected[_ngcontent-%COMP%], .title-selected[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n\n.button-selected[_ngcontent-%COMP%] {\n  color: white;\n  background-color: rgb(52, 137, 79);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50L2NhcmQtY29tcG9uZW50L3BhZ2VzL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBQ0k7RUFFSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQVI7QUFFSTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FBRFI7O0FBS0E7RUFFSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUhKOztBQUtBO0VBQ0ksa0NBQUE7QUFGSjs7QUFJQTtFQUVJLHNCQUFBO0FBRko7O0FBSUE7RUFDSSxZQUFBO0VBQ0Esa0NBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkXHJcbntcclxuICAgIHdpZHRoIDogMTQwcHg7XHJcbiAgICBoZWlnaHQgOiAxMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXMgOjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC5jYXJkLXRpdGxlXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6NDVweDtcclxuICAgICAgICBib3JkZXIgOiAxcHggc29saWQgI0UyRTJFMjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZyA6NXB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgY29sb3I6Izg3ODY4NlxyXG4gICAgfVxyXG4gICAgLmNhcmQtdGl0bGUgaVxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOjMycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnV0dG9uLXN1Ym1pdFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICB3aWR0aCA6MzAwcHg7XHJcbiAgICBoZWlnaHQ6NDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MiwgMTM3LCA3OSk7XHJcbn1cclxuLm5hbWUtc2VsZWN0ZWQsLnRpdGxlLXNlbGVjdGVkXHJcbntcclxuICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudFxyXG59XHJcbi5idXR0b24tc2VsZWN0ZWQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUyLCAxMzcsIDc5KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 544:
/*!************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 1060);



function DashboardComponent_tr_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td")(15, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 25)(18, "div", 26)(19, "div", 27)(20, "div", 28)(21, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 30)(24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u0627\u0644\u0634\u0643\u0648\u064A \u0645\u0642\u062F\u0645\u0647 \u0641 \u0641\u0631\u0639 \u0627\u0644\u062F\u0642\u0647\u0644\u064A\u0647 \u0645\u0646 \u0645 \u0645 \u0639 \u064A\u0642\u0648\u0644 \u0628\u0623\u0646 \u0647\u0646\u0627\u0643 \u062D\u0627\u062F\u062A \u0644\u0644\u0633\u064A\u0627\u0631\u0647 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 31)(30, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u063A\u0644\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, item_r1.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.leaderCity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 10, item_r1.date));
  }
}
const _c0 = function (a0, a1) {
  return {
    itemsPerPage: a0,
    currentPage: a1
  };
};
class DashboardComponent {
  constructor() {
    this.today = Date.now();
    this.items = [{
      type: "شكوي1",
      date: this.today,
      city: "الرياض",
      leaderCity: "اداره الشكاوي",
      status: "تم قبولها"
    }, {
      type: "شكوي2",
      date: this.today,
      city: "الرياض",
      leaderCity: "اداره الشكاوي",
      status: "تم قبولها"
    }, {
      type: "شكوي3",
      date: this.today,
      city: "الرياض",
      leaderCity: "اداره الشكاوي",
      status: "تم قبولها"
    }, {
      type: "شكوي4",
      date: this.today,
      city: "الرياض",
      leaderCity: "اداره الشكاوي",
      status: "تم قبولها"
    }, {
      type: "5شكوي",
      date: this.today,
      city: "الرياض",
      leaderCity: "اداره الشكاوي",
      status: "تم قبولها"
    }, {
      type: "شكوي6",
      date: this.today,
      city: "الرياض",
      leaderCity: "اداره الشكاوي",
      status: "تم قبولها"
    }];
    this.p = 1; // Current page number
    this.pageSize = 3; // Number of items to display per page
  }
  static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 87,
    vars: 7,
    consts: [[1, "container", "mt-4", "pt-4", "text-center", "text-white"], [1, "row"], [1, "col-md-3", "mb-3"], [1, "newComplaints"], [1, "mt-2"], [1, "acceptedComplaints"], [1, "rejectedComplaints1"], [1, "col-md-3"], [1, "rejectedComplaints"], [1, "d-flex", "justify-content-between", "text-black", "my-2", "filteration"], [1, "date"], [1, "ms-3"], ["name", "", "id", ""], ["selected", "", "value", ""], ["value", ""], [1, "filter"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "text-center", "paginati"], [3, "pageChange"], ["scope", "row"], [1, "status"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "border", "border-0", "bg-transparent"], [1, "fa-solid", "fa-eye"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "fs-5"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0634\u0643\u0627\u0648\u064A \u062C\u062F\u064A\u062F\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "150");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2)(9, "div", 5)(10, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0634\u0643\u0627\u0648\u064A \u0645\u0631\u0641\u0648\u0636\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2)(15, "div", 6)(16, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0634\u0643\u0627\u0648\u064A \u062A\u0645 \u0627\u0639\u062A\u0645\u0627\u062F\u0647\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "120");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7)(21, "div", 8)(22, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0634\u0643\u0627\u0648\u064A \u0645\u0631\u0641\u0648\u0636\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "44");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9)(27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0627\u0644\u062C\u062F\u064A\u062F\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10)(30, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 12)(33, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0627\u0644\u0643\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Feb 17, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Feb 17, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Feb 17, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Feb 17, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15)(44, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "select", 12)(47, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0627\u0644\u0643\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0627\u0644\u062C\u062F\u064A\u062F\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0627\u0644\u0645\u0642\u0628\u0648\u0644\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0627\u0644\u0645\u0631\u0641\u0648\u0636\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15)(56, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u0627\u0644\u062D\u0627\u0644\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "select", 12)(59, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u0627\u0644\u0643\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0627\u0644\u0645\u0642\u0628\u0648\u0644\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0627\u0644\u0645\u0631\u0641\u0648\u0636\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "table", 16)(66, "thead")(67, "tr")(68, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u0631\u0642\u0645 \u0627\u0644\u0634\u0643\u0648\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u0646\u0648\u0639 \u0627\u0644\u0634\u0643\u0648\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0634\u0643\u0648\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u0627\u0644\u0645\u062F\u064A\u0646\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u0627\u0644\u0627\u062F\u0627\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u0627\u0644\u062D\u0627\u0644\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u0639\u0631\u0636");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, DashboardComponent_tr_83_Template, 32, 12, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 19)(86, "pagination-controls", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function DashboardComponent_Template_pagination_controls_pageChange_86_listener($event) {
          return ctx.p = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](84, 1, ctx.items, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx.pageSize, ctx.p)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginationControlsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginatePipe],
    styles: [".col-md-3[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  padding: 5px 7px;\n}\n\n.newComplaints[_ngcontent-%COMP%] {\n  background-color: #FDBE7B;\n}\n\n.acceptedComplaints[_ngcontent-%COMP%] {\n  background-color: #12AA77;\n}\n\n.rejectedComplaints1[_ngcontent-%COMP%] {\n  background-color: #FF6A6F;\n}\n\n.rejectedComplaints[_ngcontent-%COMP%] {\n  background-color: #43A7D8;\n}\n\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #12AA77 !important;\n  color: #fff;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 15px 0px;\n}\n\n.status[_ngcontent-%COMP%] {\n  color: #FDBE7B;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #E7FFF3;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #9c9999;\n}\n\n.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #12AA77;\n  color: #fff;\n}\n\n.searchInput[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 640px) {\n  .filteration[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .filteration[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .filteration[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n  .filteration[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n  .container[_ngcontent-%COMP%] {\n    padding-top: 120px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUE7RUFFSSx5QkFBQTtBQUFKOztBQUVBO0VBRUkseUJBQUE7QUFBSjs7QUFHQTtFQUVJLHlCQUFBO0FBREo7O0FBR0E7RUFFSSx5QkFBQTtBQURKOztBQUlBO0VBRUksb0NBQUE7RUFDQSxXQUFBO0FBRko7O0FBSUE7RUFFSSxpQkFBQTtBQUZKOztBQUlBO0VBRUksY0FBQTtBQUZKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FBREo7O0FBR0E7RUFFSSxlQUFBO0VBQ0EsY0FBQTtBQURKOztBQUdBO0VBRUkseUJBQUE7RUFDQSxXQUFBO0FBREo7O0FBR0E7RUFFSSxhQUFBO0FBREo7O0FBSUE7RUFDSTtJQUVJLHlCQUFBO0VBRk47RUFHTTtJQU1JLG1CQUFBO0VBTlY7RUFFVTtJQUVJLFdBQUE7RUFEZDtFQUlVO0lBRUksWUFBQTtFQUhkO0VBT0U7SUFFSSw2QkFBQTtFQU5OO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLW1kLTM+ZGl2XHJcbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xyXG59XHJcbi5uZXdDb21wbGFpbnRzXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGREJFN0I7XHJcbn1cclxuLmFjY2VwdGVkQ29tcGxhaW50c1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxMkFBNzc7XHJcbiAgICBcclxufVxyXG4ucmVqZWN0ZWRDb21wbGFpbnRzMVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2QTZGXHJcbn1cclxuLnJlamVjdGVkQ29tcGxhaW50c1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0M0E3RDhcclxufVxyXG5cclxudGhlYWQgdGhcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyQUE3NyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG50ZFxyXG57XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxufVxyXG4uc3RhdHVzXHJcbntcclxuICAgIGNvbG9yOiNGREJFN0JcclxufVxyXG5zZWxlY3R7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0U3RkZGMztcclxufVxyXG5sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIGNvbG9yOiM5Yzk5OTlcclxufVxyXG4ubW9kYWwtZm9vdGVyIGJ1dHRvblxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTJBQTc3O1xyXG4gICAgY29sb3IgOiAjZmZmXHJcbn1cclxuLnNlYXJjaElucHV0XHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpIHtcclxuICAgIC5maWx0ZXJhdGlvblxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGl2XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo1MHB4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250YWluZXJcclxuICAgIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTIwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 2073:
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);




function HeaderComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15)(3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0641\u0647\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0645\u062F\u0642\u0642 \u0627\u0644\u0634\u0643\u0627\u0648\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class HeaderComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        this.showElement = this.router.url === '/dashboard';
      }
    });
  }
  getHeaderStyles() {
    const url = this.router.url;
    const styles = [];
    if (url.includes('/dashboard')) {
      styles.push('dashboard-header');
    }
    if (url.includes('/mainpage')) {
      styles.push('mainpage-header');
    }
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 17,
    vars: 3,
    consts: [[1, "header", 3, "ngClass"], [1, "container"], [1, "d-flex", "justify-content-between", "nav"], [1, "pt-0", "logo", "text-white", "d-flex", "align-items-end", "justify-content-center"], [1, "text-center", "mb-2"], ["class", "searchInput", 4, "ngIf"], [1, "d-flex", "align-items-center", "header-right"], [1, "notification", "ms-3", "d-flex", "justify-content-center", "align-items-center"], [1, "fa-regular", "fa-bell"], [1, "language", "d-flex", "justify-content-center", "align-items-center"], ["class", " leader d-flex", 4, "ngIf"], [1, "searchInput"], ["placeholder", "\u0645\u0627 \u0627\u0644\u0630\u064A \u062A\u0628\u062D\u062B \u0639\u0646\u0629\u061F", 1, "form-control"], [1, "leader", "d-flex"], ["src", "https://c0.klipartz.com/pngpicture/858/156/gratis-png-sistema-de-reconocimiento-facial-de-seguridad-software-de-control-de-acceso-deteccion-facial-retrato-de-hombre-de-dibujos-animados.png", "alt", "", 1, "rounded-circle", "mt-2"], [1, "mt-4", "pt-3", "me-2", "leaderInfo"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0646\u062D\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "najm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_div_10_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6)(12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Ar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_div_16_Template, 7, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getHeaderStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showElement);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showElement);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: ["@import url(https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Dancing+Script:wght@700&family=Libre+Franklin&family=Montserrat+Alternates:wght@300&family=Poppins:wght@200;300&family=Roboto[_ngcontent-%COMP%]:ital, wght@0[_ngcontent-%COMP%], 100[_ngcontent-%COMP%];0[_ngcontent-%COMP%], 300[_ngcontent-%COMP%];0[_ngcontent-%COMP%], 400[_ngcontent-%COMP%];0[_ngcontent-%COMP%], 500[_ngcontent-%COMP%];0[_ngcontent-%COMP%], 700[_ngcontent-%COMP%];0[_ngcontent-%COMP%], 900[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 100[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 300[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 400[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 500[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 700[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 900&family=Tajawal[_ngcontent-%COMP%]:wght@200;300[_ngcontent-%COMP%];400[_ngcontent-%COMP%];500[_ngcontent-%COMP%];700[_ngcontent-%COMP%];800[_ngcontent-%COMP%];900&display=swap)[_ngcontent-%COMP%];.header[_ngcontent-%COMP%] {\n  background-color: #F4F4F4;\n  box-shadow: 0px 0px 10px #cdcbcb;\n  height: 105px;\n}\n.header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  transform: translateY(-10%);\n}\n.header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #E1E3E6;\n  width: 62px;\n  height: 48px;\n  border-radius: 8px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 450px;\n  margin-top: 38px;\n  border-radius: 18px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 146px;\n  background-color: #12AA77;\n}\n.logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 800;\n  line-height: 20px !important;\n  font-family: \"Tajawal\", sans-serif;\n}\n\n.leader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 90px;\n}\n\n.leader[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  line-height: 0px;\n}\n\n@media screen and (max-width: 640px) {\n  .nav[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .dashboard-header[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .leader[_ngcontent-%COMP%] {\n    display: block !important;\n    text-align: center;\n    order: 1;\n  }\n  .leader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .leader[_ngcontent-%COMP%]   .leaderInfo[_ngcontent-%COMP%] {\n    margin-top: 0px !important;\n  }\n  .searchInput[_ngcontent-%COMP%] {\n    order: 4;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBQUFKO0FBQ0k7RUFFSSwyQkFBQTtBQUFSO0FBQ1E7RUFFSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFaOztBQUtBO0VBRUksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFLQTtFQUVJLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFISjtBQUlJO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtBQUhSOztBQU1BO0VBRUksV0FBQTtFQUNBLFlBQUE7QUFKSjs7QUFNQTtFQUVJLGdCQUFBO0FBSko7O0FBTUE7RUFDSTtJQUVJLGNBQUE7RUFKTjtFQU1FO0lBRUksYUFBQTtFQUxOO0VBT0U7SUFFSSx5QkFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtFQU5OO0VBT007SUFFSSxXQUFBO0lBQ0EsWUFBQTtFQU5WO0VBU007SUFFSSwwQkFBQTtFQVJWO0VBV0U7SUFFSSxRQUFBO0VBVk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhaXJvOndnaHRAMjAwLi4xMDAwJmZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDcwMCZmYW1pbHk9TGlicmUrRnJhbmtsaW4mZmFtaWx5PU1vbnRzZXJyYXQrQWx0ZXJuYXRlczp3Z2h0QDMwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDAmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZmFtaWx5PVRhamF3YWw6d2dodEAyMDA7MzAwOzQwMDs1MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcbi5oZWFkZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggIDEwcHggI2NkY2JjYjtcclxuICAgIGhlaWdodDogMTA1cHg7XHJcbiAgICAuaGVhZGVyLXJpZ2h0XHJcbiAgICB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xyXG4gICAgICAgIC5sYW5ndWFnZSwubm90aWZpY2F0aW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTFFM0U2O1xyXG4gICAgICAgICAgICB3aWR0aDogNjJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5pbnB1dFxyXG57XHJcbiAgICB3aWR0aDo0NTBweDtcclxuICAgIG1hcmdpbi10b3A6IDM4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG59XHJcbi5sb2dvXHJcbntcclxuICAgIHdpZHRoOjkwcHg7XHJcbiAgICBoZWlnaHQ6IDE0NnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyQUE3NztcclxuICAgIHNwYW5cclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlRhamF3YWxcIiwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxufVxyXG4ubGVhZGVyIGltZ1xyXG57XHJcbiAgICB3aWR0aDo4MHB4O1xyXG4gICAgaGVpZ2h0OjkwcHg7XHJcbn1cclxuLmxlYWRlciBoNlxyXG57XHJcbiAgICBsaW5lLWhlaWdodDowcHg7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NDBweCkge1xyXG4gICAgLm5hdiBcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5kYXNoYm9hcmQtaGVhZGVyXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIH1cclxuICAgIC5sZWFkZXJcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICBpbWdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxlYWRlckluZm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWFyY2hJbnB1dFxyXG4gICAge1xyXG4gICAgICAgIG9yZGVyOiA0O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map