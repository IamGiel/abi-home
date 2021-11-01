import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AbiRoute } from './abi-routing.route';
import { AbiHomeComponent } from './abi-home/abi-home.component';
import { AbiComponent } from './abi.component';
import { ReportsComponent } from './nav/reports/reports.component';
import { FilesComponent } from './nav/files/files.component';
import { PreviewComponent } from './nav/preview/preview.component';
import { OneReachContainerComponent } from './one-reach-container/one-reach-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { ChatHistoryRendererComponent } from './chat-history-renderer/chat-history-renderer.component';
import { AbiChatComponent } from './abi-chat/abi-chat.component';
import { ChatsComponent } from './nav/chats/chats.component';

@NgModule({
  declarations: [
    AbiHomeComponent,
    AbiComponent,
    AbiChatComponent,
    ReportsComponent,
    FilesComponent,
    PreviewComponent,
    OneReachContainerComponent,
    ChatHistoryRendererComponent,
    ChatsComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AbiRoute),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [AbiComponent]

})
export class AbiModule { }
