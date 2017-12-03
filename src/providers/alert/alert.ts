import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertProvider {

  constructor(public alertCtrl: AlertController) { }

  presentAlert(mensagem) {
    const alert = this.alertCtrl.create({
      title: mensagem.title,
      subTitle: mensagem.subTitle,
      buttons: mensagem.buttons
    });
    return alert.present()
  }

  returnAlert(mensagem) {
    const alert = this.alertCtrl.create({
      title: mensagem.title,
      subTitle: mensagem.subTitle,
      buttons: mensagem.buttons
    });
    return alert
  }

}
