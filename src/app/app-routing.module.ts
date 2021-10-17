import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'abi-ai',
    loadChildren: () => import('./abi-module/abi.module').then(m => m.TestModuleModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home-module/new-module.module').then(m => m.NewModuleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
