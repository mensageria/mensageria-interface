import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaConversasPage } from './lista-conversas';

@NgModule({
  declarations: [
    ListaConversasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaConversasPage),
  ],
})
export class ListaConversasPageModule {}
