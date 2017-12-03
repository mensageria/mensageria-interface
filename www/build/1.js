webpackJsonp([1],{

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaConversasPageModule", function() { return ListaConversasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_conversas__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListaConversasPageModule = (function () {
    function ListaConversasPageModule() {
    }
    ListaConversasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lista_conversas__["a" /* ListaConversasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_conversas__["a" /* ListaConversasPage */]),
            ],
        })
    ], ListaConversasPageModule);
    return ListaConversasPageModule;
}());

//# sourceMappingURL=lista-conversas.module.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaConversasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_conversas_conversas__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_cadastrar_conversa_modal_cadastrar_conversa__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_events__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaConversasPage = (function () {
    function ListaConversasPage(navCtrl, navParams, conversasProvider, modalCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.conversasProvider = conversasProvider;
        this.modalCtrl = modalCtrl;
        this.events = events;
    }
    ListaConversasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.events.subscribe('conversa:atualizar', function (conversa) { return _this.atualizarConversas(conversa); });
        this.getAllConversas();
    };
    ListaConversasPage.prototype.atualizarConversas = function (conversa) {
        if (this.conversas.indexOf(conversa) == -1) {
            this.conversas.push(conversa);
        }
        else {
            this.conversas = this.conversas.splice(conversa);
        }
    };
    ListaConversasPage.prototype.getAllConversas = function () {
        var _this = this;
        this.conversasProvider.getAllConversas()
            .subscribe(function (conversas) { return _this.conversas = conversas; });
    };
    ListaConversasPage.prototype.openModal = function (characterNum) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_cadastrar_conversa_modal_cadastrar_conversa__["a" /* ModalCadastrarConversaPage */], characterNum);
        modal.present();
    };
    ListaConversasPage.prototype.criarConversa = function () {
        this.openModal({ charNum: 0 });
    };
    ListaConversasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-lista-conversas',template:/*ion-inline-start:"/home/born/projetos/mensageria-interface/src/pages/lista-conversas/lista-conversas.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>lista-conversas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3 *ngFor="let conversa of conversas">\n        <ion-card navPush="ChatConversaPage" [navParams]="{conversa: conversa}">\n          <ion-card-header>\n            <b>{{conversa.nome}}</b>\n          </ion-card-header>\n          <ion-card-content>\n            <div class="card-title">\n              <p>{{conversa.qtdMensagens}} Mensagens</p>\n            </div>\n            <div class="card-subtitle">\n              <p>{{conversa.qtdPessoas}} Pessoas</p>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-fab bottom right>\n    <button ion-fab (click)=criarConversa()>\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/born/projetos/mensageria-interface/src/pages/lista-conversas/lista-conversas.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_0__providers_conversas_conversas__["a" /* ConversasProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__providers_conversas_conversas__["a" /* ConversasProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_conversas_conversas__["a" /* ConversasProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_events__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_events__["a" /* Events */]) === "function" && _e || Object])
    ], ListaConversasPage);
    return ListaConversasPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=lista-conversas.js.map

/***/ })

});
//# sourceMappingURL=1.js.map