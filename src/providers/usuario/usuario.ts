import { ApiProvider } from './../api/api';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioProvider {

  constructor(private api: ApiProvider) { }

  getUsuario(usuarioId: number) {
    return this.api.get('usuarios/' + usuarioId)
  }

  createUsuarios(usuarios){
    return this.api.post('/usuarios', usuarios)
  }

  getAllUsuarios() {
    return this.api.get('usuarios')
  }

  getLocalUsuarios(){
    return this.api.http.get('/assets/usuarios.json')
  }
}
