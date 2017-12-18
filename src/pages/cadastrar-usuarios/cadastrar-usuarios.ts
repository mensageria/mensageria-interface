import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario';

/**
 * Generated class for the CadastrarUsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-usuarios',
  templateUrl: 'cadastrar-usuarios.html',
})
export class CadastrarUsuariosPage {
  usuariosNaoCadastrados = [];
  selectedAll: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usuarioProvider: UsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarUsuariosPage');
    this.getUsuariosNaoCadastrados();
  }

  getUsuariosNaoCadastrados() {
    this.usuarioProvider.getLocalUsuarios().subscribe((localUsuarios: Array<Object>) => {
      this.usuarioProvider.getAllUsuarios().subscribe((usuarios: any) => {
        this.usuariosNaoCadastrados = this.filtrarListaDeUsuariosNaoCadastrados(localUsuarios, usuarios);
      })
    })
  }

  filtrarListaDeUsuariosNaoCadastrados(localUsuarios, usuarios) {
    return localUsuarios.filter((usuarioLocal: any) => {
      let achou = false;
      usuarios.forEach(usuarioApi => {
        if (usuarioLocal.email == usuarioApi.email) {
          achou = true;
          return;
        }
      })
      if (achou == false) {
        return usuarioLocal;
      }
    })
  }

  selectAll() {
    for (var i = 0; i < this.usuariosNaoCadastrados.length; i++) {
      this.usuariosNaoCadastrados[i].selected = this.selectedAll;
    }
  }

  checkIfAllSelected() {
    this.selectedAll = this.usuariosNaoCadastrados.every(function (item: any) {
      return item.selected == true;
    })
  }

  createUsuarios() {
    const usuarios = this.usuariosNaoCadastrados
      .filter(usuario => usuario.selected).map(usuario => {
        return {
          email: usuario.email,
          nome: usuario.nome
        }
      });
      
    this.usuarioProvider.createUsuarios(usuarios)
      .subscribe((usuariosApi: any) => {
        usuariosApi.forEach(usuarioApi => {
          this.usuariosNaoCadastrados.forEach(usuarioLocal => {
            if (usuarioLocal.email == usuarioApi.email) {
              this.usuariosNaoCadastrados.splice(this.usuariosNaoCadastrados.indexOf(usuarioLocal), 1);
            }
          })
        });
      })

  }

}
