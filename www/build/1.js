webpackJsonp([1],{

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatConversaPageModule", function() { return ChatConversaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_conversa__ = __webpack_require__(492);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatConversaPageModule = (function () {
    function ChatConversaPageModule() {
    }
    ChatConversaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_conversa__["a" /* ChatConversaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_conversa__["a" /* ChatConversaPage */]),
            ],
        })
    ], ChatConversaPageModule);
    return ChatConversaPageModule;
}());

//# sourceMappingURL=chat-conversa.module.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatConversaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_mensagem__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_storage_storage__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conversas_conversas__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_socket_socket__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_conversa__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_usuario__ = __webpack_require__(494);
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








/**
 * Generated class for the ChatConversaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatConversaPage = (function () {
    function ChatConversaPage(navCtrl, navParams, socketProvider, conversasProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socketProvider = socketProvider;
        this.conversasProvider = conversasProvider;
        this.storage = storage;
        this.topico = '/topic/mensagens/conversa/';
        this.usuario = new __WEBPACK_IMPORTED_MODULE_7__models_usuario__["a" /* Usuario */]();
        this.conversa = new __WEBPACK_IMPORTED_MODULE_6__models_conversa__["a" /* Conversa */]();
        this.inputMsg = new __WEBPACK_IMPORTED_MODULE_0__models_mensagem__["a" /* Mensagem */]();
        this.conversa = this.navParams.get('conversa');
        if (this.conversa == null) {
            this.navCtrl.setRoot('CadastrarUsuariosPage');
        }
        else {
            this.topico += this.conversa.id;
            this.inputMsg.conteudo = '';
        }
    }
    ChatConversaPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        this.conversa
                            ? this.subscribeTopic()
                            : this.navCtrl.setRoot('CadastrarUsuariosPage');
                        _a = this;
                        return [4 /*yield*/, this.storage._.get(this.storage.USUARIO)];
                    case 1:
                        _a.usuario = _b.sent();
                        if (!this.usuario) {
                            this.navCtrl.setRoot('CadastrarUsuariosPage');
                        }
                        this.inputMsg.autor = this.usuario;
                        this.inputMsg.chat = this.conversa;
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ChatConversaPage.prototype.enviarMensagem = function (conteudo) {
        this.inputMsg.conteudo = conteudo;
        this.inputMsg.dataEnvio = new Date();
        this.socketProvider.send('/app/enviar/mensagens/conversa/' + this.conversa.id, this.inputMsg);
        this.inputMsg.conteudo = '';
    };
    ChatConversaPage.prototype.subscribeTopic = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPreviousMessages()];
                    case 1:
                        _a.sent();
                        this.socketProvider.subscribe(this.topico, function (mensagem) { return _this.mensagemRecebida(mensagem); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatConversaPage.prototype.mensagemRecebida = function (data) {
        var res = JSON.parse(data.body);
        if (res.conteudo != null) {
            this.mensagens.push(res);
        }
        else if (res.recebido != null) {
            this.mensagens.forEach(function (mensagem) {
                if (mensagem.id == res.id) {
                    mensagem.listaRecebidos.push(res);
                }
            });
        }
        else {
            console.log('nao é de tipo nenhum:', res);
        }
    };
    ChatConversaPage.prototype.getPreviousMessages = function () {
        var _this = this;
        return this.conversasProvider.getUltimasMensagens(this.conversa.id)
            .subscribe(function (mensagens) {
            _this.mensagens = mensagens;
        });
    };
    ChatConversaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-chat-conversa',template:/*ion-inline-start:"/home/allison/git/mensageria-interface/src/pages/chat-conversa/chat-conversa.html"*/'<!--\n  Generated template for the ChatConversaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>chatConversa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let msg of mensagens">\n      <h1>Usuario: {{msg.autor.nome}}</h1>\n      <p>\n        <b>Mensagem: </b>{{msg.conteudo}}</p>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n<ion-footer>\n  <ion-item>\n    <ion-label color="primary" fixed>Mensagem: </ion-label>\n    <ion-input type="text" placeholder="Digite sua Mensagem" [(ngModel)]="inputMsg.conteudo" (keyup.enter)="enviarMensagem($event.target.value)"></ion-input>\n  </ion-item>\n</ion-footer>'/*ion-inline-end:"/home/allison/git/mensageria-interface/src/pages/chat-conversa/chat-conversa.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_storage_storage__["a" /* StorageProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_socket_socket__["a" /* SocketProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_conversas_conversas__["a" /* ConversasProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_storage_storage__["a" /* StorageProvider */]])
    ], ChatConversaPage);
    return ChatConversaPage;
}());

//# sourceMappingURL=chat-conversa.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mensagem; });
var Mensagem = (function () {
    function Mensagem(id, conteudo, dataEnvio, autor, chat, listaRecebidos) {
        this.id = id;
        this.conteudo = conteudo;
        this.dataEnvio = dataEnvio;
        this.autor = autor;
        this.chat = chat;
        this.listaRecebidos = listaRecebidos;
    }
    return Mensagem;
}());

//# sourceMappingURL=mensagem.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = (function () {
    function Usuario(id, email, emailConfirmado, nome, ultimoAcesso, prioridade, selecionado) {
        this.id = id;
        this.email = email;
        this.emailConfirmado = emailConfirmado;
        this.nome = nome;
        this.ultimoAcesso = ultimoAcesso;
        this.prioridade = prioridade;
        this.selecionado = selecionado;
    }
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ })

});
//# sourceMappingURL=1.js.map