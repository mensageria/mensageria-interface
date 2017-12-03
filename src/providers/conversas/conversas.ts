import { Conversa } from './../../models/conversa';
import { ApiProvider } from './../api/api';
import { Injectable } from '@angular/core';

@Injectable()
export class ConversasProvider {

  constructor(private api: ApiProvider) { }

  getAllConversas() {
    return this.api.get('conversas')
  }

  getUltimasMensagens(conversaId: number) {
    return this.api.get('mensagens/conversa?chatId=' + conversaId)
  }

  createConversa(conversa: Conversa){
    return this.api.post('conversas', conversa)
  }

}
