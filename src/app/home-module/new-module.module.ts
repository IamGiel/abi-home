import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { RouterModule } from '@angular/router';
import { NewCompRoute } from './new-routing.route';



@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(NewCompRoute),

  ]
})
export class NewModuleModule { }
