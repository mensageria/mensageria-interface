import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatConversaPage } from './chat-conversa';

@NgModule({
  declarations: [
    ChatConversaPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatConversaPage),
  ],
})
export class ChatConversaPageModule {}
