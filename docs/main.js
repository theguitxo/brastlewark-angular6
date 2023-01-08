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
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
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

module.exports = "<router-outlet></router-outlet>\n<ngx-loading [show]=\"cargando()\"></ngx-loading>\n"

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
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/globals.service */ "./src/app/services/globals.service.ts");
/* harmony import */ var _services_gnomes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/gnomes.service */ "./src/app/services/gnomes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(globals, utils, gnomes) {
        this.globals = globals;
        this.utils = utils;
        this.gnomes = gnomes;
        this.globals.cargando = true;
        this.globals.primeraBusqueda = false;
        console.log(this.utils.fechaHora() + 'Construct App');
        this.gnomes.cargarLista();
    }
    AppComponent.prototype.cargando = function () {
        return this.globals.cargando;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"],
            _services_gnomes_service__WEBPACK_IMPORTED_MODULE_3__["GnomesService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/globals.service */ "./src/app/services/globals.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipes_order_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/order.pipe */ "./src/app/pipes/order.pipe.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/message-box/message-box.component */ "./src/app/components/message-box/message-box.component.ts");
/* harmony import */ var _components_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/list-table/list-table.component */ "./src/app/components/list-table/list-table.component.ts");
/* harmony import */ var _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/search-box/search-box.component */ "./src/app/components/search-box/search-box.component.ts");
/* harmony import */ var _components_gnome_info_gnome_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/gnome-info/gnome-info.component */ "./src/app/components/gnome-info/gnome-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// MODULOS EXTERNOS



// SERVICIOS


// LOCALE PARA ES


Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_12___default.a, 'es');
// PIPES

// COMPONENTES





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_15__["ListComponent"],
                _components_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_16__["MessageBoxComponent"],
                _pipes_order_pipe__WEBPACK_IMPORTED_MODULE_14__["OrderByPipe"],
                _components_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_17__["ListTableComponent"],
                _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_18__["SearchBoxComponent"],
                _components_gnome_info_gnome_info_component__WEBPACK_IMPORTED_MODULE_19__["GnomeInfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__["ScrollToModule"].forRoot()
            ],
            providers: [
                _services_globals_service__WEBPACK_IMPORTED_MODULE_10__["GlobalsService"],
                _services_utils_service__WEBPACK_IMPORTED_MODULE_11__["UtilsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/gnome-info/gnome-info.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/gnome-info/gnome-info.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-1 p-2 border border-info rounded rounded-2\">\n  <div class=\"col-12\">\n\n    <!-- CABECERA: NOMBRE Y BOTÓN CERRAR -->\n    <div class=\"row d-flex flex-md-row-reverse \">\n      <div class=\"col-12 col-md-2 text-right\">\n        <button type=\"button\" class=\"btn btn-outline-primary btn-sm\" (click)=\"cerrar()\">\n          Close\n        </button>\n      </div>\n      <div class=\"col-12 col-md-10\">\n        <h2>{{gnomo.name}}</h2>\n      </div>\n    </div>\n\n    <!-- CUERPO: DATOS GNOMO -->\n    <div class=\"row\">\n\n      <!-- IMAGEN -->\n      <div class=\"col-12 col-md-3\">\n        <img\n          class=\"img-fluid rounded d-block mx-auto w-100\"\n          [src]=\"gnomo.thumbnail\">\n      </div>\n\n      <!-- DATOS -->\n      <div class=\"col-12 col-md-9 mt-2\">\n\n        <!-- EDAD -->\n        <div class=\"row mb-2\">\n          <div class=\"col-8 font-weight-bold\">Age (in years):</div>\n          <div class=\"col-4 text-right\">{{gnomo.age|number:'.0-0'}}</div>\n        </div>\n\n        <!-- ALTURA -->\n        <div class=\"row mb-2\">\n          <div class=\"col-8 font-weight-bold\">Height (in cm):</div>\n          <div class=\"col-4 text-right\">{{gnomo.height|number:'.2-2':'es'}}</div>\n        </div>\n\n        <!-- PESO -->\n        <div class=\"row mb-2\">\n          <div class=\"col-8 font-weight-bold\">Weight (in kg):</div>\n          <div class=\"col-4 text-right\">{{gnomo.weight|number:'.2-2':'es'}}</div>\n        </div>\n\n        <!-- PROFESIONES -->\n        <div class=\"row\">\n          <div class=\"col-12 font-weight-bold\">Professions:</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\" *ngIf=\"!gnomo.professions.length\">\n            This gnome hasn't professions\n          </div>\n          <div class=\"col-12\" *ngIf=\"gnomo.professions.length\">\n            <ul class=\"p-0\">\n              <li\n                *ngFor=\"let profesion of gnomo.professions\"\n                class=\"mx-1 badge badge-primary badge-pill\">\n                {{profesion}}\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <!-- AMIGOS -->\n        <div class=\"row\">\n          <div class=\"col-12 font-weight-bold\">\n            Friends <small class=\"font-weight-normal\">(You can click over each friend to watch their information)</small>:\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\" *ngIf=\"!gnomo.friends.length\">\n            This gnome hasn't friends\n          </div>\n          <div class=\"col-12\" *ngIf=\"gnomo.friends.length\">\n            <ul class=\"p-0\">\n              <li\n                *ngFor=\"let friend of gnomo.friends\"\n                class=\"amigo mx-1 badge badge-primary badge-pill\"\n                (click)=\"verAmigo(friend)\">\n                {{friend}}\n              </li>\n            </ul>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <!-- BOTÓN ATRAS HISTORIAL AMIGOS -->\n    <div\n      class=\"row d-flex align-items-center\"\n      *ngIf=\"mostrarBack()\">\n      <div class=\"col-8 text-right\">\n        You can return to the last gnome had seen clicking in these back button\n      </div>\n      <div class=\"col-4 text-left\">\n        <button\n          type=\"button\"\n          class=\"btn btn-primary btn-small\"\n          (click)=\"amigoBack()\">\n          <i class=\"far fa-hand-point-left\"></i>Back\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/gnome-info/gnome-info.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/gnome-info/gnome-info.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".amigo {\n  cursor: pointer; }\n\nbutton i {\n  margin-right: 0.5em; }\n"

/***/ }),

/***/ "./src/app/components/gnome-info/gnome-info.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/gnome-info/gnome-info.component.ts ***!
  \***************************************************************/
/*! exports provided: GnomeInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GnomeInfoComponent", function() { return GnomeInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _services_gnomes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/gnomes.service */ "./src/app/services/gnomes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GnomeInfoComponent = /** @class */ (function () {
    function GnomeInfoComponent(utils, gnomes) {
        this.utils = utils;
        this.gnomes = gnomes;
        this.cerrarFicha = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GnomeInfoComponent.prototype.ngAfterContentInit = function () {
        this.gnomosVistos = Array();
    };
    /**
     * cerrar: reinicia la lista de gnomos vistos y envía un mensaje para ejecutar
     * la función de cierre de la ficha de gnomo
     */
    GnomeInfoComponent.prototype.cerrar = function () {
        console.log('Cerrar ficha gnomo');
        // se reinicia la lista de gnomos vistos
        this.gnomosVistos = Array();
        // se cierra la ficha
        this.cerrarFicha.emit(null);
    };
    /**
     * verAmigo: carga los datos de un amigo de gnomo el la ficha
     * @param nombre: nombre del gnomo que se ha de consultar
     */
    GnomeInfoComponent.prototype.verAmigo = function (nombre) {
        // se almacena el gnomo actual en el historial de vistas
        this.gnomosVistos.push(this.gnomo.id);
        var idxAmigo = this.utils.eliminaEspaciosCadena(nombre);
        var amigo = this.gnomes.gnomoPorNombre(idxAmigo);
        this.gnomo = amigo;
    };
    /**
     * mostrarBack: muestra el botón para volver al gnomo visto anterior en la ficha
     * @returns: true si se ha de mostrar el botón (existe historial), false en caso contrario
     */
    GnomeInfoComponent.prototype.mostrarBack = function () {
        return this.utils.checkArrayHasData(this.gnomosVistos);
    };
    /**
     * amigoBack: extrae el último gnomo introducido en la lista de gnomos vistos
     * y muestra su información en la ficha
     */
    GnomeInfoComponent.prototype.amigoBack = function () {
        var idx = this.gnomosVistos.pop();
        var amigo = this.gnomes.gnomoPorId(idx);
        this.gnomo = amigo;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('close'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GnomeInfoComponent.prototype, "cerrarFicha", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('gnome'),
        __metadata("design:type", Object)
    ], GnomeInfoComponent.prototype, "gnomo", void 0);
    GnomeInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gnome-info',
            template: __webpack_require__(/*! ./gnome-info.component.html */ "./src/app/components/gnome-info/gnome-info.component.html"),
            styles: [__webpack_require__(/*! ./gnome-info.component.scss */ "./src/app/components/gnome-info/gnome-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"],
            _services_gnomes_service__WEBPACK_IMPORTED_MODULE_2__["GnomesService"]])
    ], GnomeInfoComponent);
    return GnomeInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/list-table/list-table.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/list-table/list-table.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row py-1\" *ngIf=\"titulo !== ''\">\n  <div class=\"col\">\n    <h3>\n      <i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i>\n      {{ titulo }}\n    </h3>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-12 table-responsive\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th *ngFor=\"let item of columnas\">\n            {{item.titulo}}\n          </th>\n          <th *ngIf=\"acciones.length\">\n            Options\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let linea of datos | orderby: campoOrden:tipoOrden; let l = index\">\n          <td *ngFor=\"let columna of columnas; let c = index\" [ngClass]=\"{\n              'text-center': columna.alineacion == 'centro',\n              'text-left': columna.alineacion == 'izquierda',\n              'text-right': columna.alineacion == 'derecha'\n            }\">\n            <span *ngIf=\"columna.tipo == 'icono'\">\n              <div\n                class=\"icono\"\n                [style.background]=\"'url(' + linea[columna.campo] + ')'\">\n              </div>\n            </span>\n            <span *ngIf=\"columna.tipo == 'moneda'\">\n              {{ linea[columna.campo] | number:'.2'}}&nbsp;&euro;\n            </span>\n            <span *ngIf=\"columna.tipo == 'texto'\">\n              {{ linea[columna.campo]}}\n            </span>\n            <span *ngIf=\"columna.tipo == 'fecha'\">\n              {{ linea[columna.campo] | date:'dd-MM-yyyy'}}\n            </span>\n          </td>\n          <td *ngIf=\"acciones.length\" class=\"text-center\">\n            <button class=\"btn btn-primary btn-sm\" *ngFor=\"let item of acciones; let a = index\" (click)=\"ejecutar(linea)\">\n              {{ item }}\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/list-table/list-table.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/list-table/list-table.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icono {\n  width: 64px;\n  height: 64px;\n  background-position: center center !important;\n  background-repeat: no-repeat !important;\n  background-attachment: scroll !important;\n  background-size: cover !important;\n  border-radius: 50%; }\n\ntable td {\n  vertical-align: middle; }\n"

/***/ }),

/***/ "./src/app/components/list-table/list-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/list-table/list-table.component.ts ***!
  \***************************************************************/
/*! exports provided: ListTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTableComponent", function() { return ListTableComponent; });
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

var ListTableComponent = /** @class */ (function () {
    function ListTableComponent() {
        this.titulo = '';
        this.tipoOrden = 'ASC';
        this.ejecutarAccion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ListTableComponent.prototype.ngOnInit = function () {
        if (this.campoOrden === undefined)
            this.campoOrden = '';
        if (this.acciones === undefined)
            this.acciones = [];
        console.log('Columnas:');
        console.log(this.columnas);
        console.log('Datos:');
        console.log(this.datos);
        console.log('Campo orden: ' + this.campoOrden);
    };
    /**
     * ejecutar: llama a ejecutar la acción definida para un registro de listado,
     * enviando los datos de la línea como parámetro
     * @param item: los datos de la línea sobre la que se ha ejecutado la opción
     */
    ListTableComponent.prototype.ejecutar = function (item) {
        console.log('TablaListadoComponent. Ejecutar acción: ', item);
        this.ejecutarAccion.emit(item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('columns'),
        __metadata("design:type", Array)
    ], ListTableComponent.prototype, "columnas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('data'),
        __metadata("design:type", Array)
    ], ListTableComponent.prototype, "datos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('orderColumn'),
        __metadata("design:type", String)
    ], ListTableComponent.prototype, "campoOrden", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('actions'),
        __metadata("design:type", Array)
    ], ListTableComponent.prototype, "acciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('title'),
        __metadata("design:type", String)
    ], ListTableComponent.prototype, "titulo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('orderType'),
        __metadata("design:type", String)
    ], ListTableComponent.prototype, "tipoOrden", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('execute'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ListTableComponent.prototype, "ejecutarAccion", void 0);
    ListTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-table',
            template: __webpack_require__(/*! ./list-table.component.html */ "./src/app/components/list-table/list-table.component.html"),
            styles: [__webpack_require__(/*! ./list-table.component.scss */ "./src/app/components/list-table/list-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListTableComponent);
    return ListTableComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <!-- CAJA PARA MOSTRAR LOS ERRORES -->\n  <app-message-box *ngIf=\"mostrarError()\" [errors]=\"mensajeError()\"></app-message-box>\n\n  <!-- CONTENEDOR CON EL BUSCARDOR Y EL LISTADO -->\n  <div *ngIf=\"!mostrarError()\">\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <h1>Brastlewark</h1>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <app-search-box\n          [showReset]=\"mostrarReset\"\n          [placeholder]=\"placeHolder\"\n          (buscar)=\"iniciarBusqueda($event)\">\n        </app-search-box>\n      </div>\n    </div>\n\n    <div id=\"fichaGnomo\">\n      <app-gnome-info\n        *ngIf=\"mostrarFichaGnomo\"\n        [gnome]=\"gnomoFicha\"\n        (close)=\"cerrarFicha()\">\n      </app-gnome-info>\n    </div>\n\n    <app-list-table\n      *ngIf=\"totalRegistros\"\n      [columns]=\"columnasListado\"\n      [data]=\"listado\"\n      [orderColumn]=\"campoOrden\"\n      [title]=\"tituloTabla\"\n      [actions]=\"accionesListado\"\n      (execute)=\"mostrarFicha($event)\"\n      orderType=\"ASC\">\n    </app-list-table>\n\n    <div class=\"row\"\n      *ngIf=\"totalRegistros\">\n      <div class=\"col-12\">\n        <ngb-pagination\n          class=\"d-flex justify-content-center\"\n          [collectionSize]=\"totalRegistros\"\n          [(page)]=\"pagina\"\n          size=\"sm\"\n          [maxSize]=\"numeroPaginas\"\n          [ellipses]=\"paginacionElipse\"\n          [boundaryLinks]=\"paginacionInicioFin\"\n          (pageChange)=\"cambiaPagina($event)\">\n        </ngb-pagination>\n      </div>\n    </div>\n\n    <!-- CAJA PARA MOSTRAR CUANDO LA BUSQUEDA NO DA RESULTADOS -->\n    <app-message-box *ngIf=\"mostrarNoResultados()\" [errors]=\"mensajeError()\"></app-message-box>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/list/list.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: auto; }\n  .card img {\n    width: 50%; }\n  table {\n  max-width: 50%; }\n  table th {\n    vertical-align: top; }\n  table td {\n    width: 50%; }\n  .profesiones ul, .amigos ul {\n  list-style: none; }\n  .profesiones ul li, .amigos ul li {\n    padding: 0 .5em;\n    display: inline !important; }\n"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/globals.service */ "./src/app/services/globals.service.ts");
/* harmony import */ var _services_gnomes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/gnomes.service */ "./src/app/services/gnomes.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListComponent = /** @class */ (function () {
    function ListComponent(globales, gnomes, utils, scrollToService) {
        this.globales = globales;
        this.gnomes = gnomes;
        this.utils = utils;
        this.scrollToService = scrollToService;
        this.cadenaBuscar = '';
        this.listado = Array();
    }
    ListComponent.prototype.ngOnInit = function () {
        this.iniciarValores();
        this.iniciarValoresPaginacion();
        this.iniciarValoresTabla();
        this.iniciarValoresBusqueda();
        this.iniciarValoresFichaGnomo();
    };
    ListComponent.prototype.ngDoCheck = function () {
        if (this.globales.primeraBusqueda) {
            this.globales.primeraBusqueda = false;
            this.buscar();
        }
    };
    /**
     * iniciarValoresFichaGnomo: inicia los valores necesarios para el manejo de la ficha de datos de gnomos
     */
    ListComponent.prototype.iniciarValoresFichaGnomo = function () {
        this.mostrarFichaGnomo = false;
    };
    /**
     * iniciarValoresBusqueda: inicia los valores necesarios para la caja de busqueda
     */
    ListComponent.prototype.iniciarValoresBusqueda = function () {
        this.placeHolder = 'Enter text to search';
        this.mostrarReset = false;
    };
    /**
     * iniciarValoresTabla: inicia los valores necesarios para mostrar la tabla con el listado de gnomos
     */
    ListComponent.prototype.iniciarValoresTabla = function () {
        this.columnasListado = [
            {
                titulo: 'Photo',
                campo: 'thumbnail',
                alineacion: 'centro',
                tipo: 'icono'
            },
            {
                titulo: 'Name',
                campo: 'name',
                alineacion: 'izquierda',
                tipo: 'texto'
            }
        ];
        this.tituloTabla = '';
        this.campoOrden = 'name';
        this.accionesListado = ['Show'];
    };
    /**
     * iniciarValoresPaginacion: inicia los valores necesario para el componente de paginación del listado
     */
    ListComponent.prototype.iniciarValoresPaginacion = function () {
        this.numeroPaginas = 5;
        this.paginacionElipse = false;
        this.paginacionInicioFin = true;
    };
    /**
     * iniciarValores: inicia los valores de paginación necesarios para ejecutar una busqueda
     */
    ListComponent.prototype.iniciarValores = function () {
        this.pagina = 1;
        this.totalRegistros = 0;
    };
    /**
     * iniciarBusqueda: se ejecuta al pulsar el botón 'Buscar', ejecuta una nueva busqueda de gnomos
     * @param texto: texto que se usará como criterio de busqueda
     */
    ListComponent.prototype.iniciarBusqueda = function (texto) {
        this.mostrarFichaGnomo = false;
        this.gnomoFicha = null;
        this.cadenaBuscar = texto;
        this.mostrarReset = false;
        this.iniciarValores();
        this.buscar();
    };
    /**
     * buscar: ejecuta una busqueda de gnomos a partir de texto introducido en la caja de busqueda
     * usando para la tarea el servicio de gnomos.
     */
    ListComponent.prototype.buscar = function () {
        var _this = this;
        // se indica, mediante variable global, que se estan cargando datos
        this.globales.cargando = true;
        // se inicializa el array para contener el listado
        this.listado = Array();
        // se llama al método buscarGnomes del servicio
        this.gnomes.buscarGnomes(this.cadenaBuscar)
            .subscribe(function (data) {
            console.log(_this.utils.fechaHora() + 'Busqueda de gnomos');
            console.log(_this.utils.fechaHora() + 'Total gnomos encontrados: ' + _this.gnomes.totalRegistros);
            console.log(data);
            if (_this.gnomes.totalRegistros) {
                // existen registros, se comprueba si el número de gnomos de la busqueda es diferente
                // que el total de gnomos (si estan todos no es necesario resetear), para mostrar el botón de reset.
                if (_this.gnomes.totalGnomes != _this.gnomes.totalRegistros) {
                    _this.mostrarReset = true;
                }
                _this.totalRegistros = _this.gnomes.totalRegistros;
                _this.listado = data;
            }
            else {
                // en caso de no recibir resultados se muestra el botón de reset para poder volver a mostrar todo el listado
                _this.mostrarReset = true;
            }
        }, function (error) {
            console.log('Error buscando gnomos');
        }, function () {
            // al final el proceso se indica que ya no se estan cargando datos para esconder el gráfico de carga
            _this.globales.cargando = false;
        });
    };
    ;
    /**
     * mostrarError: función para determinar si se muestra o no la caja de mensajes de error
     * @returns: true, en caso de que exista error y ha de mostrar la caja, false en caso contrario
     */
    ListComponent.prototype.mostrarError = function () {
        return (!this.globales.cargando && this.globales.errorDatos);
    };
    /**
     * mensajeError: devuelve un texto de error según el tipo de error que se haya producido
     * @returns: un mensaje de error
     */
    ListComponent.prototype.mensajeError = function () {
        var mensaje = '';
        if (this.globales.errorDatos) {
            mensaje = 'An error was produced when loading data';
        }
        else if (this.globales.noDataLoaded) {
            mensaje = 'Data not found';
        }
        else if (!this.totalRegistros) {
            mensaje = 'Data not found according to search criteria';
        }
        return mensaje;
    };
    /**
     * cambiaPagina: navega hacia una página determinada del listado de gnomos
     * actualiza el número de pagina del servicio de gnomos y ejecuta una busqueda
     * @param pagina pagina del listado que se ha de mostrar
     */
    ListComponent.prototype.cambiaPagina = function (pagina) {
        this.gnomes.pagina = (pagina - 1);
        this.buscar();
    };
    /**
     * mostrarNoResultados: indica si se ha de mostrar o no el
     * mensaje indicando que no se han obtenido resultados en la busqueda
     * @returns: true en caso que no existan registros en el resultado de la busqueda, false en caso contrario
     */
    ListComponent.prototype.mostrarNoResultados = function () {
        return (!this.globales.cargando && !this.totalRegistros);
    };
    /**
     * mostrarFicha: abre una ficha que muestra la información de un gnomo
     * @param gnomo: un objeto de tipo Gnome con la información de un gnomo
     */
    ListComponent.prototype.mostrarFicha = function (gnomo) {
        var _this = this;
        this.mostrarFichaGnomo = false;
        // retrasamos la vista de la ficha al siguiente ciclo de digest
        // para que se ejecute el evento ngAfterContentInit de la ficha de gnomo
        setTimeout(function () {
            _this.gnomoFicha = gnomo;
            _this.mostrarFichaGnomo = true;
            // retrasamos un poco (un clico de digest) el movimiento del scroll
            // para que la ficha ya exista en el DOM y el movimiento sea correcto
            // si no, al no 'existir' todavía la ficha, el movimiento se ve brusco.
            setTimeout(function () {
                var config = {
                    target: 'fichaGnomo'
                };
                _this.scrollToService.scrollTo(config);
            }, 5);
        }, 0);
    };
    /**
     * cerrarFicha: cierra la ficha de datos de gnomo
     */
    ListComponent.prototype.cerrarFicha = function () {
        this.gnomoFicha = null;
        this.mostrarFichaGnomo = false;
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/components/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_globals_service__WEBPACK_IMPORTED_MODULE_1__["GlobalsService"],
            _services_gnomes_service__WEBPACK_IMPORTED_MODULE_2__["GnomesService"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"],
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__["ScrollToService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/components/message-box/message-box.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/message-box/message-box.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hayErrores()\" class=\"row\">\n\n  <div class=\"col\" *ngIf=\"erroresEsTexto()\">\n\n    <div class=\"alert alert-danger\" role=\"alert\">\n      {{errores}}\n    </div>\n\n  </div>\n\n  <div class=\"col\" *ngIf=\"erroresEsArray()\">\n\n    <div *ngFor=\"let item of getErrores()\" class=\"alert alert-danger\" role=\"alert\">\n      {{item}}\n    </div>\n\n  </div>\n\n</div>\n\n<!--Sólo usado en caso de mostrar mensajes de confirmación-->\n<!--\n<div *ngIf=\"!hayErrores()\" class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"alert alert-success\" role=\"alert\">\n      Los datos se han guardado correctamente\n    </div>\n  </div>\n</div>\n-->\n"

/***/ }),

/***/ "./src/app/components/message-box/message-box.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/message-box/message-box.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/message-box/message-box.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/message-box/message-box.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessageBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBoxComponent", function() { return MessageBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageBoxComponent = /** @class */ (function () {
    function MessageBoxComponent(utils) {
        this.utils = utils;
    }
    MessageBoxComponent.prototype.ngOnInit = function () {
    };
    /**
     * hayErrores: comprueba si se ha recibido algún valor para el parámetro errores (sea texto o una matriz)
     * @returns: true en caso que errores tenga contenido, false en caso contrario
     */
    MessageBoxComponent.prototype.hayErrores = function () {
        if (this.erroresEsTexto()) {
            return this.utils.checkUndefinedNullTrue(this.errores);
        }
        else if (this.erroresEsArray()) {
            return (this.utils.checkArrayHasData(this.errores));
        }
    };
    /**
     * getErrores
     * @returns: devuelve el contenido de la propiedad errores
     */
    MessageBoxComponent.prototype.getErrores = function () {
        return this.errores;
    };
    /**
     * erroresEsTexto: comprueba si el contenido de errores es de tipo 'string'
     * @returns: true si es de tipo 'string', false en caso contrario
     */
    MessageBoxComponent.prototype.erroresEsTexto = function () {
        return typeof this.errores === 'string';
    };
    /**
     * erroresEsArray: comprueba si el contenido de errores es de tipo 'array'
     * @returns: true si es de tipo 'array', false en caso contrario
     */
    MessageBoxComponent.prototype.erroresEsArray = function () {
        return Array.isArray(this.errores);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("errors"),
        __metadata("design:type", Object)
    ], MessageBoxComponent.prototype, "errores", void 0);
    MessageBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-box',
            template: __webpack_require__(/*! ./message-box.component.html */ "./src/app/components/message-box/message-box.component.html"),
            styles: [__webpack_require__(/*! ./message-box.component.scss */ "./src/app/components/message-box/message-box.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]])
    ], MessageBoxComponent);
    return MessageBoxComponent;
}());



/***/ }),

/***/ "./src/app/components/search-box/search-box.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-box/search-box.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" class=\"caja-busqueda\">\n  <div class=\"col\">\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" [placeholder]=\"placeholder\" name=\"textoBusqueda\" [(ngModel)]=\"textoBusqueda\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"ejecutaBusqueda()\">\n          <i class=\"fa fa-search\" aria-hidden=\"true\"></i>Search\n        </button>\n      </span>\n    </div>\n    <div\n      *ngIf=\"mostrarReset\"\n      class=\"input-group d-flex justify-content-end mt-1\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"reset()\">\n          <i class=\"fa fa-undo-alt\" aria-hidden=\"true\"></i>Reset\n        </button>\n      </span>\n    </div>\n    <div class=\"alert alert-danger aviso-error\" role=\"alert\" *ngIf=\"error\">\n      You must enter a text to search\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/search-box/search-box.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-box/search-box.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".caja-busqueda {\n  margin: 0.5em 0; }\n  .caja-busqueda button i {\n    margin-right: 0.5em; }\n  .caja-busqueda .aviso-error {\n    margin-top: 0.5em; }\n"

/***/ }),

/***/ "./src/app/components/search-box/search-box.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/search-box/search-box.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function() { return SearchBoxComponent; });
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

var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent() {
        this.mostrarReset = false;
        this.placeholder = '';
        this.buscar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.error = false;
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
    };
    /**
     * ejecutaBusqueda: comprueba si se ha introducido un texto para buscar y muestra un mensaje de error en caso
     * que no exista o emite un mensaje para ejecutar la busqueda en caso que si.
     */
    SearchBoxComponent.prototype.ejecutaBusqueda = function () {
        this.error = false;
        if (!this.textoBusqueda) {
            this.error = true;
        }
        else {
            console.log('CajaBusquedaComponent. Texto a buscar: ' + this.textoBusqueda);
            this.buscar.emit(this.textoBusqueda);
        }
    };
    /**
     * reset: inicializa el texto de busqueda a cadena en blanco y ejecuta la busqueda para obtener el listado completo
     */
    SearchBoxComponent.prototype.reset = function () {
        this.textoBusqueda = '';
        this.buscar.emit(this.textoBusqueda);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('showReset'),
        __metadata("design:type", Boolean)
    ], SearchBoxComponent.prototype, "mostrarReset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('placeholder'),
        __metadata("design:type", String)
    ], SearchBoxComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchBoxComponent.prototype, "buscar", void 0);
    SearchBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-box',
            template: __webpack_require__(/*! ./search-box.component.html */ "./src/app/components/search-box/search-box.component.html"),
            styles: [__webpack_require__(/*! ./search-box.component.scss */ "./src/app/components/search-box/search-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());



/***/ }),

/***/ "./src/app/pipes/order.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/order.pipe.ts ***!
  \*************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, valores, direccion) {
        var cambiador = direccion == 'ASC' ? 1 : -1;
        array.sort(function (a, b) {
            if (a[valores] < b[valores]) {
                return -1 * cambiador;
            }
            else if (a[valores] > b[valores]) {
                return 1 * cambiador;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    OrderByPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'orderby',
            pure: false
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "./src/app/services/globals.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/globals.service.ts ***!
  \*********************************************/
/*! exports provided: GlobalsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalsService", function() { return GlobalsService; });
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

var GlobalsService = /** @class */ (function () {
    function GlobalsService() {
    }
    GlobalsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GlobalsService);
    return GlobalsService;
}());



/***/ }),

/***/ "./src/app/services/gnomes.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/gnomes.service.ts ***!
  \********************************************/
/*! exports provided: GnomesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GnomesService", function() { return GnomesService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals.service */ "./src/app/services/globals.service.ts");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.service */ "./src/app/services/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GnomesService = /** @class */ (function () {
    function GnomesService(utils, globales, peticiones) {
        this.utils = utils;
        this.globales = globales;
        this.peticiones = peticiones;
        this.listaGnomes = Array();
        this.listaNombresId = Array();
        this._pagina = 0;
        this._porPagina = 10;
        this._totalRegistros = 0;
    }
    Object.defineProperty(GnomesService.prototype, "pagina", {
        get: function () {
            return this._pagina;
        },
        set: function (valor) {
            this._pagina = valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GnomesService.prototype, "porPagina", {
        get: function () {
            return this._porPagina;
        },
        set: function (valor) {
            this._porPagina = valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GnomesService.prototype, "totalRegistros", {
        get: function () {
            return this._totalRegistros;
        },
        set: function (valor) {
            this._totalRegistros = valor;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * cargarLista: función encargada de cargar la lista de gnomos alojada en el servidor
     */
    GnomesService.prototype.cargarLista = function () {
        var _this = this;
        this.globales.errorDatos = false;
        this.globales.noDataLoaded = false;
        this.peticiones.setUrl('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');
        this.peticiones.peticion('GET')
            .subscribe(function (data) {
            console.log(_this.utils.fechaHora() + 'Los datos se han recuperado correctamente');
            if (!_this.utils.checkArrayHasData(data.Brastlewark)) {
                // la carga de datos no ha devuelto resultados
                console.log(_this.utils.fechaHora() + 'La lista no contiene resultados');
                _this.globales.errorDatos = true;
                _this.globales.noDataLoaded = true;
            }
            else {
                for (var _i = 0, _a = data.Brastlewark; _i < _a.length; _i++) {
                    var gnomo = _a[_i];
                    // se llena la lista de gnomos que maneja el servicio y otra lista para
                    // asociar los nombres de los gnomos con su id, se usará para la busqueda de amigos
                    _this.listaGnomes.push(gnomo);
                    var idx = _this.utils.eliminaEspaciosCadena(gnomo.name);
                    _this.listaNombresId[idx] = gnomo.id;
                }
                _this.totalGnomes = _this.listaGnomes.length;
                _this.globales.primeraBusqueda = true;
            }
        }, function (error) {
            console.log(_this.utils.fechaHora() + 'Se ha producido un error recuperando los datos');
            _this.globales.errorDatos = true;
        }, function () {
            console.log(_this.utils.fechaHora() + 'Petición lista gnomos finalizada');
        });
    };
    /**
     * buscarGnomes: buscar gnomos en la lista obtenida del servidor
     * @param cadena : cadena de texto que se usará como criterio de busqueda
     * @returns: un observable al que suscribirse
     */
    GnomesService.prototype.buscarGnomes = function (cadena) {
        var _this = this;
        if (cadena === void 0) { cadena = ''; }
        this._totalRegistros = 0;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            var resultado = Array();
            var inicio = _this._pagina * _this._porPagina;
            var fin = inicio + (_this._porPagina);
            if (!cadena) {
                // si no se recibe ninguna cadena filtrar se devuelve toda la lista
                _this._totalRegistros = _this.listaGnomes.length;
                resultado = _this.listaGnomes.slice(inicio, fin);
            }
            else {
                // se filtra por la cadena recibida
                var busqueda = _this.listaGnomes.filter(function (item) {
                    return RegExp(cadena, 'i').exec(item.name);
                });
                _this._totalRegistros = busqueda.length;
                resultado = busqueda.slice(inicio, fin);
            }
            observer.next(resultado);
            observer.complete();
        });
    };
    /**
     * gnomoPorNombre: devuelve los datos de un gnomo buscandolo a partir de su nombre
     * @param idx : el indice de texto de la tabla que relaciona nombres e ids
     * @returns: el gnomo relacionado con el id de texto recibido
     */
    GnomesService.prototype.gnomoPorNombre = function (idx) {
        var idxNumber = this.listaNombresId[idx];
        return this.listaGnomes[idxNumber];
    };
    /**
     * idGnomoPorNombre: devuelve el id de un gnomo buscandolo a partir de su nombre
     * @param idx : el indice de texto de la tabla que relaciona nombres e ids
     * @returns: el id del gnomo relacionado con el id de texto recibido
     */
    GnomesService.prototype.idGnomoPorNombre = function (idx) {
        return this.listaNombresId[idx];
    };
    /**
     * gnomoPorId: devuelve la información de un gnomo, buscandolo a partir de su id
     * @param idx : el indice numérico del gnomo que se ha de consultar
     * @returns: el gnomo relacionado con el id recibido
     */
    GnomesService.prototype.gnomoPorId = function (idx) {
        return this.listaGnomes[idx];
    };
    GnomesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"],
            _globals_service__WEBPACK_IMPORTED_MODULE_3__["GlobalsService"],
            _peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]])
    ], GnomesService);
    return GnomesService;
}());



/***/ }),

/***/ "./src/app/services/peticiones.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/peticiones.service.ts ***!
  \************************************************/
/*! exports provided: PeticionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeticionesService", function() { return PeticionesService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.service */ "./src/app/services/globals.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PeticionesService = /** @class */ (function () {
    function PeticionesService(globales, http) {
        this.globales = globales;
        this.http = http;
        this.datos = {};
        this.datosPeticion = [];
    }
    /**
     * iniciarPropiedades
     */
    PeticionesService.prototype.iniciarPropiedades = function () {
        this.datos = {};
        this.error = false;
    };
    /**
     * setDatosPeticion
     * @param datos
     */
    PeticionesService.prototype.setDatosPeticion = function (datos) {
        this.datosPeticion = datos;
    };
    /**
     * addDatosPeticion
     * @param item
     */
    PeticionesService.prototype.addDatosPeticion = function (item) {
        this.datosPeticion.push(item);
    };
    /**
     * setUrl
     * @param valor
     */
    PeticionesService.prototype.setUrl = function (valor) {
        this.url = valor;
    };
    /**
     * getDatos
     */
    PeticionesService.prototype.getDatos = function () {
        return this.datos;
    };
    /**
     * getError
     */
    PeticionesService.prototype.getError = function () {
        return this.error;
    };
    /**
     * accionesIniciales
     */
    PeticionesService.prototype.accionesIniciales = function () {
        var _this = this;
        this.iniciarPropiedades();
        setTimeout(function () {
            _this.globales.cargando = true;
        }, 0);
    };
    /**
     * accionesFinales
     * @param observer
     */
    PeticionesService.prototype.accionesFinales = function (observer) {
        this.datosPeticion = [];
        observer.next(this.datos);
        observer.complete();
        this.globales.cargando = false;
    };
    /**
     * parametros
     */
    PeticionesService.prototype.montaParametros = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        for (var _i = 0, _a = this.datosPeticion; _i < _a.length; _i++) {
            var i = _a[_i];
            params = params.append(i.variable, i.valor);
        }
        return params;
    };
    /**
     * get
     */
    PeticionesService.prototype.peticion = function (tipo) {
        var _this = this;
        this.accionesIniciales();
        var request;
        var params = this.montaParametros();
        var httpOptions;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        if (tipo === 'post') {
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            httpOptions = {
                headers: headers
            };
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            if (tipo === 'post') {
                request = _this.http.post(_this.url, params, httpOptions);
            }
            else {
                request = _this.http.get(_this.url, { params: params });
            }
            request
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                _this.accionesFinales(observer);
            }))
                .subscribe(function (data) {
                _this.datos = data;
            }, function (error) {
                if (error.error instanceof Error) {
                    console.error('An error occurred: ', error.error.message);
                }
                else {
                    console.error('Backend error - ', error.message);
                }
                _this.error = true;
            });
        });
    };
    PeticionesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PeticionesService);
    return PeticionesService;
}());



/***/ }),

/***/ "./src/app/services/utils.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/utils.service.ts ***!
  \*******************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
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

var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    /**
     * fechaHora: devuelve una cadena con la fecha y hora del sistema
     * @param flecha si ha de mostrar el caracter '>' después de la cadena de fecha y hora
     * @returns: la cadena con la fecha y hora del sistema
     */
    UtilsService.prototype.fechaHora = function (flecha) {
        if (flecha === void 0) { flecha = true; }
        var fecha = new Date();
        var dia = this.menorDiez(fecha.getDate());
        var mes = this.menorDiez(fecha.getMonth());
        var anyo = fecha.getFullYear().toString();
        var horas = this.menorDiez(fecha.getHours());
        var minutos = this.menorDiez(fecha.getMinutes());
        var segundos = this.menorDiez(fecha.getSeconds());
        return dia + '-' + mes + '-' + anyo + ' ' + horas + ':' + minutos + ':' + segundos + (flecha ? ' > ' : ' ');
    };
    /**
     * menorDiez: comprueba si un número es menor de diez, añadiendole un 0 delante si lo es.
     * @param numero: el número a comprobar
     * @returns: una cadena de texto con el número recibido formateado.
     */
    UtilsService.prototype.menorDiez = function (numero) {
        return (numero < 10 ? '0' + numero.toString() : numero.toString());
    };
    /**
     * checkUndefinedNullTrue: Comprueba si un valor no es indefinido, ni null y tiene contenido
     * @param value el valor a comprobar
     * @returns: true, en caso de que el valor cumpla la condición, false en caso contrario
     */
    UtilsService.prototype.checkUndefinedNullTrue = function (value) {
        return (value !== undefined && value !== null && value);
    };
    /**
     * checkArrayHasData: comprueba si un array no es ni indefinido, ni nulo y tiene datos
     * @param value: el array a comprobar
     * @returns: true en caso que el array tenga contenido, false en caso contrario
     */
    UtilsService.prototype.checkArrayHasData = function (value) {
        return (value !== undefined && value !== null && value.length > 0);
    };
    /**
     * elimina los espacios (' ') de una cadena de texto
     * @param cadena: la cadena a la que se han de eliminar los espacios
     * @returns la cadena formateada sin los espacios
     */
    UtilsService.prototype.eliminaEspaciosCadena = function (cadena) {
        return cadena.split(' ').join('');
    };
    UtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UtilsService);
    return UtilsService;
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

module.exports = __webpack_require__(/*! D:\proyectos\angular\pruebaaxa\BrastlewarkA6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map