import { ApiProvider } from './../api/api';
import { Injectable } from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

@Injectable()
export class SocketProvider {
  stompClient;
  socket;

  constructor(public apiProvider: ApiProvider) {
    this.connect();
  }

  connect() {
    this.socket = new SockJS(this.apiProvider.urlBase + '/mensageria');
    this.stompClient = Stomp.over(this.socket);
    this.stompClient.connect({})
  }

  subscribe(topic, callback) {
    return this.stompClient.subscribe(topic, callback)
  }

  send(topic, content){
    return this.stompClient.send(topic, {}, JSON.stringify(content))
  }

}
