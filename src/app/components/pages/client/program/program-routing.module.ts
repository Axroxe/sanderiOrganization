import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramPage } from './program.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramPage
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramPageRoutingModule {}
