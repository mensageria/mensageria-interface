import { ModalCadastrarConversaPage } from './../pages/modal-cadastrar-conversa/modal-cadastrar-conversa';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { ConversasProvider } from '../providers/conversas/conversas';
import { HttpHandler } from '@angular/common/http/src/backend';
import { SocketProvider } from '../providers/socket/socket';
import { IonicStorageModule } from '@ionic/storage';
import { StorageProvider } from '../providers/storage/storage';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { AlertProvider } from '../providers/alert/alert';
import { ParticipaProvider } from '../providers/participa/participa';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ModalCadastrarConversaPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ModalCadastrarConversaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    ConversasProvider,
    SocketProvider,
    StorageProvider,
    UsuarioProvider,
    AlertProvider,
    ParticipaProvider
  ]
})
export class AppModule {}
