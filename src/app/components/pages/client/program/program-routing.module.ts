import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramPage } from './program.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramPage,
    children: [
      {
        path: 'detail/:name',
        loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
      },
      {
        path: 'detail/:name/:subname',
        loadChildren: () => import('./detail/subdetail/subdetail.module').then( m => m.SubdetailPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramPageRoutingModule {}
