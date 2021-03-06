import { Mensagem } from './../../models/mensagem';
import { StorageProvider } from './../../providers/storage/storage';
import { ConversasProvider } from './../../providers/conversas/conversas';
import { SocketProvider } from './../../providers/socket/socket';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Conversa } from '../../models/conversa';
import { Usuario } from '../../models/usuario';
import { UsuarioProvider } from '../../providers/usuario/usuario';

/**
 * Generated class for the ChatConversaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-conversa',
  templateUrl: 'chat-conversa.html',
  providers: [StorageProvider]
})
export class ChatConversaPage {
  topico: string = '/topic/mensagens/conversa/'
  usuario: Usuario = new Usuario();
  conversa: Conversa = new Conversa();
  mensagens: Mensagem[];
  inputMsg: Mensagem = new Mensagem();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public socketProvider: SocketProvider,
    public conversasProvider: ConversasProvider,
    public storage: StorageProvider,
    public usuarioProvider: UsuarioProvider) { }

  async ionViewDidLoad() {
    if (this.navParams.get('conversa')) {
      this.conversa = this.navParams.get('conversa');

      this.topico += this.conversa.id;
      this.inputMsg.conteudo = '';

      this.subscribeTopic();
      try {
        this.usuario = await this.storage._.get(this.storage.USUARIO)
        if (!this.usuario) {
          this.usuarioProvider.getUsuario(4).subscribe((usuario: any) => {
            this.usuario = usuario;
            this.storage._.set(this.storage.USUARIO, usuario);
          }, err => this.navCtrl.setRoot('ListaConversasPage'));
        }

        this.inputMsg.autor = this.usuario;
        this.inputMsg.chat = this.conversa;
      } catch (err) {
        console.log(err)
      }
    } else {
      this.navCtrl.setRoot('ListaConversasPage')
    }


  }

  enviarMensagem(conteudo) {
    this.inputMsg.conteudo = conteudo;
    this.inputMsg.dataEnvio = new Date();
    this.socketProvider.send('/app/enviar/mensagens/conversa/' + this.conversa.id, this.inputMsg);
    this.inputMsg.conteudo = '';
  }

  async subscribeTopic() {
    await this.getPreviousMessages();
    this.socketProvider.subscribe(this.topico, (mensagem) => this.mensagemRecebida(mensagem))
  }

  mensagemRecebida(data) {
    const res = JSON.parse(data.body);
    if (res.conteudo != null) {
      this.mensagens.push(res)
    } else if (res.recebido != null) {
      this.mensagens.forEach(mensagem => {
        if (mensagem.id == res.id) {
          mensagem.listaRecebidos.push(res)
        }
      })
    } else {
      console.log('nao é de tipo nenhum:', res)
    }
  }

  getPreviousMessages() {
    return this.conversasProvider.getUltimasMensagens(this.conversa.id)
      .subscribe((mensagens: any) => {
        this.mensagens = mensagens;
      })
  }

}
