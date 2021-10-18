import {Route} from '@angular/router';
import { AbiHomeComponent } from './abi-home/abi-home.component';
import { AbiComponent } from './abi.component';
import { FilesComponent } from './files/files.component';
import { ReportsComponent } from './reports/reports.component';

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
  // {
  //   path: 'abi-ai/chat',
  //   component: AbiHomeComponent
  // }

];
