import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubdetailPage } from './subdetail.page';

const routes: Routes = [
  {
    path: '',
    component: SubdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubdetailPageRoutingModule {}
