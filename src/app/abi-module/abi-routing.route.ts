import {Route} from '@angular/router';
import { AbiHomeComponent } from './abi-home/abi-home.component';
import { AbiComponent } from './abi.component';

// const routes: Routes = [];
export const AbiRoute: Route[] = [
  {
    path: '',
    component: AbiComponent
  },
  {
    path: 'chat',
    component: AbiHomeComponent
  }

];
