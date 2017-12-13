import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarUsuariosPage } from './cadastrar-usuarios';

@NgModule({
  declarations: [
    CadastrarUsuariosPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarUsuariosPage),
  ],
})
export class CadastrarUsuariosPageModule {}
