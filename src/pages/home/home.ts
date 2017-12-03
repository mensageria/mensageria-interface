import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Usuario } from './../../models/usuario';
import { StorageProvider } from './../../providers/storage/storage';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public storage: StorageProvider,
    public usuarioProvider: UsuarioProvider) {
  }

  ionViewDidLoad(){
      //TODO depois tem que fazer algum tipo de login pra pegar o usuario

      this.usuarioProvider.getUsuario(4).subscribe(usuario =>{
        this.storage._.set(this.storage.USUARIO, usuario);
      })
  }

}
