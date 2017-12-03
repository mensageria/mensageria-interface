import { ApiProvider } from './../api/api';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioProvider {

  constructor(private api: ApiProvider) { }

  getUsuario(usuarioId: number) {
    return this.api.get('usuarios/' + usuarioId)
  }

  getAllUsuarios() {
    return this.api.get('usuarios')
  }
}
