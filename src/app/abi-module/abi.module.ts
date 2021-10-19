import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AbiRoute } from './abi-routing.route';
import { AbiHomeComponent } from './abi-home/abi-home.component';
import { AbiComponent } from './abi.component';
import { ReportsComponent } from './reports/reports.component';
import { FilesComponent } from './files/files.component';
import { PreviewComponent } from './preview/preview.component';
import { AbiChatComponent } from './abi-chat/abi-chat.component';
import { OneReachContainerComponent } from './one-reach-container/one-reach-container.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AbiHomeComponent,
    AbiComponent,
    ReportsComponent,
    FilesComponent,
    PreviewComponent,
    AbiChatComponent,
    OneReachContainerComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AbiRoute),
    TooltipModule.forRoot()
  ],
  exports: [AbiComponent]

})
export class TestModuleModule { }
