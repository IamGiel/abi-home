import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AbiRoute } from './abi-routing.route';
import { AbiHomeComponent } from './abi-home/abi-home.component';
import { AbiComponent } from './abi.component';


@NgModule({
  declarations: [
    AbiHomeComponent,
    AbiComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AbiRoute),
  ],
  exports: [AbiComponent]

})
export class TestModuleModule { }
