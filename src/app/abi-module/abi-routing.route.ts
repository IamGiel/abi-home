import {Route} from '@angular/router';
import { AbiChatComponent } from './abi-chat/abi-chat.component';
import { AbiHomeComponent } from './abi-home/abi-home.component';
import { AbiComponent } from './abi.component';
import { FilesComponent } from './nav/files/files.component';
import { ReportsComponent } from './nav/reports/reports.component';

// const routes: Routes = [];
export const AbiRoute: Route[] = [
  {
    path: '',
    component: AbiComponent,
    children: [
      {
         path: '',
         component: AbiHomeComponent
      },
      {
        path: 'chat',
        component: AbiHomeComponent
     },
     
      {
        path: 'reports',
        component: ReportsComponent
     },
     {
      path: 'files',
      component: FilesComponent
   }
  ]
  },
  {
   path: 'chat-rm',
   component: AbiChatComponent
}

];
