import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {
  readonly USUARIO = 'usuario';

  constructor(public _: Storage) {}

}
