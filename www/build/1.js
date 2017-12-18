webpackJsonp([1],{

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaConversasPageModule", function() { return ListaConversasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_conversas__ = __webpack_require__(368);
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

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaConversasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_conversas_conversas__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_cadastrar_conversa_modal_cadastrar_conversa__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_events__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_storage_storage__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ListaConversasPage = (function () {
    function ListaConversasPage(navCtrl, navParams, conversasProvider, modalCtrl, events, usuarioProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.conversasProvider = conversasProvider;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.usuarioProvider = usuarioProvider;
        this.storage = storage;
    }
    ListaConversasPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.events.subscribe('conversa:atualizar', function (conversa) { return _this.atualizarConversas(conversa); });
                        return [4 /*yield*/, this.usuarioProvider.getUsuario(4).subscribe(function (usuario) {
                                _this.storage._.set(_this.storage.USUARIO, usuario);
                            })];
                    case 1:
                        _a.sent();
                        this.getAllConversas();
                        return [2 /*return*/];
                }
            });
        });
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
            .subscribe(function (conversas) {
            _this.conversas = conversas;
            //this.criarChart();
        });
    };
    ListaConversasPage.prototype.openModal = function (characterNum) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_cadastrar_conversa_modal_cadastrar_conversa__["a" /* ModalCadastrarConversaPage */], characterNum);
        modal.present();
    };
    ListaConversasPage.prototype.criarConversa = function () {
        this.openModal({ charNum: 0 });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], ListaConversasPage.prototype, "lineCanvas", void 0);
    ListaConversasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-lista-conversas',template:/*ion-inline-start:"/home/born/projetos/mensageria-interface/src/pages/lista-conversas/lista-conversas.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n    <ion-title>Conversas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3 *ngFor="let conversa of conversas">\n        <ion-card navPush="ChatConversaPage" [navParams]="{conversa: conversa}" color="secondary">\n          <ion-card-header>\n            <b>{{conversa.nome}}</b>\n          </ion-card-header>\n          <ion-card-content>\n            <div class="detalhes">\n              <div class="card-title">\n                <p>{{conversa.qtdMensagens}} Mensagens</p>\n              </div>\n              <div class="card-subtitle">\n                <p>{{conversa.qtdPessoas}} Pessoas</p>\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-fab bottom right>\n    <button ion-fab (click)=criarConversa()>\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/born/projetos/mensageria-interface/src/pages/lista-conversas/lista-conversas.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_0__providers_conversas_conversas__["a" /* ConversasProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_conversas_conversas__["a" /* ConversasProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_events__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_storage_storage__["a" /* StorageProvider */]])
    ], ListaConversasPage);
    return ListaConversasPage;
}());

//# sourceMappingURL=lista-conversas.js.map

/***/ })

});
//# sourceMappingURL=1.js.map