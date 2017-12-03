import { Participa } from './../../models/participa';
import { Conversa } from './../../models/conversa';
import { ApiProvider } from './../api/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ParticipaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ParticipaProvider {

  constructor(private api: ApiProvider) {}

  createParticipa(participa: Participa[]){
    return this.api.post('participa', participa)
  }

}
