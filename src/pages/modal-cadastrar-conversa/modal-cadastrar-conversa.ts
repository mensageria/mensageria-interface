import { Events } from 'ionic-angular/util/events';
import { AlertProvider } from './../../providers/alert/alert';
import { Participa } from './../../models/participa';
import { ParticipaProvider } from './../../providers/participa/participa';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Usuario } from './../../models/usuario';
import { Conversa } from './../../models/conversa';
import { Component } from '@angular/core';

import { Platform, NavParams, ViewController, AlertController } from 'ionic-angular';
import { ConversasProvider } from '../../providers/conversas/conversas';

@Component({
    selector: 'modal-cadastrar-conversa',
    templateUrl: 'modal-cadastrar-conversa.html',
    providers: [UsuarioProvider, ConversasProvider, ParticipaProvider]
})
export class ModalCadastrarConversaPage {
    conversa: Conversa = new Conversa();
    usuarios: Usuario[];

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController,
        public usuarioProvider: UsuarioProvider,
        public conversasProvider: ConversasProvider,
        public participaProvider: ParticipaProvider,
        public alertProvider: AlertProvider,
        public events: Events,
    ) { }

    ionViewDidLoad() {
        this.conversa.interativa = false;
        this.usuarioProvider.getAllUsuarios()
            .subscribe((usuarios: any) => {
                this.usuarios = usuarios;
                console.log('user:', usuarios)
            })
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    cadastrarConversa() {
        this.conversa.dataCriacao = new Date();
        this.conversasProvider.createConversa(this.conversa)
            .subscribe((conversa: any) => {
                let participa: Participa[] = new Array<Participa>();

                this.usuarios.filter(el => el.selecionado)
                    .forEach(usuario => {
                        participa.push({ conversa: conversa, usuario: usuario })
                    })

                this.participaProvider.createParticipa(participa)
                    .subscribe(part => {
                        this.events.publish('conversa:atualizar', conversa);
                        this.alertProvider.presentAlert({ title: 'Conversa Criada.', buttons: ['Ok'], subTitle: 'Conversa criada com sucesso.' });
                    })
            })
    }
}