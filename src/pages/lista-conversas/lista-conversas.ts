import { ConversasProvider } from './../../providers/conversas/conversas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Conversa } from '../../models/conversa';
import { ModalCadastrarConversaPage } from '../modal-cadastrar-conversa/modal-cadastrar-conversa';
import { Events } from 'ionic-angular/util/events';

@IonicPage()
@Component({
  selector: 'page-lista-conversas',
  templateUrl: 'lista-conversas.html',
  providers: [ConversasProvider]
})
export class ListaConversasPage {
  conversas: Conversa[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public conversasProvider: ConversasProvider,
    public modalCtrl: ModalController,
    public events: Events) { }

  ionViewDidLoad() {
    this.events.subscribe('conversa:atualizar', conversa => this.atualizarConversas(conversa))
    this.getAllConversas();
  }

  atualizarConversas(conversa) {
    if (this.conversas.indexOf(conversa) == -1) {
      this.conversas.push(conversa);
    } else {
      this.conversas = this.conversas.splice(conversa);
    }
  }

  getAllConversas() {
    this.conversasProvider.getAllConversas()
      .subscribe((conversas: any) => this.conversas = conversas);
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalCadastrarConversaPage, characterNum);
    modal.present();
  }

  criarConversa() {
    this.openModal({ charNum: 0 })
  }

}
