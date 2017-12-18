webpackJsonp([2],{

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarUsuariosPageModule", function() { return CadastrarUsuariosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_usuarios__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastrarUsuariosPageModule = (function () {
    function CadastrarUsuariosPageModule() {
    }
    CadastrarUsuariosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastrar_usuarios__["a" /* CadastrarUsuariosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastrar_usuarios__["a" /* CadastrarUsuariosPage */]),
            ],
        })
    ], CadastrarUsuariosPageModule);
    return CadastrarUsuariosPageModule;
}());

//# sourceMappingURL=cadastrar-usuarios.module.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarUsuariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_usuario_usuario__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CadastrarUsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastrarUsuariosPage = (function () {
    function CadastrarUsuariosPage(navCtrl, navParams, usuarioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioProvider = usuarioProvider;
        this.usuariosNaoCadastrados = [];
    }
    CadastrarUsuariosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastrarUsuariosPage');
        this.getUsuariosNaoCadastrados();
    };
    CadastrarUsuariosPage.prototype.getUsuariosNaoCadastrados = function () {
        var _this = this;
        this.usuarioProvider.getLocalUsuarios().subscribe(function (localUsuarios) {
            _this.usuarioProvider.getAllUsuarios().subscribe(function (usuarios) {
                _this.usuariosNaoCadastrados = _this.filtrarListaDeUsuariosNaoCadastrados(localUsuarios, usuarios);
            });
        });
    };
    CadastrarUsuariosPage.prototype.filtrarListaDeUsuariosNaoCadastrados = function (localUsuarios, usuarios) {
        return localUsuarios.filter(function (usuarioLocal) {
            var achou = false;
            usuarios.forEach(function (usuarioApi) {
                if (usuarioLocal.email == usuarioApi.email) {
                    achou = true;
                    return;
                }
            });
            if (achou == false) {
                return usuarioLocal;
            }
        });
    };
    CadastrarUsuariosPage.prototype.selectAll = function () {
        for (var i = 0; i < this.usuariosNaoCadastrados.length; i++) {
            this.usuariosNaoCadastrados[i].selected = this.selectedAll;
        }
    };
    CadastrarUsuariosPage.prototype.checkIfAllSelected = function () {
        this.selectedAll = this.usuariosNaoCadastrados.every(function (item) {
            return item.selected == true;
        });
    };
    CadastrarUsuariosPage.prototype.createUsuarios = function () {
        var _this = this;
        var usuarios = this.usuariosNaoCadastrados
            .filter(function (usuario) { return usuario.selected; }).map(function (usuario) {
            return {
                email: usuario.email,
                nome: usuario.nome
            };
        });
        this.usuarioProvider.createUsuarios(usuarios)
            .subscribe(function (usuariosApi) {
            usuariosApi.forEach(function (usuarioApi) {
                _this.usuariosNaoCadastrados.forEach(function (usuarioLocal) {
                    if (usuarioLocal.email == usuarioApi.email) {
                        _this.usuariosNaoCadastrados.splice(_this.usuariosNaoCadastrados.indexOf(usuarioLocal), 1);
                    }
                });
            });
        });
    };
    CadastrarUsuariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-cadastrar-usuarios',template:/*ion-inline-start:"/home/born/projetos/mensageria-interface/src/pages/cadastrar-usuarios/cadastrar-usuarios.html"*/'<!--\n  Generated template for the CadastrarUsuariosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="header">\n    <ion-title>Usuarios</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button medium color="danger" (click)="createUsuarios()">\n    Cadastrar usuários selecionados\n  </button>\n\n  <ion-item color="secondary" no-lines>\n    <ion-label>Selecionar todos</ion-label>\n    <ion-checkbox [(ngModel)]="selectedAll" (ionChange)="selectAll()"></ion-checkbox>\n  </ion-item>\n  <ion-list no-lines inset>\n    <ion-item *ngFor="let usuario of usuariosNaoCadastrados" color="secondary">\n      <ion-label>{{usuario.nome}}</ion-label>\n      <ion-checkbox [(ngModel)]="usuario.selected" name="nomeUsuario"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/born/projetos/mensageria-interface/src/pages/cadastrar-usuarios/cadastrar-usuarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], CadastrarUsuariosPage);
    return CadastrarUsuariosPage;
}());

//# sourceMappingURL=cadastrar-usuarios.js.map

/***/ })

});
//# sourceMappingURL=2.js.map